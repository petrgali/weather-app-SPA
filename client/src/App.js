import { useEffect, useState } from "react";
import { getMessage } from "./services/testApi.js";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    getMessage().then((payload) => setMessage(payload.data));
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [message]);
  return <Home isLoading={isLoading} message={message} />;
}

export default App;
