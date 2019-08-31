import axios from 'axios';
import React, { Component, createRef } from 'react';
import { Form as FinalForm } from 'react-final-form';
import { connect } from 'react-redux';
import { Button, Form, Spinner } from 'reactstrap';
import { addPostAction, clearPostAction } from '../../redux/posts';
import { validatePostDescription } from '../../utils/validations';
import InputField from '../InputField';

class PostForm extends Component {

  constructor(props) {
    super(props);

    this.inputDescription = createRef();
  }

  onSubmit = (values, form) => {
    return axios.get('https://viacep.com.br/ws/01001000/json')
      .then(() => {
        const { addPost } = this.props;
        const { description } = values;
        addPost(description);
        this.inputDescription.current.focus();
        setTimeout(form.reset);
      })
  }

  onClearClick = () => {
    const { clearPost } = this.props;
    clearPost();
  }

  renderForm = (renderProps) => {
    const { handleSubmit, form } = renderProps;
    const { submitting, pristine, invalid } = form.getState();
    return (
      <Form onSubmit={handleSubmit} className="mb-3">
        <h1>Postagens</h1>

        <InputField
          rows={4}
          type="textarea"
          name="description"
          id="input-description"
          label="Descrição"
          innerRef={this.inputDescription}
          validate={validatePostDescription}
        />

        <Button
          color="primary"
          disabled={submitting || pristine || invalid}
          type="submit">
          {submitting ? <Spinner size="sm" /> : null}
          <span> Postar</span>
        </Button>
        {' '}
        <Button type="button" onClick={this.onClearClick}>Limpar</Button>
      </Form>
    )
  }

  render() {
    return (
      <FinalForm
        onSubmit={this.onSubmit}
        render={this.renderForm}
      />
    );
  }
}

const mapDispatchToProps = {
  addPost: addPostAction,
  clearPost: clearPostAction,
}

export default connect(null, mapDispatchToProps)(PostForm);
// o connet recebe  como props nativamente