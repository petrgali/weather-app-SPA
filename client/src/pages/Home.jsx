export default function Home({ isLoading, message }) {
  
  return <>{!isLoading && <div>{message}</div>}</>;
}
