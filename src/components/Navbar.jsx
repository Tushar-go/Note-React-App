import React, { useState } from 'react';

export const Navbar = ({ onAddTodo, onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <header className="bg-black py-3 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Notes</h1>
        <form className="max-w-xl" onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full py-2 px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Notes..."
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
        <button
          type="button"
          className="text-black bg-gray-200 hover:bg-gray-50 font-semibold rounded-lg text-sm px-6 py-2 me-2 mb-2"
          onClick={onAddTodo}
        >
          Add
        </button>
      </div>
    </header>
  );
};

