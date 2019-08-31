
import React from 'react';
import testRenderer from 'react-test-renderer'
import { shallow } from 'enzyme';

import Titulo from '../Titulo'

describe('Shalow tests', () => {
  test('Testa se o componente interno é h1', () => {
    const component = shallow(<Titulo>Meu Título</Titulo>);
    const element = component.getElement();
    expect(element.type).toBe('h1');
  })
  test('Testa a cor do texto', () => {
    const component = shallow(<Titulo textColor="green">Meu Título</Titulo>);
    const styleColor = component.props().style.color;
    expect(styleColor).toBe('green');
  })
  test('Testa o texto de saída do componente', () => {
    const component = shallow(<Titulo textColor="green">Meu Título</Titulo>);
    const text = component.text();
    expect(text).toBe('Meu Título');
  })
});

describe('Snapshot tests', () => {
  test('se o componente renderiza de acordo com a snapshot', () => {
    const tree = testRenderer
      .create(<Titulo>Meu título</Titulo>)
      .toJSON();
    expect(tree).toMatchSnapshot();

  })
})