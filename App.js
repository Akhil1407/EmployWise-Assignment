import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import EditUserForm from "./components/EditUserForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/edit/:id" element={<EditUserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
