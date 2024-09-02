import React, { useEffect, useState } from 'react';
import { fetchBlogById } from '../utils/fetch';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { archives, social } from '../utils/data';

function SampleBlogPost() {
  const blogId1 = 1974339;
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const result = await fetchBlogById(blogId1);
      if (result.error) {
        setError(result.error);
      } else {
        setBlog(result);
      }
    };

    fetchBlog();
  }, [blogId1]);

  const modifyHtmlContent = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const images = div.querySelectorAll('img');
    images.forEach((img) => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.margin = '0 auto';
    });

    return div.innerHTML;
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col lg={8}>
            <h3 style={{ fontStyle: 'italic' }}>Featured blog</h3>
            <hr />
            <Card>
              <CardBody>
                <div
                  className='mt-4'
                  dangerouslySetInnerHTML={{
                    __html: modifyHtmlContent(blog.body_html),
                  }}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardBody>
                <p
                  style={{
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    fontWeight: '500',
                  }}
                >
                  About
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus unde quo expedita maiores doloremque explicabo
                  perspiciatis reprehenderit, tempora accusantium numquam totam
                  facere, voluptatum omnis eveniet fuga. Recusandae, impedit
                  beatae. Illo autem qui molestias adipisci velit laboriosam
                  voluptatem doloremque, amet voluptatum!
                </p>
              </CardBody>
            </Card>
            <div className='mt-4'>
              <p
                style={{
                  fontSize: '1.4rem',
                  fontStyle: 'italic',
                  fontWeight: '500',
                }}
              >
                Archives
              </p>
              {archives.map((item) => {
                return (
                  <p
                    className='mb-0'
                    key={item}
                    style={{ color: 'blue', cursor: 'pointer' }}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className='mt-4'>
              <p
                style={{
                  fontSize: '1.4rem',
                  fontStyle: 'italic',
                  fontWeight: '500',
                }}
              >
                Elsewhere
              </p>
              {social.map((item) => {
                return (
                  <p
                    className='mb-0'
                    key={item}
                    style={{ color: 'blue', cursor: 'pointer' }}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SampleBlogPost;
