import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchBlogById } from '../utils/fetch';
import { Card, Col, Container, Row, CardBody } from 'react-bootstrap';

function FeaturedPosts() {
  const navigate = useNavigate();
  const featuredPostId1 = 1981444;
  const featuredPostId2 = 1982234;

  const [post1, setPost1] = useState(null);
  const [post2, setPost2] = useState(null);
  const fetchBlogPostById = async (id) => {
    try {
      return await fetchBlogById(id);
    } catch (error) {
      console.error('Failed to fetch blog post:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const [post1Data, post2Data] = await Promise.all([
        fetchBlogPostById(featuredPostId1),
        fetchBlogPostById(featuredPostId2),
      ]);

      setPost1(post1Data);
      setPost2(post2Data);
    };

    fetchPosts();
  }, []);

  const handleTitleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <Container className='mt-3'>
      <Row>
        <Col lg={6} className='mb-2 mb-lg-0'>
          {post1 && (
            <Card>
              <CardBody>
                <Row>
                  <Col md={4} className='order-md-2'>
                    <img
                      className='img-fluid h-100'
                      src={post1.cover_image}
                      style={{ objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md={8}>
                    <p className='mt-3 mt-md-0'>{post1.tags[0]}</p>

                    <p
                      onClick={() => handleTitleClick(featuredPostId1)}
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                      }}
                    >
                      {post1.title}
                    </p>
                    <p>{post1.description}</p>
                    <button
                      className='border-0 bg-transparent mr-0 fw-light'
                      onClick={() => handleTitleClick(featuredPostId1)}
                      style={{
                        fontSize: '0.9rem',
                        alignSelf: 'flex-start',
                        fontStyle: 'italic',
                      }}
                    >
                      Continue reading...
                    </button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}
        </Col>
        <Col lg={6}>
          {post2 && (
            <Card>
              <CardBody>
                <Row>
                  <Col md={4} className='order-md-2'>
                    <img
                      className='img-fluid h-100'
                      src={post2.cover_image}
                      style={{ objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md={8}>
                    <p className='mt-3 mt-md-0'>{post2.tags[0]}</p>
                    <p
                      onClick={() => handleTitleClick(featuredPostId2)}
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                      }}
                    >
                      {post2.title}
                    </p>
                    <p>{post2.description}</p>
                    <button
                      className='border-0 bg-transparent mr-0 fw-light'
                      onClick={() => handleTitleClick(featuredPostId2)}
                      style={{
                        fontSize: '0.9rem',
                        alignSelf: 'flex-start',
                        fontStyle: 'italic',
                      }}
                    >
                      Continue reading...
                    </button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedPosts;
