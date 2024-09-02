import React from 'react';

function SignUpModal() {
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#signUpModal'
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'black',
        }}
      >
        Sign Up
      </button>
      <div
        className='modal fade'
        id='signUpModal'
        tabIndex='-1'
        aria-labelledby='signUpModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='signUpModalLabel'>
                Sign Up
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='mb-3'>
                  <label htmlFor='emailInput' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='emailInput'
                    placeholder='Enter your email'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='passwordInput' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='passwordInput'
                    placeholder='Enter your password'
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
