import "./Home.css";
import { informer } from "../common/constant";

export default function Home({ isLoading, data, Button, Input }) {
  return (
    <div className="display-controls">
      <div>{Input}</div>
      <div>{Button}</div>
      {!isLoading ? <div>{data.forecast} </div> : informer.loading}
    </div>
  );
}
