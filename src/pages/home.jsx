import React from 'react';
import Header from '../components/header';
import Category from '../components/category';
import Banner from '../components/banner';
import FeaturedPosts from '../components/featuredPosts';
import SampleBLogPost from '../components/sampleBlogPost';

function HomePage() {
  return (
    <div>
      <Header />
      <Category />
      <Banner />
      <FeaturedPosts />
      <SampleBLogPost />
    </div>
  );
}

export default HomePage;
