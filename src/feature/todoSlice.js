import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [], 
    role: null,
    editTodo: null,
    id: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    changeRole: (state, action) => {
      state.role = action.payload.role;
      state.editTodo = action.payload.editTodo;
      state.id = action.payload.id;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, changeRole } = todoSlice.actions;
export default todoSlice.reducer;
