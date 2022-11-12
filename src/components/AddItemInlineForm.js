import React from 'react';

function AddItemInlineForm({ formData, onChange, categories, submitItem, handleAddItem }) {
  return (
    <tr>
      <td></td>
      <td className="table-data">
        {formData.category === 'other' ? (
          <input
            className="form-input"
            type="text"
            id="newCategory"
            name="newCategory"
            value={formData.newCategory}
            onChange={onChange}
          />
        ) : (
          <select className="form-input" type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={onChange}
          >
            {categories}
            <option value='other'>Other</option>
          </select>
        )}
      </td>
      <td className="table-data">
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </td>
      <td className="table-data">
        <input
          className="form-input"
          type="text"
          id="vendor"
          name="vendor"
          value={formData.vendor}
          onChange={onChange}
        />
      </td>
      <td className="table-data">
        <input
          className="form-input"
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={onChange} />
      </td>
      <td className="table-data">
        <input
          className="form-input"
          type="text"
          id="status"
          name="status"
          value={formData.status}
          onChange={onChange}
        />
      </td>
      <td className="table-data">
        <input
          className="form-input"
          type="text"
          id="flagAmount"
          name="flagAmount"
          value={formData.flagAmount}
          onChange={onChange}
        />
      </td>
      <td className="table-data">
        <input
          className="form-input"
          type="text"
          id="onHand"
          name="onHand"
          value={formData.onHand}
          onChange={onChange}
        />
      </td>
      <td className="table-data">
        <input
          className="form-input"
          type="text"
          id="uom"
          name="uom"
          value={formData.uom}
          onChange={onChange}
        />
      </td>
      <td className="table-icons">
        <form onSubmit={e => {submitItem(e); handleAddItem()}}>
          <button className="button">Save</button>
        </form>
      </td>
    </tr>
  );
}

export default AddItemInlineForm;
