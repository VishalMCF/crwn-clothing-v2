import './categories.styles.scss'

import React from 'react'
import CategoryItem from '../category-item/category-item.components'

const Categories = ({categories}) => {
  return (
    <div className='categories-container'>
      {
        categories.map( (category) => {
            return (
              <CategoryItem category={category} key={category.id}/>
            )
          } 
        )
      }
    </div>
  )
}

export default Categories