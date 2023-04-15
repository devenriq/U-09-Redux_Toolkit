import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  //Nombre de la función
  reducerPath: "todos",

  //Path estático de donde sacará la información
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  //Función asíncrona que sirve para obtener la información de determinado endpoint
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

//Se exporta un hook personalizado. En este caso, se le ha puesto el nombre de useGetTodosQuery,
//El hook por defecto aporta cuatro elementos: isLoading, isError, data y error. En data se encuentra toda la información del API
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
