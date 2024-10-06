import "./App.css";
import { Home } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { UserProvider, useUser } from "./contexts/user.context";
import { IdeasProvider } from "./contexts/ideas.context";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div className="h-full w-full max-w-[368px] mx-auto py-20">
      <UserProvider>
        <IdeasProvider>
          <Navbar /> {/* Add the navbar before page content */}
          <div className="h-[1px] bg-white w-full my-4"></div>
          <main>{isLoginPage ? <><Login /><Home /></> : <Home />}</main>
        </IdeasProvider>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav className="flex justify-between items-center">
      <li className="list-none">
        <a href="/" className="text-white text-3xl">
          Idea tracker
        </a>
        {user.current ? <p>{user.current.email}</p> : <></>}
      </li>
      {user.current ? (
        <>
          <button type="button" onClick={() => user.logout()}>
            Logout
          </button>
        </>
      ) : (
        <a href="/login" className="text-lg">
          Login
        </a>
      )}
    </nav>
  );
}

export default App;
