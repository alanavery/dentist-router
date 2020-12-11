import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li className="nav">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/procedures">Procedures</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Nav;
