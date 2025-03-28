import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditUserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(response => setUser(response.data.data))
      .catch(() => alert("Failed to load user data"));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      alert("User updated successfully!");
      navigate("/users");
    } catch {
      alert("Error updating user");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input className="form-control mb-2" type="text" placeholder="First Name" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
        <input className="form-control mb-2" type="text" placeholder="Last Name" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
        <input className="form-control mb-2" type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <button className="btn btn-success" type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUserForm;
