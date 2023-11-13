

const Patientt = ({patient, setPatient, deletePatient}) => {

    const {
        namePet,
        petOwner,
        email,
        dateEntry,
        symptoms,
        id,
    } = patient;

    const handleDelete = () => {
        const response = confirm('¿Seguro de eliminar este paciente?')
        if(response){
            deletePatient(id);
        }
    }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl text-left">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">
                    {namePet}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">
                    {petOwner}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo: {''}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Ingreso: {''}
                <span className="font-normal normal-case">
                    {dateEntry}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">
                    {symptoms}
                </span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                type="button"
                onClick={()=>setPatient(patient)}
                >Editar</button>
                
                <button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                type="button"
                //onClick={()=>deletePatient(id)}
                onClick={handleDelete}
                >Eliminar</button>
            </div>

        </div>
  )
}

export default Patientt