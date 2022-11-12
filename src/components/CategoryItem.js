import React from 'react';

function CategoryItem({ category, onDeleteCategory }) {

  function handleDelete() {
    fetch(`http://localhost:3003/categories/${category.id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(() => onDeleteCategory(category))
  }

  return (
    <>
      <tr>
        <td className="table-data">
          <table>
            <tbody>
              <tr>
                <td>{category.category}</td>
                <td className='category-delete'>
                  <button className='button' onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

    </>

  );
}

export default CategoryItem;
