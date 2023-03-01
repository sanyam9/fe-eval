import React from 'react';
import { useParams } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  const { errorCode } = useParams();
  return (
    <div className='error-container'>
      <p>Something went wrong! </p>
      {errorCode && <p>{`Error code: ${errorCode}`}</p>}
    </div>
  );
}

export default ErrorPage;
