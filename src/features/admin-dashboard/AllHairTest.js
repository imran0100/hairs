import React from 'react'
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';

const patientData = [
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St, City, Country',
      weight: '70 kg',
      bloodGlucose: '110 mg/dL',
      bloodPressure: '120/80 mmHg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '456 Elm St, Town, Country',
      weight: '65 kg',
      bloodGlucose: '95 mg/dL',
      bloodPressure: '110/70 mmHg'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      address: '789 Oak St, Village, Country',
      weight: '75 kg',
      bloodGlucose: '120 mg/dL',
      bloodPressure: '130/90 mmHg'
    },
    {
      id: 4,
      name: 'Bob Brown',
      address: '111 Pine St, City, Country',
      weight: '80 kg',
      bloodGlucose: '130 mg/dL',
      bloodPressure: '140/85 mmHg'
    },
    {
      id: 5,
      name: 'Emily Jones',
      address: '222 Cedar St, Town, Country',
      weight: '68 kg',
      bloodGlucose: '100 mg/dL',
      bloodPressure: '115/75 mmHg'
    },
    {
      id: 6,
      name: 'Michael Davis',
      address: '333 Maple St, Village, Country',
      weight: '72 kg',
      bloodGlucose: '105 mg/dL',
      bloodPressure: '125/80 mmHg'
    },
    {
      id: 7,
      name: 'Sarah Wilson',
      address: '444 Birch St, City, Country',
      weight: '78 kg',
      bloodGlucose: '115 mg/dL',
      bloodPressure: '135/85 mmHg'
    },
    {
      id: 8,
      name: 'David Rodriguez',
      address: '555 Walnut St, Town, Country',
      weight: '75 kg',
      bloodGlucose: '120 mg/dL',
      bloodPressure: '130/90 mmHg'
    },
    {
      id: 9,
      name: 'Laura Martinez',
      address: '666 Pineapple St, Village, Country',
      weight: '70 kg',
      bloodGlucose: '110 mg/dL',
      bloodPressure: '120/80 mmHg'
    },
    {
      id: 10,
      name: 'Chris Thompson',
      address: '777 Strawberry St, City, Country',
      weight: '72 kg',
      bloodGlucose: '105 mg/dL',
      bloodPressure: '125/80 mmHg'
    }
  ];
export default function AllHairTest() {
  const navigate=useNavigate()
  return (
    <AdminNavbar>
            <div className="all-patient-list-container">
             
                <div className="patient-list-1">
                    {patientData.map(patient => (
                        <div key={patient.id} className="patient-item2">
                            <div className="patient-details">
                                <h3>{patient.name}</h3>
                                <p>{patient.address}</p>
                                
                            </div>
                          <div>  <button onClick={()=>navigate('/test-result')} className="block-button1" >View Test Result</button>
                          {/* <button  className="block-button edit1">Edit</button> */}
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminNavbar>
  )
}
