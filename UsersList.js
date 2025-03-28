import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }

    axios.get("https://reqres.in/api/users?page=1")
      .then(response => setUsers(response.data.data))
      .catch(() => alert("Failed to fetch users"));
  }, [navigate]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
      } catch {
        alert("Error deleting user");
      }
    }
  };

  const filteredUsers = users.filter(user => user.first_name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mt-5">
      <h2>Users List</h2>
      <input className="form-control mb-3" type="text" placeholder="Search users..." onChange={(e) => setSearch(e.target.value)} />
      <table className="table table-striped">
        <thead>
          <tr><th>Avatar</th><th>Name</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td><img src={user.avatar} alt="Avatar" width="50" /></td>
              <td>{user.first_name} {user.last_name}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
