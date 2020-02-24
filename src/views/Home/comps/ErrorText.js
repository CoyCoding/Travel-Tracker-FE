import React from 'react';

const ErrorText = (props) => {
  console.log(props)
  return (
      <>
        { props.error ? <p>{ props.error }</p> : null }
      </>
  )
}



export default ErrorText;