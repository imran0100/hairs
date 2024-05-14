import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
                />
                <PrescriptionOption
                    label="Get a consultation appointment with doctor and medical prescription for your medications, dosages, and usage instructions by doctor."
                    price="₹500"
                    onSelect={() => handleOptionSelect('rs500')}
                    selected={selectedOption === 'rs500'}
                />
            </div>
        </div>
    );
}

function PrescriptionOption({ label, price, onSelect, selected }) {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const handleTimeSlotChange = (slot) => {
        setSelectedTimeSlot(slot);
    };

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
                        <div className='datecont'>
                            <label>Choose Appointment Date :</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                      <div style={{display:'flex',gap:'1rem'}}>  <label className='label-time'>Time Slot :</label>
                        <div className='slot'>
                            <input type='radio' name='timeSlot' id='morning' checked={selectedTimeSlot === 'Morning'} onChange={() => handleTimeSlotChange('Morning')} />
                            <label htmlFor='morning'>Morning</label>
                        </div>
                        <div className='slot'>
                            <input type='radio' name='timeSlot' id='afternoon' checked={selectedTimeSlot === 'Afternoon'} onChange={() => handleTimeSlotChange('Afternoon')} />
                            <label htmlFor='afternoon'>Afternoon</label>
                        </div>
                        <div className='slot'>
                            <input type='radio' name='timeSlot' id='evening' checked={selectedTimeSlot === 'Evening'} onChange={() => handleTimeSlotChange('Evening')} />
                            <label htmlFor='evening'>Evening</label>
                        </div></div>
                       <div style={{textAlign:'center',marginTop:'1rem'}}> <button className='btn btn-primary'>Checkout</button></div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Checkout;
