import { Link } from 'react-router-dom';

function Procedures(props) {
  const procedures = props.proceduresList.map((procedure) => {
    return (
      <li>
        <Link to={`/procedures/${procedure.id}`}>{procedure.name}</Link>
      </li>
    );
  });
  return <div>{procedures}</div>;
}

export default Procedures;
