import React from 'react';
import { category } from '../utils/data';
import { useNavigate } from 'react-router';

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className=''>
      <hr />

      <div className='d-none d-md-flex justify-content-between flex-wrap gap-3 '>
        {category.map((item) => {
          return (
            <div
              key={item}
              onClick={() => handleCategoryClick(item)}
              style={{
                cursor: 'pointer',
                fontWeight: '300',
                textTransform: 'uppercase',
              }}
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className='dropdown d-block d-md-none text-center py-4'>
        <button
          className='btn btn-secondary dropdown-toggle w-75 '
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          style={{ backgroundColor: 'transparent', color: 'black' }}
        >
          Category
        </button>
        <ul className='dropdown-menu w-75'>
          <li>
            {category.map((item) => {
              return (
                <a
                  className='dropdown-item'
                  key={item}
                  href='#'
                  onClick={() => handleCategoryClick(item)}
                  style={{fontSize:'1.1rem',textTransform:'uppercase'}}
                >
                  {item}
                </a>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
