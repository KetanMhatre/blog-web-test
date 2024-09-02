import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogById, fetchUserDetails } from '../utils/fetch';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import styled from 'styled-components';
import defaultImg from '../assets/defaultImg.jpg';
const BlogTitle = styled.p`
  font-weight: 800;
  font-size: 3rem;
  line-height: 60px;

  @media (max-width: 767.98px) {
    font-size: 2rem;
    line-height: 40px;
  }
`;

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const result = await fetchBlogById(id);
      if (result.error) {
        setError(result.error);
      } else {
        setBlog(result);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (blog?.user?.user_id) {
      const fetchUser = async () => {
        const result = await fetchUserDetails(blog.user.user_id);
        if (result.error) {
          setError(result.error);
        } else {
          setUserDetails(result);
        }
      };
      fetchUser();
    }
  }, [blog?.user?.user_id]);
  console.log(userDetails);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

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

  return (
    <Container className='mt-4'>
      <Button
        onClick={() => navigate(-1)}
        variant='primary'
        className='mt-3 d-flex align-items-center'
      >
        <FaArrowLeft className='me-1' /> Back to Blogs
      </Button>
      <Row className='mt-4'>
        <Col lg={8}>
          <Card>
            <CardBody>
              <div>
                <img
                  src={blog.cover_image || defaultImg}
                  alt={blog.title}
                  className='rounded-top'
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className='p-1 p-md-5 mt-3 mt-lg-0 '>
                  <div className='d-flex align-items-center '>
                    <div>
                      <img
                        src={blog.user.profile_image}
                        alt='profileImage'
                        style={{ width: '40px', height: '40px' }}
                        className='rounded-circle'
                      />
                    </div>
                    <div className='ms-3 '>
                      <p
                        style={{
                          fontWeight: '600',
                          margin: 0,
                          fontSize: '1.2rem',
                          textTransform: 'capitalize',
                        }}
                      >
                        {blog.user.name}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: '200',
                          fontStyle: 'italic',
                          fontSize: '0.8rem',
                        }}
                      >
                        User Id - {blog.user.user_id}
                      </p>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <BlogTitle>{blog.title}</BlogTitle>
                  </div>

                  <div className='d-flex flex-wrap gap-2'>
                    {blog.tags.map((tag) => {
                      return <p key={tag}>#{tag}</p>;
                    })}
                  </div>

                  <div
                    className='mt-4'
                    dangerouslySetInnerHTML={{
                      __html: modifyHtmlContent(blog.body_html),
                    }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className='p-2 mt-3 mt-lg-0'>
            <CardBody>
              <div>
                <div className='d-flex align-items-center '>
                  <div>
                    <img
                      src={blog.user.profile_image}
                      alt='profileImage'
                      style={{ width: '40px', height: '40px' }}
                      className='rounded-circle '
                    />
                  </div>
                  <div className='ms-3 '>
                    <p style={{ fontWeight: '600', margin: 0 }}>
                      {blog.user.username}
                    </p>
                  </div>
                </div>
                <button
                  className='rounded-1 border-0 p-2 w-100 mt-3'
                  style={{ backgroundColor: '#3b49df', color: 'white' }}
                >
                  Follow
                </button>
                <div className='mt-3'>
                  <p style={{ color: '#737373' }}>{userDetails?.summary}</p>
                </div>
                <div>
                  <p className='mb-0'>Location</p>
                  <p className='mb-0'>{userDetails?.location}</p>
                </div>
                <div className='mt-3'>
                  <p className='mb-0'>Joined</p>
                  <p className='mb-0'>{userDetails?.joined_at}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogDetails;
