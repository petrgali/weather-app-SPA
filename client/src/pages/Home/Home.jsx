import "./Home.css";
import { informer } from "../../common/constant";

export default function Home({ isLoading, error, Button, Input }) {
  return (
    <div className="display-controls">
      <div>{Input}</div>
      <div>{Button}</div>
      {isLoading && <div>{informer.loading} </div>}
      {error && <div>{error} </div>}
    </div>
  );
}
