import React, { useState, useEffect } from 'react';
import { getItems, createItem, deleteItem } from '../services/itemService';
import '../components/ItemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await createItem(newItem);
      loadItems();
      setNewItem({ name: '', price: '' });
    } catch (error) {
      console.error('Error creating item', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      loadItems();
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Item Name"
      />
      <input
        type="number"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        placeholder="Item Price"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
