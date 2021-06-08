import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForecast } from "./redux/actions/forecastAction";
import { updateLocation } from "./redux/actions/locationAction";
import { getForecastData } from "./services/forecastApi.js";
import Home from "./pages/Home/Home";
import Chart from "./pages/Chart/Chart";
import Button from "./components/button/Button";
import Input from "./components/inputField/InputField";
import { informer } from "./common/constant.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forecast);
  const request = useSelector((state) => state.location);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState();

  const showForecast = () => {
    setLoading(true);
    if (request.location) {
      getForecastData(request.location)
        .then((payload) => {
          dispatch(updateForecast(payload));
        })

        .catch(() => dispatch(updateForecast({ forecast: informer.noData })));
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
    if (data.forecast === informer.noData) setError(data.forecast);
  }, [data]);

  const setlocation = (e) => {
    if (data.forecast) dispatch(updateForecast({ forecast: "" }));
    setError("");
    dispatch(updateLocation({ location: e.target.value }));
  };
  return (
    <div className="main">
      <Home
        isLoading={isLoading}
        error={error}
        Button={
          <Button placeholder={informer.showForecast} callback={showForecast} />
        }
        Input={<Input callback={setlocation} />}
      />
      {!!data.forecast && data.forecast !== informer.noData && (
        <Chart rawData={data} />
      )}
    </div>
  );
}

export default App;
