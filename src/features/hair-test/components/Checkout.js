import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BASE_URL from '../../../Config';
import { toast } from 'react-toastify';

function Checkout() {
    const [selectedOption, setSelectedOption] = useState("rs500");
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="ltn__checkout-payment-method payment-method mb-50">
            <h4>Prescription Required*</h4>
            <div id="checkout_accordion_1">
                <PrescriptionOption
                    label="Get a Auto generated Prescription that contains your medications and dosages."
                    price="₹100"
                    onSelect={() => handleOptionSelect('rs100')}
                    selected={selectedOption === 'rs100'}
                    planId='66194c29e6c1744156eb35cf'
                />
                <PrescriptionOption
                    label="Get a consultation appointment with doctor and medical prescription for your medications, dosages, and usage instructions by doctor."
                    price="₹500"
                    onSelect={() => handleOptionSelect('rs500')}
                    selected={selectedOption === 'rs500'}
                    planId='66194c51e6c1744156eb35d2'
                />
            </div>
        </div>
    );
}

function PrescriptionOption({ label,planId, price, onSelect, selected }) {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('morning');
const [loading,setSetLoading]=useState(false)
    const handleTimeSlotChange = (slot) => {
        setSelectedTimeSlot(slot);
    };
const handleCheckout=async()=>{
    let data
    if(planId==="66194c51e6c1744156eb35d2"){
        data={appointmentDate:startDate.toLocaleDateString('en-IN'),timeSlot:selectedTimeSlot,planId}
    }else{
        data={planId}
    }

    setSetLoading(true)
    console.log(data,"test");
    try {
        const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIzMDc1YzBhMWM2OWFmMGNlNjJhOTQiLCJpYXQiOjE3MTU3NjAwOTMsImV4cCI6MTcxNjAxOTI5M30.1hxAWbLpNaNtGd9Mz8tWK6RiYCpLZGqIOCeFwpvlLXI"
        const response = await fetch(`https://backend.hairsncares.com/api/vi/bookAppointment/bookAppointment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify(data)
        });
      
        if (!response.ok) {
          toast.error("Something Went wrong")
          setSetLoading(false)
          throw new Error('Network response was not ok');
        }else{
          const responseData = await response.json();
        
          toast.success("Successfull")
          window.location=responseData.data
          console.log(responseData,'huhuhuh');
        }
      
        // Handle the response data as needed
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
      } 
      
}


    return (
        <>
            <div onClick={onSelect} className={`cardsw  ${selected ? 'selected3' : ''}`}>
                <label className={`collapsed ltn__card-title `}>
                    <h1>
                        <input type="checkbox" style={{ display: 'none' }} />
                        {price}
                    </h1>
                    <span>{label}</span>
                    <em><img src="assets/img/checkout/rx.svg" alt="#" /></em>
                </label>
                {selected && (
                    <div className='checkout-detail'>
                      { planId==="66194c51e6c1744156eb35d2" && <div className='datecont'>
                            <label>Choose Appointment Date :</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>}
                      {planId==="66194c51e6c1744156eb35d2" && <div style={{display:'flex',gap:'1rem'}}>  <label className='label-time'>Time Slot :</label>
                        <div className='slot'>
                            <input type='radio' name='timeSlot' id='morning' checked={selectedTimeSlot === 'morning'} onChange={() => handleTimeSlotChange('morning')} />
                            <label htmlFor='morning'>Morning</label>
                        </div>
                        <div className='slot'>
                            <input type='radio' name='timeSlot' id='afternoon' checked={selectedTimeSlot === 'afternoon'} onChange={() => handleTimeSlotChange('afternoon')} />
                            <label htmlFor='afternoon'>Afternoon</label>
                        </div>
                        <div className='slot'>
                            <input type='radio' name='timeSlot' id='evening' checked={selectedTimeSlot === 'evening'} onChange={() => handleTimeSlotChange('evening')} />
                            <label htmlFor='evening'>Evening</label>
                        </div></div>}
                       <div style={{textAlign:'center',marginTop:'1rem'}}> <button onClick={handleCheckout} className='btn btn-primary'>{loading?"Please Wait":"Checkout"}</button></div>
                    </div> 
                )}
            </div>
        </>
    );
}

export default Checkout;
