import "./Home.css";

export default function Home({ isLoading, message, Button, Input }) {
  const msg = "Загрузка данных..";
  return (
    <div className="display-controls">
      <div>{Input}</div>
      <div>{Button}</div>
      {!isLoading ? <div>{message} </div> : msg}
    </div>
  );
}
