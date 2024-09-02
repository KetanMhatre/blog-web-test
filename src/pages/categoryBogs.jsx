import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogsByCategory } from '../utils/fetch';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { FaHeart, FaFire, FaComment } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import { category } from '../utils/data';
import { FaArrowLeft } from 'react-icons/fa6';
function CategoryBlogs() {
  const { category: blogCategory } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await fetchBlogsByCategory(blogCategory);
      if (result.error) {
        setError(result.error);
      } else {
        setBlogs(result);
      }
    };

    fetchBlogs();
  }, [blogCategory]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleTitleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  const handleBackHomeClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Row>
        <Col
          sm={12}
          className='d-flex justify-content-center align-items-center text-center py-4'
        >
          <Card className='w-100'>
            <CardBody>
              <h3 className='p-4 text-capitalize fw-bolder'>
                #{blogCategory} Blogs
              </h3>
            </CardBody>
          </Card>
        </Col>

        <div>
          <Button
            variant='primary'
            className='mt-3 d-flex align-items-center'
            onClick={handleBackHomeClick}
          >
            <FaArrowLeft className='me-1' />
            Back Home
          </Button>
        </div>
        <Row className='mt-3 '>
          <Col lg={4} className='d-none d-lg-block '>
            <Card>
              <CardBody>
                <p
                  className='mb-4'
                  style={{ fontWeight: '500', fontSize: '1.2rem' }}
                >
                  Popular Tags
                </p>
                {category.map((item) => {
                  return (
                    <div
                      key={item}
                      onClick={() => handleCategoryClick(item)}
                      style={{ cursor: 'pointer' }}
                    >
                      <p style={{ fontWeight: '200' }}>#{item}</p>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Col>
          <Col lg={8}>
            <div>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div key={blog.id}>
                    <Card className='mb-4 p-2 p-lg-4'>
                      <CardBody>
                        <div className='d-flex align-items-center  '>
                          <div>
                            <img
                              src={blog.user.profile_image}
                              alt='profileImage'
                              style={{ width: '40px', height: '40px' }}
                              className='rounded-circle'
                            />
                          </div>
                          <div className='ms-3 '>
                            <p style={{ fontWeight: '200', margin: 0 }}>
                              {blog.user.name}
                            </p>
                            <p style={{ fontWeight: '200', margin: 0 }}>
                              Id- {blog.user.user_id}
                            </p>
                          </div>
                        </div>
                        <h5
                          onClick={() => handleTitleClick(blog.id)}
                          style={{ cursor: 'pointer' }}
                          className='mt-3'
                        >
                          {blog.title}{' '}
                        </h5>
                        <div className='d-flex gap-1 gap-md-2 flex-wrap'>
                          {blog.tag_list.map((item) => {
                            return (
                              <p style={{ fontWeight: '200' }} key={item}>
                                #{item}
                              </p>
                            );
                          })}
                        </div>
                        <div className='d-md-flex align-items-center justify-content-between   '>
                          <div className='d-md-flex align-items-center gap-2'>
                            <div className='d-flex align-items-center'>
                              <FaHeart
                                style={{ color: 'red' }}
                                className='fs-5'
                              />
                              <FaFire
                                style={{ color: 'orange' }}
                                className='fs-5'
                              />
                              <p className='mb-0'>
                                {blog.public_reactions_count} reactions
                              </p>
                            </div>

                            <div className='ms-md-4 d-flex align-items-center gap-2'>
                              <FaComment className='fs-5' />
                              <p className='mb-0'>
                                {blog.comments_count} comments
                              </p>
                            </div>
                          </div>
                          <div className='d-flex align-items-center'>
                            <MdOutlineAccessTime className='me-2' />
                            <p className='mb-0 me-1 '>
                              {blog.reading_time_minutes}{' '}
                            </p>
                            minutes read
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                ))
              ) : (
                <Card>
                  <CardBody>
                    <p
                      className='d-flex align-items-center justify-content-center p-5'
                      style={{ fontSize: '1.4rem', fontWeight: '500' }}
                    >
                      No blogs found in {blogCategory} category
                    </p>
                  </CardBody>
                </Card>
              )}
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default CategoryBlogs;
