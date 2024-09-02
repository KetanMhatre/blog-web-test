const baseUrl = 'https://dev.to/api';
const api = 'https://dev.to/api/articles';

const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return { error: response.statusText };
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return { error: 'Network error' };
  }
};

export const fetchAllBlogs = async () => {
  const url = api;
  return fetchFromAPI(url);
};

export const fetchBlogsByCategory = async (category) => {
  const url = `${api}?tag=${encodeURIComponent(category)}`;
  return fetchFromAPI(url);
};

export const fetchBlogById = async (id) => {
  const url = `${api}/${id}`;
  return fetchFromAPI(url);
};

export const fetchUserDetails = async (id) => {
  const url = `${baseUrl}/users/${id}`;
  return fetchFromAPI(url);
};
