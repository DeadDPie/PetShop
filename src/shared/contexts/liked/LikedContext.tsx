import React from "react";

export interface LikedContextParams {
  liked: number[];
  setLiked: (product: number[]) => void;
}

export const LikedContext = React.createContext<LikedContextParams>({
  liked: [],
  setLiked: () => {},
});
