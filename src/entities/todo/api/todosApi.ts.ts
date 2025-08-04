import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api-config.ts';
import type { TodoProps } from '../model/types.ts';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todos', 'Todo'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getAllTodos: build.query<TodoProps[], void>({
      query: () => 'todos/',
      providesTags: ['Todos'],
    }),
    getTodoById: build.query<TodoProps, string>({
      query: (todoId) => `todos/${todoId}`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading todo:', error);
        }
        return result ? [{ type: 'Todo', id }] : [];
      },
    }),
    getTodosByUserId: build.query<TodoProps[], string>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading todos:', error);
        }
        return result ? [{ type: 'Todos', id }] : [];
      },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetTodoByIdQuery,
  useGetTodosByUserIdQuery,
} = todosApi;
