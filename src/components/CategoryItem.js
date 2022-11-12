import React from 'react';

function CategoryItem({ category,onDeleteCategory }) {

  function handleDelete() {
    fetch(`http://localhost:3003/categories/${category.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => onDeleteCategory(category))
  }

  return (
    <tr>
      <td className="table-data">
        {category.category}
      </td>
      <td>
        <button className='button category-delete' onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default CategoryItem;
