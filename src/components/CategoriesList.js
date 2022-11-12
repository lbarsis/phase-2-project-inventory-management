import React from 'react';
import AddCategoryForm from './AddCategoryForm';
import CategoryItem from './CategoryItem';

function CategoriesList({ categories, onDeleteCategory, onNewCategory }) {

  const displayCategories = categories.map(category => {
    return <CategoryItem key={category.id} category={category} onDeleteCategory={onDeleteCategory} />
  })

  return (
    <>
      <AddCategoryForm onNewCategory={onNewCategory}/>
      <table className='category-table'>
        <tbody>
          <tr>
            <th className="table-header">
              Category
            </th>
          </tr>
          {displayCategories}
        </tbody>
      </table>
    </>

  )
}

export default CategoriesList;
