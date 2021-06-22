import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = {name :'arjun', age: 21};
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{ 10 }</p>
        <p>{"hello fools"}</p>
      </div>
    </div>
  );
}

export default App;
