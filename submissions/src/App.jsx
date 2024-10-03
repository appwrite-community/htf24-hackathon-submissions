import "./App.css";
import { Home } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { UserProvider, useUser } from "./contexts/user.context";
import { IdeasProvider } from "./contexts/ideas.context";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div className="h-full w-full max-w-[368px] mx-auto">
      <UserProvider>
        <IdeasProvider>
          <Navbar /> {/* Add the navbar before page content */}
          <main>{isLoginPage ? <Login /> : <Home />}</main>
        </IdeasProvider>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav className="flex justify-between items-center pb-10">
      <li className="list-none">
        <a href="/">Idea tracker</a>
        {user.current ? <p>{user.current.email}</p> : <></>}
      </li>
      {user.current ? (
        <>
          <button type="button" onClick={() => user.logout()}>
            Logout
          </button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}

export default App;
