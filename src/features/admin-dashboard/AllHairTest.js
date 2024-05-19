import React,{useEffect,useState}from 'react'
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../Config';
// const patientData = [
//     {
//       id: 1,
//       name: 'John Doe',
//       address: '123 Main St, City, Country',
//       weight: '70 kg',
//       bloodGlucose: '110 mg/dL',
//       bloodPressure: '120/80 mmHg'
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       address: '456 Elm St, Town, Country',
//       weight: '65 kg',
//       bloodGlucose: '95 mg/dL',
//       bloodPressure: '110/70 mmHg'
//     },
//     {
//       id: 3,
//       name: 'Alice Johnson',
//       address: '789 Oak St, Village, Country',
//       weight: '75 kg',
//       bloodGlucose: '120 mg/dL',
//       bloodPressure: '130/90 mmHg'
//     },
//     {
//       id: 4,
//       name: 'Bob Brown',
//       address: '111 Pine St, City, Country',
//       weight: '80 kg',
//       bloodGlucose: '130 mg/dL',
//       bloodPressure: '140/85 mmHg'
//     },
//     {
//       id: 5,
//       name: 'Emily Jones',
//       address: '222 Cedar St, Town, Country',
//       weight: '68 kg',
//       bloodGlucose: '100 mg/dL',
//       bloodPressure: '115/75 mmHg'
//     },
//     {
//       id: 6,
//       name: 'Michael Davis',
//       address: '333 Maple St, Village, Country',
//       weight: '72 kg',
//       bloodGlucose: '105 mg/dL',
//       bloodPressure: '125/80 mmHg'
//     },
//     {
//       id: 7,
//       name: 'Sarah Wilson',
//       address: '444 Birch St, City, Country',
//       weight: '78 kg',
//       bloodGlucose: '115 mg/dL',
//       bloodPressure: '135/85 mmHg'
//     },
//     {
//       id: 8,
//       name: 'David Rodriguez',
//       address: '555 Walnut St, Town, Country',
//       weight: '75 kg',
//       bloodGlucose: '120 mg/dL',
//       bloodPressure: '130/90 mmHg'
//     },
//     {
//       id: 9,
//       name: 'Laura Martinez',
//       address: '666 Pineapple St, Village, Country',
//       weight: '70 kg',
//       bloodGlucose: '110 mg/dL',
//       bloodPressure: '120/80 mmHg'
//     },
//     {
//       id: 10,
//       name: 'Chris Thompson',
//       address: '777 Strawberry St, City, Country',
//       weight: '72 kg',
//       bloodGlucose: '105 mg/dL',
//       bloodPressure: '125/80 mmHg'
//     }
//   ];
  export default function AllHairTest() {
    const [data, setData] = useState([]);
    const [patientData,setPatientData]=useState([])
    const [selectedDoctors, setSelectedDoctors] = useState({});
  const fetchAppointment=async()=>{
    try {
      const response = await fetch(`${BASE_URL}/admin/get-Booked-appointment`, {
        method: 'GET',
        headers: {
          'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIzYmU5MTg3ZjczZWM1YjNlMWRiZWMiLCJpYXQiOjE3MTU4ODg2MDMsImV4cCI6MTcxNjE0NzgwM30.onxhU1fcSjvGn99oK2vVNEri64-Jpevr1UO0KNxPEuM",
        
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setPatientData([jsonData.data]);
      console.log(jsonData.data,"pathientData")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
    const handleDoctorSelect = (e, patientId) => {
      const selectedDoctorName = e.target.value;
      setSelectedDoctors(prevState => ({
        ...prevState,
        [patientId]: selectedDoctorName
      }));
    };
const handelAssign = async (patientId) => {
  const selectedDoctorName = selectedDoctors[patientId];
  const selectedDoctor=data.filter((doc)=>doc.fullname===selectedDoctors[patientId])
  console.log(selectedDoctor[0]._id,patientId,"id");
  try {
    const response = await fetch(`${BASE_URL}/admin/assign-doctor`, {
      method: 'POST',
      headers: {
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIzYmU5MTg3ZjczZWM1YjNlMWRiZWMiLCJpYXQiOjE3MTU4ODg2MDMsImV4cCI6MTcxNjE0NzgwM30.onxhU1fcSjvGn99oK2vVNEri64-Jpevr1UO0KNxPEuM",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        appointmentId: patientId,
        doctorIde: selectedDoctor[0]._id
      })
    });

    if (!response.ok) {
      throw new Error('Failed to assign doctor');
    }

    // Optionally, you can handle success response here
    console.log('Doctor assigned successfully');
  } catch (error) {
    console.error('Error assigning doctor:', error);
  }
};

  console.log(data,'dr sekect');
    useEffect(() => {
      fetchAppointment()
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/admin/alldoctor`, {
            method: 'GET',
            headers: {
              'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIzYmU5MTg3ZjczZWM1YjNlMWRiZWMiLCJpYXQiOjE3MTU4ODg2MDMsImV4cCI6MTcxNjE0NzgwM30.onxhU1fcSjvGn99oK2vVNEri64-Jpevr1UO0KNxPEuM",
            
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const jsonData = await response.json();
          setData(jsonData.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const navigate = useNavigate();
  
    return (
      <AdminNavbar>
        { patientData?<div className="all-patient-list-container">
          <div className="patient-list-1">
            {patientData?.map(patient => (
              <div key={patient.id} className="patient-item2">
                <div className="patient-details">
                  <h3>Patient Name : {patient?.userId?.fullname}</h3>
                 
                <p>Payment Status : {patient?.paymentStatus}</p>
                </div>
                <p>Time Slot : {patient?.timeSlot}</p>
                <p>Appointment Date : {patient?.appointmentDate?patient.appointmentDate:"Not Available"}</p>
                <div className='dr-select'>
                  <label htmlFor={`doctor-${patient.id}`}>Select a Doctor:</label>
                  <select id={`doctor-${patient.id}`} value={selectedDoctors[patient.id] || ''} onChange={(e) => handleDoctorSelect(e, patient.id)}>
                    <option value="">Select</option>
                    {data.map(doctor => (
                      <option key={doctor._id} value={doctor.fullname}>{doctor.fullname}</option>
                    ))}
                  </select>
                  {selectedDoctors[patient.id] && <button onClick={()=>handelAssign(patient?.id)}>Assign</button>}
                </div>
              </div>
            ))}
          </div>
        </div>:"wait"} 
      </AdminNavbar>
    );
  }
  