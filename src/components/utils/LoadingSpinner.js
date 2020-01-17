import React from 'react';

const LoadingSpinner = ({ loading }) => {
  return (
    <>
      {loading &&
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      }
    </>
  );
}

export default LoadingSpinner;