import type { RestRequestConfig } from "mock-config-server";

import { COOKIES } from "@/shared/constants/cookies";

export const postAuthLoginEmailConfig: RestRequestConfig = {
  path: "/auth/login",
  method: "post",
  routes: [
    {
      data: { message: "Неверный логин или пароль" },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(401);
          return data;
        },
      },
    },
    {
      data: {},
      entities: {
        body: {
          email: "user@mail.ru",
          password: "pass",
        },
      },
      interceptors: {
        response: (data, { setCookie }) => {
          setCookie(COOKIES.USER_ID, COOKIES.USER_ID, {
            httpOnly: true,
            maxAge: 360000,
            path: "/",
          });

          return data;
        },
      },
    },
    {
      data: { message: "Неверный пароль" },
      entities: {
        body: {
          email: "user@mail.ru",
          password: {
            checkMode: "exists",
          },
        },
      },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(400);

          return data;
        },
      },
    },
  ],
};
