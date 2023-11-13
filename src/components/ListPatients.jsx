import Patientt from "./Patientt"

const ListPatients = ({patients, setPatient, deletePatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {patients && patients.length ? (
      <>
        <h2 className="font-black text-3xl">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">
                Pacientes y Citas
            </span>
        </p>

        { patients.map((patient) => (
          <Patientt 
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        )) }
      </> ): (
        <>
        <h2 className="font-black text-3xl">No hay pacientes</h2>
        <p className="text-xl mt-5">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
                y aparecerán en este lugar
            </span>
        </p>
        </>
      )}
        
    </div>
  )
}

export default ListPatients