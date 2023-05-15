import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { LibraryState } from "../../context/libraryProvider";

export default function UpdateBookModel(props) {
  const [show, setShow] = useState(false);
  const { updateBook } = LibraryState();
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [publicationDate, setPublicationDate] = useState(props.publicationDate);
  const [availableCopies, setAvailableCopies] = useState(props.availableCopies);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    console.log(title, author, publicationDate, availableCopies);
    await updateBook(title, author, publicationDate, availableCopies).then(
      () => {
        alert("Book updated successfully");
        setShow(false);
      }
    );
  };

  return (
    <div>
      <Button className="m-1" variant="warning" onClick={handleShow}>
        <i className="fas fa-edit text-success"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control
                type="text"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Available Copies </Form.Label>
              <Form.Control
                type="text"
                placeholder="Numer Of Available Copies"
                value={availableCopies}
                onChange={(e) => setAvailableCopies(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleUpdateBook}>
              Edit Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
