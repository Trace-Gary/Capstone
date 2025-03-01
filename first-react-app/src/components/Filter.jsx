import React from 'react'

const Filter = ({ setCategory }) => {
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);  // Updates the category selected by the user
    };

    return (
      <div className="filter-container">
        <select id="categoryFilter" className="form-select" onChange={handleCategoryChange}> 
          <option value="all">All</option>
          <option value="Shirts">Shirts</option>
          <option value="Shorts">Shorts</option>
          <option value="Gloves">Gloves</option>
        </select>
      </div>
    );
}
  
  
export default Filter;