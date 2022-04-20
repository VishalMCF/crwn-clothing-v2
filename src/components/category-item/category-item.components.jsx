import './category-items.styles.scss';

import React from 'react'

const CategoryItem = ({category}) => {
  const {imageUrl,title} = category
  return (
    <div className='category-container'>
        <div class='background-image' style = {{
                  backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </div>
    </div>
  )
}

export default CategoryItem;