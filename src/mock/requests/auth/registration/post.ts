import type { RestRequestConfig } from "mock-config-server";

export const postUsersRegistrationConfig: RestRequestConfig = {
  path: "/auth/registration",
  method: "post",
  routes: [
    {
      data: { message: "Ошибка регистрации" },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(500);
          return data;
        },
      },
    },
    {
      data: {
        message: "Пользователь с такой почтой уже существует",
      },
      entities: {
        body: {
          email: "user@gmail.com",
          password: {
            checkMode: "exists",
          },
        },
      },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(409);
          return data;
        },
      },
    },
    {
      data: {},
      entities: {
        body: {
          email: {
            checkMode: "exists",
          },
          password: {
            checkMode: "exists",
          },
        },
      },
    },
  ],
};
