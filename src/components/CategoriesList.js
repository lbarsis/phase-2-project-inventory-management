import React from 'react';
import CategoryItem from './CategoryItem';

function CategoriesList({ categories, onDeleteCategory }) {

  const displayCategories = categories.map(category => {
    return <CategoryItem key={category.id} category={category} onDeleteCategory={onDeleteCategory}/>
  })

  return (
    <table>
      <tbody>
        <tr>
          <th className="table-header">
            Category
          </th>
        </tr>
        {displayCategories}
      </tbody>
    </table>
  )
}

export default CategoriesList;
