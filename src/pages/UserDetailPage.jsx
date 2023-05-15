import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Navigation from "../components/Navbar/Navbar";
import user from "../assets/user.png";
import { Button } from "react-bootstrap";

export default function UserDetailPage() {
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="mx-auto"
            variant="top"
            src={user}
            style={{ width: "100px", height: "100px" }}
          />
          <Card.Body>
            <Card.Title>Prathibha</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Email</ListGroup.Item>
            <ListGroup.Item>Phone number</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      
    </div>
  );
}
