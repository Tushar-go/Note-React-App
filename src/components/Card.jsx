import React from 'react';

export const Card = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="rounded-lg border bg-white shadow-sm mx-3 my-2">
      <div className="p-6">
        <h3 className="text-2xl font-semibold">{todo.content}</h3>
        {/* <p className="text-sm text-gray-500">{todo.content}</p> */}
      </div>
      <div className="p-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">{new Date(todo.timestamp).toLocaleString()}</div>
        <div className="flex gap-2">
          <button
            className="flex items-center justify-center rounded-md text-sm font-medium hover:bg-gray-200 p-2"
            onClick={onEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
            </svg>
            <span className="sr-only">Edit</span>
          </button>
          <button
            className="flex items-center justify-center rounded-md text-sm font-medium hover:bg-gray-200 p-2"
            onClick={onDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            <span className="sr-only">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};






// const export Card = () => {
//   return (
//     <div className="rounded-lg border bg-white shadow-sm mx-3">
//       <div className="p-6">
//         <h3 className="text-2xl font-semibold">Grocery List</h3>
//         <p className="text-sm text-gray-500">Milk, eggs, bread, apples, chicken, rice...</p>
//       </div>
//       <div className="p-6 flex justify-between items-center">
//         <div className="text-sm text-gray-500">5/15/2023, 6:04:56 PM</div>
//         <div className="flex gap-2">
//           <button className="flex items-center justify-center rounded-md text-sm font-medium hover:bg-gray-200 p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-4 h-4"
//             >
//               <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
//             </svg>
//             <span className="sr-only">Edit</span>
//           </button>
//           <button className="flex items-center justify-center rounded-md text-sm font-medium hover:bg-gray-200 p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-4 h-4"
//             >
//               <path d="M3 6h18"></path>
//               <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
//               <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
//             </svg>
//             <span className="sr-only">Delete</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


