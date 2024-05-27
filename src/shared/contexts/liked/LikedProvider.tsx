import React from "react";

import { LikedContext } from "./LikedContext";

export interface LikedProviderProps {
  children: React.ReactNode;
}

export const LikedProvider = ({ children }: LikedProviderProps) => {
  const [liked, setLiked] = React.useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const storedLiked = localStorage.getItem("liked");
      return storedLiked ? JSON.parse(storedLiked) : [];
    }
    return [];
  });

  React.useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  const value = React.useMemo(() => ({ liked, setLiked }), [liked, setLiked]);
  return (
    <LikedContext.Provider value={value}>{children}</LikedContext.Provider>
  );
};
