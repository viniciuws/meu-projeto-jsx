import React from 'react';

import { Field } from 'react-final-form';

import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

const renderField = fieldProps => {
  const { meta, input, id, label, ...others } = fieldProps;
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input
        id={id}
        valid={meta.touched && meta.valid}
        invalid={meta.touched && meta.invalid}
        {...others}
        {...input}
      />
      <FormFeedback>{meta.error}</FormFeedback>
    </FormGroup>
  )
}

const InputField = (props) => (
  <Field
    render={renderField}
    {...props}
    />
)

export default InputField;