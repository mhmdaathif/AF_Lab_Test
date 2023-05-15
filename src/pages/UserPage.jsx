import React from "react";
import Card from "react-bootstrap/Card";
import Navigation from "../components/Navbar/Navbar";
import userimg from "../assets/user.png";
import { Button } from "react-bootstrap";
import AddUserModel from "../components/Model/AddUserModel";
import { LibraryState } from "../context/libraryProvider.jsx";

export default function UserPage() {
  const { users } = LibraryState();
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <div className="overflow-hidden">
        <h1 className="text-center">Users</h1>
        <div className="text-center">
          <AddUserModel />
        </div>
        <br />
        <div className="row p-3">
          {users.map((user) => (
            <div className="col-sm-5">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  className="mx-auto"
                  variant="top"
                  src={userimg}
                  style={{ width: "100px", height: "100px" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{user.name}</Card.Title>
                </Card.Body>
                <Card.Body className="text-center">
                  <Card.Link href="#">
                    <i className="fas fa-edit text-success"></i>
                  </Card.Link>
                  <Card.Link href="#">
                    <i className="fas fa-trash-alt text-danger"></i>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
