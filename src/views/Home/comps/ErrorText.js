import React from 'react';

const ErrorText = (props) => {
  return (
      <>
        { props.error ? <p>{ props.error }</p> : null }
      </>
  )
}



export default ErrorText;