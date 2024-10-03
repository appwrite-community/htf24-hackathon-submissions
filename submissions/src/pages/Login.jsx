import { useState } from "react";
import { useUser } from "../contexts/user.context";

export function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <h1>Login or register</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div>
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
