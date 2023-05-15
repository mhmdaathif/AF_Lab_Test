import React from "react";
import Navigation from "../components/Navbar/Navbar";
import { Table, Badge, Image, Button } from "react-bootstrap";
import { LibraryState } from "../context/libraryProvider.jsx";

export default function Home() {
  const { books } = LibraryState();
  const { users } = LibraryState();

  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <div className="text-center">
        <h2>All Users Details</h2>
      </div>
      <div className="m-3">
        <Table responsive bordered hover className="mb-0 bg-white">
          <thead className="bg-light">
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>
                  <div className="d-flex align-items-center">{user.name}</div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br />
      </div>
      <br />
      <div className="text-center">
        <h2>All Book Details</h2>
      </div>
      <div className="m-3">
        <Table responsive bordered hover className="mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Auther</th>
              <th>Publication date</th>
              <th>Available copies</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publicationDate}</td>
                <td>{book.availableCopies}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br />
      </div>
    </div>
  );
}
