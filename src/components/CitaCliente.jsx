import { Accordion, Button, Card } from "react-bootstrap";

const CitaCliente = () => {
  return (
    <Card style={{ width: "18rem" }} className="mx-3">
      <Card.Body>
        <Card.Title>Número de orden</Card.Title>
        <Card.Text>
          Dueño: Nombre
        </Card.Text>
        <Card.Text>
          Mascota: Nombre
        </Card.Text>
        <Card.Text>
          Fecha: dd/mm/aa
        </Card.Text>
        <Card.Text>
          Hora: hh:mm
        </Card.Text>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Síntomas</Accordion.Header>
            <Accordion.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nam
              maxime eligendi amet consectetur corrupti praesentium aliquid
              vero! Molestiae, harum ab ea doloribus in quisquam eaque quos
              alias quo ipsum perspiciatis ut. Est vel eos labore voluptas quos
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button variant="danger" className="mt-3">Cancelar turno</Button>
      </Card.Body>
    </Card>
  );
};

export default CitaCliente;
