// components/Form.tsx
import React, { useState } from 'react';
import "./Trial.css"

const Trial: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dietaryRestrictions: '',
    preferredCuisine: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
          <input
            type="text"
            name="dietaryRestrictions"
            id="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferredCuisine">Preferred Cuisine Style</label>
          <input
            type="text"
            name="preferredCuisine"
            id="preferredCuisine"
            value={formData.preferredCuisine}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Trial;
