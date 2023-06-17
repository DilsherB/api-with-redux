import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch()
  }

  return (
    <div>
      <form className="d-flex w-50 mx-auto flex-column gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
