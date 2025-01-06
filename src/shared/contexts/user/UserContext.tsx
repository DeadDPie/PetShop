"use client";

import React from "react";

export interface UserResponse {
  name: "string";
  email: "string";
  number: "string";
}

export interface UserContextParams {
  user: UserResponse;
  setUser: (user: UserResponse) => void;
}

export const UserContext = React.createContext<UserContextParams>({
  user: {} as UserResponse,
  setUser: () => {},
});
