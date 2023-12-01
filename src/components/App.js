import { useEffect } from "react";

function App() {
  useEffect(function() {
    fetch(`http://localhost:8000/questions`)
    .then(res => res.json())
    .then(function(data) {
      console.log(data)
    })
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
