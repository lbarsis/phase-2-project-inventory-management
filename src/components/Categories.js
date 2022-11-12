import React from 'react';
import CategoriesList from './CategoriesList';

function Categories({ categories, onDeleteCategory }) {
  return (
    <>
      <h1 className="header">Manage Categories</h1>
      <CategoriesList categories={categories} onDeleteCategory={onDeleteCategory}/>
    </>
  );
}

export default Categories;
