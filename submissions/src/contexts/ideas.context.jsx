import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Query } from "appwrite";

export const IDEAS_DATABASE_ID = "search-data"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "66fe09be00069259e978"; // Replace with your collection ID

const IdeasContext = createContext();

export function useIdeas() {
  return useContext(IdeasContext);
}

export function IdeasProvider(props) {
  const [ideas, setIdeas] = useState([]);

  async function add(idea) {
    const response = await databases.createDocument(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      ID.unique(),
      idea
    );
    setIdeas((ideas) => [response, ...ideas].slice(0, 10));
  }

  async function remove(id) {
    await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
    setIdeas((ideas) => ideas.filter((idea) => idea.$id !== id));
    await init(); // Refetch ideas to ensure we have 10 items
  }

  async function init() {
    const response = await databases.listDocuments(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    setIdeas(response.documents);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <IdeasContext.Provider value={{ current: ideas, add, remove }}>
      {props.children}
    </IdeasContext.Provider>
  );
}
