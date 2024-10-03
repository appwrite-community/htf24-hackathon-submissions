import { useState } from "react";
import { useUser } from "../contexts/user.context";
import { useIdeas } from "../contexts/ideas.context";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      {/* Show the submit form to logged in users. */}
      {user.current ? (
        <section>
          <h2>Submit Idea</h2>
          <form>
            <div>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              />
            </div>
            <div>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <button
              type="button"
              onClick={() =>
                ideas.add({
                  name,
                  category,
                  description,
                })
              }
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section>
          <p>Please login to submit an idea.</p>
        </section>
      )}
      <section className="pt-10 pb-10">
        <h2 className="text-2xl pb-4">Latest Ideas</h2>
        <ul>
          {ideas.current.map((idea) => (
            <>
              <li key={idea.$id}>
                <strong>Name: {idea.name}</strong>
                <p>Category: {idea.category}</p>
                <p>Description: {idea.description}</p>
                {/* Show the remove button to idea owner. */}
                {user.current && user.current.$id === idea.name && (
                  <button type="button" onClick={() => ideas.remove(idea.$id)}>
                    Remove
                  </button>
                )}
              </li>

              {/* {idx < ideas.current.length ? (
                <div className="h-[1px] w-full bg-white my-2"></div>
              ) : (
                <></>
              )} */}
            </>
          ))}
        </ul>
      </section>
    </>
  );
}
