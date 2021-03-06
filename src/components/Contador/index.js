import React from 'react';

class Contador extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      contador: props.inicio,
      tempo: props.tempo
    }
  }

  componentDidMount() {
    this.iniciarContador();
  }

  componentWillUnmount() {
    clearInterval(this.contadorInterval);
  }

  iniciarContador = () => {
    this.contadorInterval = setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, this.state.tempo)
  }

  render() {
    return (
      <p>
        <span>Contador: </span>
        <strong>
          {this.state.contador}
        </strong>
      </p>
    );
  }
}

export default Contador;