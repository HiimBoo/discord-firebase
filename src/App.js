import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { selectUser } from "./features/userSlice";
import { login, logout } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
