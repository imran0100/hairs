import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import BASE_URL from '../../Config';
import { toast } from 'react-toastify';

export default function AddDoctor() {
    // State variables to store form data
    const [name, setName] = useState('');
    const [image, setImage] = useState(null); // For image upload
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [loading, setLoading] = useState(false);
   
    
    // Function to handle form submission
    const handleSubmit =async (e) => {
        toast("test")
        e.preventDefault();
       

        setLoading(true);




      
            try {
              const formData = new FormData();
              formData.append('image', image);
            
              const response = await fetch(`${BASE_URL}/hair-tests/upload-image`, {
                method: 'POST',
              
                body: formData
              });
            
              if (!response.ok) {
                throw new Error('Network response was not ok');
              } else {
                const responseData = await response.json();
                console.log(responseData);
             
                try {
                    console.log(responseData.imageUrl)
                    console.log({
                        fullname:name,email, mobile:phone, speciality:qualification, location:address,description:'null',profileImage: responseData.imageUrl, coverImage:'cover'
                     
                     })
                  const response = await fetch(`${BASE_URL}/admin/addDoctor`, {
                    method: 'POST',
                    headers: {
                       
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        fullname:name,email, mobile:phone, speciality:qualification, location:address,description:'null',profileImage: responseData.imageUrl, coverImage:'cover'
                    
                    })
                    
                  });
                 
                  if (!response.ok) {
                    
                    toast.error('Some thing went wrong')
                    // You can update state or display error messages accordingly
                    return;
                  }
               
                
                 
                  toast.success("Doctor Added Successfully and doctor's Credentials sent to email !");
             setName('')
             setEmail('')
             setImage(null)
             setPhone('')
             setAddress('')
             setQualification('')

                  // Perform actions after successful login, such as updating state or redirecting
                } catch (error) {
                  toast.error('Network Error')
              
                } finally {
                  setLoading(false); // Hide loader regardless of success or failure
                }
              
                setLoading(false);
              }
            } catch (error) {
                toast.error("Network error")
              console.error('There was a problem with the fetch operation:', error.message);
            }
         
          








      

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

                    <button type="submit">{loading?"Please wait":"Submit"}</button>
                </form>
            </div>
        </AdminNavbar>
    );
}
