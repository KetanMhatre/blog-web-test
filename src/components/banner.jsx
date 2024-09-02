import React, { useEffect, useState } from 'react';
import { fetchBlogById } from '../utils/fetch';
import { useNavigate, useParams } from 'react-router';
import { Card, CardBody } from 'react-bootstrap';

function Banner() {
  const blogId = 1971204;
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchBlog = async () => {
      const result = await fetchBlogById(blogId);
      if (result.error) {
        setError(result.error);
      } else {
        setBlog(result);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }
  const handleTitleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  const { title, cover_image, description } = blog;
  return (
    <div>
      <div className='d-none d-md-block position-relative mt-3'>
        <img
          src={cover_image}
          alt={title}
          className='rounded-3'
          style={{ width: '100%', height: 'auto' }}
        />
        <div
          className='d-none position-absolute top-0 left-0 p-5 text-white d-md-flex justify-content-center flex-column align-items-center h-100'
          style={{ maxWidth: '600px' }}
        >
          <h1 style={{ fontStyle: 'italic', fontWeight: '600' }}>{title}</h1>
          <p style={{ fontSize: '1.3rem' }} className='mt-3'>
            {description}
          </p>
          <button
            className='border-0 bg-transparent text-white mr-0 fw-light'
            onClick={() => handleTitleClick(blogId)}
            style={{
              fontSize: '1.2rem',
              alignSelf: 'flex-start',
              ontStyle: 'italic',
            }}
          >
            Continue reading...
          </button>
        </div>
      </div>
      <Card className='d-md-none'>
        <CardBody>
          <img
            src={cover_image}
            alt={title}
            className='rounded-3'
            style={{ width: '100%', height: 'auto' }}
          />
          <h1
            className='mt-3'
            style={{ fontStyle: 'italic', fontWeight: '600' }}
          >
            {title}
          </h1>
          <p style={{ fontSize: '1rem' }} className='mt-3'>
            {description}
          </p>
          <button
            className='border-0 bg-transparent mr-0 fw-light'
            onClick={() => handleTitleClick(blogId)}
            style={{
              fontSize: '1.2rem',
              alignSelf: 'flex-start',
              ontStyle: 'italic',
            }}
          >
            Continue reading...
          </button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Banner;
