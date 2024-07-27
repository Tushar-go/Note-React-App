import React, { useState } from 'react';

const Modal = ({ initialContent, onSave, onClose }) => {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg  w-96">
        <h2 className="text-2xl font-semibold mb-4">Todo</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
