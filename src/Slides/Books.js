import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const SlideContent = ({ nextSlide }) => {
  const [book, onbookChange] = useState();
  const [books, setBooks] = useState([]);

  const addBook = () => {
    setBooks((state) => state.concat(book));
    onbookChange("");
  };

  const checkForEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      addBook();
    }
  };

  const removeBook = (index) => {
    setBooks((state) => {
      const stateCopy = [...state];
      stateCopy.splice(index, 1);
      setBooks(stateCopy || []);
    });
  };

  return (
    <div className="flex w-full flex-col container items-center justify-between px-4 space-y-4 md:space-y-6 z-10">
      <h1 className="text-teal-500 text-3xl md:text-5xl text-center font-black text-glow uppercase max-w-full">
        Book recommendations for the baby:
      </h1>
      <div className="flex flex-row w-full md:w-1/2 justify-between space-x-4">
        <input
          value={book}
          onChange={(e) => onbookChange(e.target.value)}
          className="form-input mt-1 flex-grow block shadow-md"
          onKeyDown={checkForEnter}
        />
        <button
          onClick={addBook}
          className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-32 hover:bg-teal-700"
        >
          Add
        </button>
      </div>
      <div
        style={{ maxHeight: "16rem" }}
        className="flex flex-col flex-wrap w-1/2"
      >
        {books &&
          books.map((book, index) => (
            <div className="flex flex-row items-center">
              <CloseIcon
                className="cursor-pointer"
                onClick={() => removeBook(index)}
              />
              <h3 className="text-teal-500 text-2xl font-bold text-glow uppercase ml-4">
                {book}
              </h3>
            </div>
          ))}
      </div>
      <button
        onClick={() => nextSlide({ books })}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64 hover:bg-teal-700 shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

const BookSlide = ({ nextSlide }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center pb-32 md:pb-0">
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default BookSlide;
