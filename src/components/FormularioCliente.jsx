import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaCistas from "./ListaCistas";

const FormularioCliente = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [detalles, setDetalles] = useState("");
  const citasLocalStorage = JSON.parse(localStorage.getItem("keyCitas")) || [];
  const [citasAgendadas, setCitasAgendadas] = useState(citasLocalStorage);

  useEffect(() => {
    localStorage.setItem("keyCitas", JSON.stringify(citasAgendadas));
  }, [citasAgendadas]);

  function handleSubmit(e) {
    e.preventDefault();
    let idCita = crypto.randomUUID()
    setCitasAgendadas([
      ...citasAgendadas,
      { nombreMascota, nombreDuenio, fecha, hora, detalles, idCita},
    ]);
    console.log(citasAgendadas);
  }
  function borrarCita(idUnica) {
    const citasFiltradas = citasAgendadas.filter((cita) => cita.idCita !== idUnica);
    setCitasAgendadas(citasFiltradas);
  }
  return (
    <>
      <div className="container border my-4">
        <h1 className="text-center">Administrador de pacientes</h1>
        <Form className="px-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNombreMascota">
            <Form.Label>Nombre de la mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el nombre de su mascota"
              minLength={3}
              maxLength={20}
              onChange={(e) => setNombreMascota(e.target.value)}
              value={nombreMascota}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNombreDueño">
            <Form.Label>Nombre del dueño</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el nombre del dueño"
              minLength={3}
              maxLength={20}
              onChange={(e) => setNombreDuenio(e.target.value)}
              value={nombreDuenio}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="number"
              placeholder="dd/mm/aa"
              minLength={0}
              maxLength={20}
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHora">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="number"
              placeholder="hh:mm"
              minLength={0}
              maxLength={20}
              onChange={(e) => setHora(e.target.value)}
              value={hora}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSintomas">
            <Form.Label>Descripcion de síntomas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Breve descripcion de los síntomas de la mascota"
              minLength={10}
              maxLength={500}
              onChange={(e) => setDetalles(e.target.value)}
              value={detalles}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="my-3">
            Agendar turno
          </Button>
        </Form>
      </div>
      <ListaCistas
        citasAgendadasProps={citasAgendadas}
        borrarCitaProps={borrarCita}
      ></ListaCistas>
    </>
  );
};

export default FormularioCliente;
