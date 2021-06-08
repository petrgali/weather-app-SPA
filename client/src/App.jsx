import { useState } from "react";
import { getMessage } from "./services/testApi.js";
import Home from "./pages/Home";
import Button from "./components/button/Button";
import Input from "./components/inputField/InputField";
import "./App.css";
import { informer } from "./common/constant.js";

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState();
  const [location, setLocation] = useState("");

  const showForecast = () => {
    setLoading(true);
    if (location)
      getMessage(location)
        .then((payload) => setMessage(payload.forecast))
        .catch(() => setMessage(informer.noData));
    setLoading(false);
  };
  const updatelocation = (e) => {
    setMessage("");
    setLocation(e.target.value);
  };
  return (
    <>
      <Home
        message={message}
        isLoading={isLoading}
        Button={
          <Button placeholder={informer.showForecast} callback={showForecast} />
        }
        Input={<Input callback={updatelocation} />}
      />
    </>
  );
}

export default App;
