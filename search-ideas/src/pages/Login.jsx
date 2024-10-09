import { useState } from "react";
import { useUser } from "../contexts/user.context";

export function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <h1 className="text-2xl pb-4">Login or register</h1>
      <form>
        <div className="w-full block mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-full p-2 mb-4"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full p-2"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="button"
            type="button"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <button
            className="button"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
