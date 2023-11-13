import { useState, useEffect } from 'react'
import { Error } from './Error';

const Form = ({patients, setPatients, patient, setPatient}) => {

  const [namePet, setNamePet] = useState('');
  const [petOwner, setPetOwner] = useState('');
  const [email, setEmail] = useState('');
  const [dateEntry, setDateEntry] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patients).length > 0){
      setNamePet(patient.namePet);
      setPetOwner(patient.petOwner);
      setEmail(patient.email);
      setDateEntry(patient.dateEntry);
      setSymptoms(patient.symptoms);
    }
  }, [patient])
  

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Validación formulario
    if( [namePet,petOwner,email,dateEntry,symptoms].includes('') ){
      //console.info('Al menos hay un campo vacío')
      setError(true);
      return;
    }
    
    setError(false);

    //set props
    const patientForm = {
      namePet,
      petOwner,
      email,
      dateEntry,
      symptoms,
    };

    if(patient.id){
      //editando
      patientForm.id = patient.id;
      //
      const patientsUpdate = patients.map( patientState => patientState.id === patient.id ? patientForm : patientState);
      //
      setPatients(patientsUpdate);
      setPatient({});
    }else{
      //nuevo registro
      patientForm.id = generateId();
      setPatients([...patients, patientForm]);
    }

    fillForm();
  }
  
  const fillForm = () => {
    //fill form
    setNamePet('');
    setPetOwner('');
    setEmail('');
    setDateEntry('');
    setSymptoms('');
  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {""}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 text-left mb-10'
      >
        {error && <Error> <p>Todos los campos son oblitarios</p> </Error>}
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input 
            id='mascota'
            type="text" 
            placeholder='Nombre de la mascota' 
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            value={namePet}
            onChange={(e) => setNamePet(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
          Propietario
            </label>
          <input 
            id='propietario'
            type="text" 
            placeholder='Nombre del Propietario' 
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            value={petOwner}
            onChange={(e) => setPetOwner(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            Correo 
          </label>
          <input 
            id='email'
            type="email" 
            placeholder='Correo Electrónico' 
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
            Fecha Ingreso 
          </label>
          <input 
            id='alta'
            type="date" 
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            value={dateEntry}
            onChange={(e) => setDateEntry(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
            Síntomas 
          </label>
          <textarea 
            id="sintomas" 
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los Síntomas'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input 
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value={patient.id ? 'Editar Paciente':'Agregar Paciente' }
        />

      </form>
    </div>
  )
}

export default Form