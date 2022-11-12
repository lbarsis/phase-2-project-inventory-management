import React, { useState } from 'react';

function AddCategoryForm({ onNewCategory }) {
  const [newCategory, setNewCategory] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3003/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: newCategory })
    })
      .then(r => r.json())
      .then(newCategory => onNewCategory(newCategory))
    setNewCategory('')
  }

  return (
    <>
      <form className='item-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a New Category' className="form-input" value={newCategory} onChange={e => setNewCategory(e.target.value)}></input>
        <input className="button" type="submit" />
      </form>
    </>
  );
}

export default AddCategoryForm;
