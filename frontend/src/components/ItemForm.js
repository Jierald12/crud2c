import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemForm.css';

const ItemForm = ({ item, onSuccess }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        address: '',
        barangay: '',
        city_municipality: '',
        province: '',
        zipcode: '',
        email: '',
        phone: '',
        date_of_birth: '',
        place_of_birth: '',
        sex: '',
        civil_status: '',
        height: '',
        weight: '',
        blood_type: '',
        gsid_no: '',
        pagibig_no: '',
        philhealth_no: '',
        sss_no: '',
        tin_no: '',
        father_first_name: '',
        father_middle_name: '',
        father_last_name: '',
        mother_first_name: '',
        mother_middle_name: '',
        mother_last_name: '',
        mother_maiden_name: '',
       
       

       
    });

    useEffect(() => {
        if (item) {
            setFormData({
                first_name: item.first_name || '',
                middle_name: item.middle_name || '',
                last_name: item.last_name || '',
                address: item.address || '',
                barangay: item.barangay || '',
                city_municipality: item.city_municipality || '',
                province: item.province || '',
                zipcode: item.zipcode || '',
                email: item.email || '',
                phone: item.phone || '',
                date_of_birth: item.date_of_birth || '',
                place_of_birth: item.place_of_birth || '',
                sex: item.sex || '',
                civil_status: item.civil_status || '', 
                height: item.height || '',
                weight: item.weight || '',
                blood_type: item.blood_type || '',
                gsid_no: item.gsid_no || '',
                pagibig_no: item.pagibig_no || '',
                philhealth_no: item.philhealth_no || '',
                sss_no: item.sss_no || '',
                tin_no: item.tin_no || '',
                father_first_name: item.father_first_name || '',
                father_middle_name: item.father_middle_name || '',
                father_last_name: item.father_last_name || '',
                mother_first_name: item.mother_first_name || '',
                mother_middle_name: item.mother_middle_name || '',
                mother_last_name: item.mother_last_name || '',
                mother_maiden_name: item.mother_maiden_name || '',
       
                
            });
        } else {
            setFormData({
                first_name: '',
                middle_name: '',
                last_name: '',
                address: '',
                barangay: '',
                city_municipality: '',
                province: '',
                zipcode: '',
                email: '',
                phone: '',
                date_of_birth: '',
                place_of_birth: '',
                sex: '',
                civil_status: '',   
                height: '',
                weight: '',
                blood_type: '',
                gsid_no: '',
                pagibig_no: '',
                philhealth_no: '',
                sss_no: '',
                tin_no: '',
                father_first_name: '',
                father_middle_name: '',
                father_last_name: '',
                mother_first_name: '',
                mother_middle_name: '',
                mother_last_name: '',
                mother_maiden_name: '',
       

                          


                 
            });
        }
    }, [item]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response;
            if (item) {
                response = await axios.put(`http://localhost:8000/api/items/${item.id}/`, formData);
            } else {
                response = await axios.post('http://localhost:8000/api/items/', formData);
            }
            onSuccess(response.data); 
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="item-form">
            <h2>{item ? 'Edit Item' : 'Add New Item'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Barangay:</label>
                    <input type="text" name="barangay" value={formData.barangay} onChange={handleChange} required />
                </div>
                <div>
                    <label>City/Municipality:</label>
                    <input type="text" name="city_municipality" value={formData.city_municipality} onChange={handleChange} required />
                </div>
                <div>
                    <label>Province:</label>
                    <input type="text" name="province" value={formData.province} onChange={handleChange} required />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                </div>
                <div>	
                    <label>Place of Birth:</label>
                    <input type="text" name="place_of_birth" value={formData.place_of_birth} onChange={handleChange} required />
                </div>
                <div>
                    <label>Sex:</label>
                    <input type="text" name="sex" value={formData.sex} onChange={handleChange} required />
                </div>
                <div>
                    <label>Civil Status:</label>
                    <input type="text" name="civil_status" value={formData.civil_status} onChange={handleChange} required />
                </div>
                <div>
                    <label>Height(m):</label>
                    <input type="text" name="height" value={formData.height} onChange={handleChange} required />
                </div>
                <div>
                    <label>Weight(kg):</label>
                    <input type="text" name="weight" value={formData.weight} onChange={handleChange} required />
                </div>
                <div>
                    <label>Blood Type:</label>
                    <input type="text" name="blood_type" value={formData.blood_type} onChange={handleChange} required />
                </div>
                <div>
                    <label>GSIS ID No.:</label>
                    <input type="text" name="gsid_no" value={formData.gsid_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>PAGIBIG ID No.:</label>
                    <input type="text" name="pagibig_no" value={formData.pagibig_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>PHILHEALTH No.:</label>
                    <input type="text" name="philhealth_no" value={formData.philhealth_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>SSS No.:</label>
                    <input type="text" name="sss_no" value={formData.sss_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>Tin No.:</label>
                    <input type="text" name="tin_no" value={formData.tin_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>Father's Given Name:</label>
                    <input type="text" name="father_first_name" value={formData.father_first_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Father's Middle Name:</label>
                    <input type="text" name="father_middle_name" value={formData.father_middle_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>father's Surname:</label>
                    <input type="text" name="father_last_name" value={formData.father_last_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mother's Given Name:</label>
                    <input type="text" name="mother_first_name" value={formData.mother_first_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mother's Midlle Name:</label>
                    <input type="text" name="mother_middle_name" value={formData.mother_middle_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mother's Surname</label>
                    <input type="text" name="mother_last_name" value={formData.mother_last_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mother's Maiden Name:</label>
                    <input type="text" name="mother_maiden_name" value={formData.mother_maiden_name} onChange={handleChange} required />
                </div>



                
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ItemForm;