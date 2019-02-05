import React from 'react';
import style from './styles.scss';

import Basic from './basic'
import Footer from './form'
import Form from './footer'

const Button = props => {
  return (
    <>
      {props.type === 'basic' && <Basic {...props} />}
      {props.type === 'footer' && <Footer {...props} />}
      {props.type === 'form' && <Form {...props} />}
    </>
  )
}



export default Button
