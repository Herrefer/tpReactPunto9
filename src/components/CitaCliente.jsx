import { Accordion, Button, Card } from "react-bootstrap";

const CitaCliente = ({
  citaClienteProps,
  numeroOrdenProps,
  borrarCitaProps,
}) => {
  return (
    <Card style={{ width: "18rem" }} className="mx-3">
      <Card.Body>
        <Card.Title>Orden nro {numeroOrdenProps}</Card.Title>
        <Card.Text>Dueño: {citaClienteProps.nombreDuenio}</Card.Text>
        <Card.Text>Mascota: {citaClienteProps.nombreMascota}</Card.Text>
        <Card.Text>Fecha: {citaClienteProps.fecha}</Card.Text>
        <Card.Text>Hora: {citaClienteProps.hora}</Card.Text>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Síntomas</Accordion.Header>
            <Accordion.Body>{citaClienteProps.detalles}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button
          variant="danger"
          className="mt-3"
          onClick={() => borrarCitaProps(citaClienteProps.idCita)}
        >
          Cancelar turno
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CitaCliente;
