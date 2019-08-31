import React, { Component } from 'react';

import { Alert } from 'reactstrap';

import Contador from '../components/Contador';
import Titulo from '../components/Titulo';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Titulo textColor="black">
          ReactApp
                </Titulo>
        <Contador inicio={15} tempo={1000} />
        <Contador inicio={150} />
        <div className="alerts">
          <Alert color="primary">
            R
          </Alert>
          <Alert color="secondary">
            E
            </Alert>
          <Alert color="success">
            A
          </Alert>
          <Alert color="danger">
            C
          </Alert>
          <Alert color="warning">
            T
          </Alert>
        </div>
      </div>
    );
  }
}