"use client";
import { it } from "node:test";
import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type itemType = {
  id?: number;
  name?: string;
  stack?: string;
  link?: string;
  avatar_url?: string;
  followers?: number;
  bio?: string;
  following?: number;
  passport?: string;
  login?: string;
  repos_url?: string;
  public_repos?: number;
  updated_at?: string;
};

type ContextType = {
  items: itemType;
  repos: itemType[];
  search: string;
  error: string | null;

  username: string;
  loading: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setItems: React.Dispatch<React.SetStateAction<itemType>>;
  setRepos: React.Dispatch<React.SetStateAction<itemType[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  getValues: () => Promise<void>;
  setSearch: React.Dispatch<React.SetStateAction<string>>
};

export const AppContext = createContext<ContextType | null>(null);
type Props = {
  children: React.ReactNode;
};

const Context = ({ children }: Props) => {
  const router = useRouter();

  const [items, setItems] = useState<itemType>({});
  const [search, setSearch] = useState("")
  const [repos, setRepos] = useState<itemType[]>([])
  const [username, setUsername] = useState("")
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);


  const getValues = async () => {
    try {
      const itemResponse = await fetch(`https://api.github.com/users/${username}`)
      if (!itemResponse.ok) {
        throw new Error("User not found");
      }
      const data = await itemResponse.json();
      setItems(data);

      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!repoResponse.ok) {
        throw new Error("User repos not found");
      }

      const reposData = await repoResponse.json();
      setRepos(reposData);

      router.push("/repo");

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        setUsername("")
        setRepos([])
        setTimeout(() => {
          setError("")

        }, 1000)
      } else {
        setError("An unknown error occurred");
        console.log("error from fetch2:", error);
      }

    }

  }

  const ContextValue = {
    items,
    setItems,
    search,
    setSearch,
    repos,
    setRepos,
    username,
    setUsername,
    error,
    setError,
    loading,
    setLoading,
    getValues,

  };
  return (
    <AppContext.Provider value={ContextValue}>{children}</AppContext.Provider>
  );
};

export default Context;
