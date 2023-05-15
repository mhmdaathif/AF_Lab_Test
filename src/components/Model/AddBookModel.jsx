import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { LibraryState } from "../../context/libraryProvider";

export default function AddBookModel() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addBook } = LibraryState();
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author, publicationDate, availableCopies);
    handleClose();
  };

  return (
    <div>
      <Button
        className="ml-5 mr-5 my-3 w-100 btn btn-outline-secondary btn"
        onClick={handleShow}
      >
        Add Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control
                type="Date"
                onChange={(e) => setPublicationDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Available Copies </Form.Label>
              <Form.Control
                type="number"
                placeholder="Numer Of Available Copies"
                onChange={(e) => setAvailableCopies(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
