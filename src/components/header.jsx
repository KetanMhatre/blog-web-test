import React from 'react';
import SubscribeModal from './subscribe-modal';
import SignUpModal from './sign-up-modal';
import SearchModal from './searchModal';

function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center pt-4 '>
      <div className='d-none d-md-block'>
        <SubscribeModal />
      </div>
      <h2 className='text-capitalize text-center mb-0'>blog app</h2>
      <div>
        <div className='d-flex align-items-center'>
          <SearchModal />
          <div className='d-none d-md-block  px-3 border border-dark-subtle bg-transparent'>
            <SignUpModal />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
