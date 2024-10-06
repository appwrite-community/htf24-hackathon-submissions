import { useEffect, useState } from "react";
import { useUser } from "../contexts/user.context";
import { useIdeas } from "../contexts/ideas.context";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (user.current && user.current.$id) {
      setUserId(user.current.$id);
    }
  }, [user.current]);

  const handleSubmit = async () => {
    if (!name || !description || !userId) {
      alert("All fields are required");
      return;
    }

    try {
      await ideas.add({
        name,
        description,
        userId,
      });
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Failed to submit idea", error);
    }
  };

  const filteredIdeas = ideas.current.filter((idea) =>
    idea.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Show the submit form to logged in users. */}
      {user.current ? (
        <section>
          <h2>Submit Idea</h2>
          <form>
            <div className="w-full my-2">
              <input
                type="text"
                placeholder="name"
                value={name}
                className="w-full h-full p-2 rounded-lg"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="w-full my-2">
              <textarea
                placeholder="Description"
                value={description}
                className="w-full h-full p-2 rounded-lg"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section className="mt-20">
          <p>Please login to submit an idea.</p>
        </section>
      )}
      <section className="pt-10 pb-10">
        {ideas.current.length >= 1 ? (
          <div>
            <input
              type="text"
              placeholder="Search by idea name"
              className="w-full p-2 h-auto mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        ) : (
          <>There is nothing to be searched</>
        )}
        <h2 className="text-2xl pb-4">Latest Ideas</h2>
        <ul>
          {filteredIdeas.length === 0 ? (
            <p>No ideas found</p>
          ) : (
            filteredIdeas.map((idea) => (
              <div key={idea.$id}>
                <li>
                  <strong>Name: {idea.name}</strong>
                  <p>Description: {idea.description}</p>
                  {user.current && user.current.$id === idea.userId && (
                    <button
                      type="button"
                      onClick={() => ideas.remove(idea.$id)}
                      className="float-right"
                    >
                      Remove
                    </button>
                  )}
                  <div className="h-[1px] bg-white w-full mt-14 my-2"></div>
                </li>
              </div>
            ))
          )}
        </ul>
      </section>
    </>
  );
}
