import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo, changeRole } from "./feature/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const todosPerPage = 10;

  useEffect(() => {
    
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    storedTodos.forEach(todo => dispatch(addTodo(todo)));
  }, [dispatch]);

  useEffect(() => {
    
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  if (!Array.isArray(todos)) {
    return <div>Error: todos is not an array</div>;
  }

  useEffect(() => {
    const role = currentTodo ? 'edit' : 'add';
    dispatch(changeRole({ role, editTodo: currentTodo?.content || '', id: currentTodo?.id || '' }));
  }, [currentTodo, dispatch]);

  const handleAddTodo = () => {
    setCurrentTodo(null);
    setShowModal(true);
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setShowModal(true);
  };

  const handleSave = (content) => {
    if (currentTodo) {
      dispatch(updateTodo({
        id: currentTodo.id,
        content,
        timestamp: new Date().toISOString(),
      }));
    } else {
      dispatch(addTodo({
        id: nanoid(),
        content,
        timestamp: new Date().toISOString(),
      }));
    }
    setShowModal(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTodos = searchTerm
    ? todos.filter((todo) =>
        todo.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : todos;

  const paginatedTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

  return (
    <div>
      <Navbar onAddTodo={handleAddTodo} onSearch={handleSearch} />
      <div className="container mx-auto p-4">
        {paginatedTodos.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            onDelete={() => dispatch(removeTodo(todo.id))}
            onEdit={() => handleEdit(todo)}
          />
        ))}
        <div className="flex justify-center w-full mt-4">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className=" pl-2">Previous</span>
                
              </button>
            </li>
            {[...Array(totalPages).keys()].map((page) => (
              <li key={page + 1}>
                <button
                  onClick={() => setCurrentPage(page + 1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                    page + 1 === currentPage ? 'bg-gray-200 text-gray-700' : ''
                  }`}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setCurrentPage((prev) => (indexOfLastTodo < filteredTodos.length ? prev + 1 : prev))}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="pr-2">Next</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <Modal
          initialContent={currentTodo?.content || ""}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;







