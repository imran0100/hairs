import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';


export default function AddDoctor() {
    // State variables to store form data
    const [name, setName] = useState('');
    const [image, setImage] = useState(null); // For image upload
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission logic here
        // You can send the form data to an API or handle it as needed
        console.log('Form submitted:', { name, image, phone, email, address, qualification });
    };

    // Function to handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Handle file upload logic here
        console.log('Image uploaded:', file);
        setImage(file);
    };

    return (
        <AdminNavbar>
            <div className="add-doctor-container">
                <h2>Add Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" accept="image/*" onChange={handleImageChange} required />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="address">Address:</label>
                    <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

                    <label htmlFor="qualification">Qualification:</label>
                    <input type="text" id="qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </AdminNavbar>
    );
}
