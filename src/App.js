import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="buttons">
  <button class="duplicate">duplicate</button>
  <button data-delete-btn>delete</button>
  <button data-toggle-btn>toggle</button>
  <button class="modify">modify title</button>
</div>
<div class="wrapper">
  <div class="container">
  <img class="image" src="https://static.boredpanda.com/blog/wp-content/uploads/2020/05/700-1.jpg" />
  <div class="header">
    <h3>BORZOI</h3>
      <h4>woof</h4>
    <details class="details">
      <summary>Details</summary>
      <div>
        <ul>
        <li>The magnificent borzoi! </li>
        <li>Look how  disproportionate its nose is. Marvelous. </li>
        </ul>
      </div>
  </details>
  </div>
</div>
</div>
    );
}

export default App;
