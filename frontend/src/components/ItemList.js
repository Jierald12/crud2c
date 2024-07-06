import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/items/${id}/`);
            
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('There was an error deleting the item!', error);
        }
    };

    return (
        <div className="item-list">
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} {item.middle_name} {item.last_name}, {item.address}, {item.barangay}, {item.city_municipality}, {item.province}, {item.zipcode}, {item.email}, {item.phone}, {item.date_of_birth}, {item.place_of_birth}, {item.sex}, {item.civil_status}, {item.height}, {item.weight}, {item.blood_type}, {item.gsid_no}, {item.pagibig_no}, {item.philhealth_no}, {item.sss_no}, {item.tin_no}, {item.father_first_name} {item.father_middle_name} {item.father_last_name}, {item.mother_first_name} {item.mother_middle_name} {item.mother_last_name}, {item.mother_maiden_name},
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;