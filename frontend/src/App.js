import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: "", quantity: "" });
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:5000/api/items";

  // Fetch items
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get(API_URL);
    setItems(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, formData);
    } else {
      await axios.post(API_URL, formData);
    }
    setFormData({ name: "", quantity: "" });
    setEditId(null);
    fetchItems();
  };

  const handleEdit = (item) => {
    setFormData({ name: item.name, quantity: item.quantity });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchItems();
  };

  return (
    <div className="app-container">
      <h1>CRUD Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({ ...formData, quantity: e.target.value })
          }
          required
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity}
            <button onClick={() => handleEdit(item)}>✏️ Edit</button>
            <button onClick={() => handleDelete(item._id)}>🗑 Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
