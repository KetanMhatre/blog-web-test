import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
function SearchModal() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/category/${searchQuery.trim()}`);
      setShowModal(false);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          background: 'none',
          color: 'black',
          border: 'none',
          fontSize: '1.7rem',
        }}
      >
        <CiSearch />
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3'>
            <Form.Label>Search for category</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter category'
              value={searchQuery}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className='d-flex justify-content-end'>
            <Button variant='primary' onClick={handleSearch}>
              Search
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
