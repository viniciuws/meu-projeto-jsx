import React from 'react';

const Titulo = (props) => {
  const style = {
    color: props.textColor,
    width: '100%',
    textAlign: 'center'
  }
  return (
    <h1
      style={style}
    >
      {props.children}
    </h1>
  )
};

export default Titulo;