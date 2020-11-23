import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} width={100} />
    </div>;
  }
  return null;
}

function App() {
  return <GitHubUser login="leonardofj" />
}

ReactDOM.render(
  // React.createElement("div", { style: { color: "blue" } }, React.createElement("h1", null, "Hey, ho!")),
  <App />,
  document.getElementById('root')
);
