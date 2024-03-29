import CitaCliente from "./CitaCliente";

const ListaCistas = ({ citasAgendadasProps, borrarCitaProps }) => {
  return (
    <>
      <div className="container text-center">
        <h2>Citas agendadas</h2>
      </div>
      <div className="container d-flex flex-row flex-wrap justify-content-center">
        {citasAgendadasProps.map((cita, posicionElemento) => (
          <CitaCliente
            key={posicionElemento}
            citaClienteProps={cita}
            borrarCitaProps ={borrarCitaProps}
          ></CitaCliente>
        ))}
      </div>
    </>
  );
};

export default ListaCistas;
