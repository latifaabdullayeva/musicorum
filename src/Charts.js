import logo from './logo.svg';
import './Charts.css';

function Charts() {
  return (
    <div className="Charts">
      <header className="Charts-header">
        <img src={logo} className="Charts-logo" alt="logo" />
        <p>
          Edit <code>src/Charts.js</code> and save to reload.
        </p>
        <a
          className="Charts-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Charts;
