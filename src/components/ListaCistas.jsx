import CitaCliente from "./CitaCliente";

const ListaCistas = () => {
  return (
    <>
      <div className="container text-center">
        <h2>Citas agendadas</h2>
      </div>
      <div className="container d-flex flex-row">
        <CitaCliente></CitaCliente>
        <CitaCliente></CitaCliente>
        <CitaCliente></CitaCliente>
      </div>
    </>
  );
};

export default ListaCistas;
