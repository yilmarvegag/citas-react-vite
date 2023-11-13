import { useState, useEffect} from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const localPatients = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(localPatients);
    }
    getLS();
  }, []);
  

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])
  

  const deletePatient = (id) => {
    const patientsUpdate = patients.filter(patientFilter => patientFilter.id !== id);
    setPatients(patientsUpdate);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form 
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
        />
        <ListPatients 
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
