import {createContext, useState, useContext} from 'react';

const LibraryContext = createContext();

const LibraryProvider = ({children}) => {
    const [books, setBooks] = useState([
      { id: 1, title: "Book1", author: "Author 1", publicationDate: "2021-10-10",availableCopies: 10},
      { id: 2, title: "Book2", author: "Author 2", publicationDate: "2021-10-10",availableCopies: 10},
      { id: 3, title: "Book3", author: "Author 3", publicationDate: "2021-10-10",availableCopies: 10},
    ]);

    const [users, setUsers] = useState([
      { id: 1, name: "User 1", email: "Email 1", phone: "111111" },
      { id: 2, name: "User 2", email: "Email 2", phone: "222222" },
      { id: 3, name: "User 3", email: "Email 3", phone: "333333" },
    ]);

    const [userbooks, setUserBooks] = useState([
      { id: 1, userId: 1, bookId: 1, date: "2021-10-10" },
      { id: 2, userId: 2, bookId: 2, date: "2021-10-10" },
      { id: 3, userId: 3, bookId: 3, date: "2021-10-10" },
    ]);

    const addBook = (title, author, publicationDate, availableCopies) => {
      const newBook = { title, author, publicationDate, availableCopies };
      setBooks([...books, newBook]);
    };

    const updateBook = async (
      title,
      author,
      publicationDate,
      availableCopies
    ) => {
      try {
        const updatedBook = {
          title,
          author,
          publicationDate,
          availableCopies,
        };
        console.log(updatedBook);

        const updatedBooks = books.map((book) => {
          if (book.title === title) {
            return updatedBook;
          }
          return book;
        });
        
        setBooks(updatedBooks);
        console.log(updatedBooks);
        console.log("Book updated successfully");
      } catch (error) {
        console.log("Failed to update book:", error);
      }
    };


    const deleteBook = async (title) => {
      try {
        const updatedBooks = books.filter((book) => book.title !== title);
        setBooks(updatedBooks);
        console.log("Book deleted successfully");
      } catch (error) {
        console.log("Failed to delete book:", error);
      }
    };

    const borrowBook = (userId, bookId) => {
      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b.id === bookId ? { ...b, availableCopies: b.availableCopies - 1 } : b
        )
      );
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId
            ? { ...u, borrowedBooks: [...u.borrowedBooks, bookId] }
            : u
        )
      );
    };

    const returnBook = (userId, bookId) => {
      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b.id === bookId ? { ...b, availableCopies: b.availableCopies + 1 } : b
        )
      );
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId
            ? {
                ...u,
                borrowedBooks: u.borrowedBooks.filter((id) => id !== bookId),
              }
            : u
        )
      );
    };

    return (
      <LibraryContext.Provider
        value={{ books, setBooks, users, setUsers, addBook, updateBook, deleteBook, borrowBook, returnBook }}
      >
        {children}
      </LibraryContext.Provider>
    );
};

export const LibraryState = () => {
    return useContext(LibraryContext);
}

export default LibraryProvider;