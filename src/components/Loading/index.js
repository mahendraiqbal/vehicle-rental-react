import React from 'react';
import vehicle from '../../assets/vehicles.gif';
import './index.css';

function index() {
  return (
    <div className='container product-content-wrapper my-5 py-5'>
      <div className='row justify-content-center'>
        <div className='col'>
          <img src={vehicle} alt='loading' className='coffee-loading' />
        </div>
      </div>
    </div>
  );
}

export default index;