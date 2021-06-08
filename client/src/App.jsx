import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForecast } from "./redux/actions/forecastAction";
import { updateLocation } from "./redux/actions/locationAction";
import { getForecastData } from "./services/forecastApi.js";
import Home from "./pages/Home";
import Button from "./components/button/Button";
import Input from "./components/inputField/InputField";
import { informer } from "./common/constant.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forecast);
  const request = useSelector((state) => state.location);

  const [isLoading, setLoading] = useState();

  const showForecast = () => {
    setLoading(true);
    if (request.location)
      getForecastData(request.location)
        .then((payload) => dispatch(updateForecast(payload)))
        .catch(() => dispatch(updateForecast({ forecast: informer.noData })));
    setLoading(false);
  };
  const setlocation = (e) => {
    if (data.forecast) dispatch(updateForecast({ forecast: "" }));
    dispatch(updateLocation({ location: e.target.value }));
  };
  return (
    <>
      <Home
        data={data}
        isLoading={isLoading}
        Button={
          <Button placeholder={informer.showForecast} callback={showForecast} />
        }
        Input={<Input callback={setlocation} />}
      />
    </>
  );
}

export default App;
