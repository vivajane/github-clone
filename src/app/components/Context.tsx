"use client";
import { it } from "node:test";
import React, { createContext, useState, useEffect } from "react";

type itemType = {
  name?: string;
  stack?: string;
  updated?: string;
  link?: string;
  avatar_url?: string;
  followers?: number;
  following?: number;
  passport?: string;
  login?: string;
  repos_url?: string;
  public_repos?: number;
};

type ContextType = {
  items: itemType;
  repos: itemType[];
  search: string;
  setItems: React.Dispatch<React.SetStateAction<itemType>>;
  setRepos: React.Dispatch<React.SetStateAction<itemType[]>>

  setSearch: React.Dispatch<React.SetStateAction<string>>
};

export const AppContext = createContext<ContextType | null>(null);
type Props = {
  children: React.ReactNode;
};

const Context = ({ children }: Props) => {
  const [items, setItems] = useState<itemType>({});
  const [search, setSearch] = useState("")
  const [repos, setRepos] = useState<itemType[]>([])
  

  useEffect(() => {
    fetch("https://api.github.com/users/vivajane/repos").then((res) => res.json()).then((data) => {
      return setRepos(data);
    })
  }, [])

  useEffect(() => {
    fetch("https://api.github.com/users/vivajane")
      .then((res) => res.json())
      .then((data) => {
        return setItems(data);
      });
  }, []);
  const ContextValue = {
    items,
    setItems,
    search,
    setSearch,
    repos,
    setRepos
  };
  return (
    <AppContext.Provider value={ContextValue}>{children}</AppContext.Provider>
  );
};

export default Context;
