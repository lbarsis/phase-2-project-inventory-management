import React from "react";

function AddItemForm({ categories, formData, onChange, submitItem }) {
  return (
    <form className="item-form" onSubmit={submitItem}>
      <label htmlFor="category">Category:</label><br />
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
      <br />
      <label htmlFor="name">Name: </label><br />
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onChange}
      />
      <br />
      <label htmlFor="vendor">Vendor:</label><br />
      <input
        className="form-input"
        type="text"
        id="vendor"
        name="vendor"
        value={formData.vendor}
        onChange={onChange}
      />
      <br />
      <label htmlFor="description">Description:</label> <br />
      <input
        className="form-input"
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={onChange} /> <br />
      <label htmlFor="status">Status:</label><br />
      <input
        className="form-input"
        type="text"
        id="status"
        name="status"
        value={formData.status}
        onChange={onChange}
      />
      <br />
      <label htmlFor="flagAmount">Flag Amount:</label> <br />
      <input
        className="form-input"
        type="text"
        id="flagAmount"
        name="flagAmount"
        value={formData.flagAmount}
        onChange={onChange}
      />
      <br />
      <label htmlFor="onHand">Quantity on Hand:</label> <br />
      <input
        className="form-input"
        type="text"
        id="onHand"
        name="onHand"
        value={formData.onHand}
        onChange={onChange}
      />
      <br />
      <label htmlFor="uom">Unit of Measure:</label><br />
      <input
        className="form-input"
        type="text"
        id="uom"
        name="uom"
        value={formData.uom}
        onChange={onChange}
      />
      <br />
      <input className="button" type="submit" />
    </form>
  )

}

export default AddItemForm;