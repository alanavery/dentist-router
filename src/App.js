import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Procedures from './components/Procedures';
import ProcedureDetails from './components/ProcedureDetails';

import './App.css';

function App() {
  // const proceduresList = ['Root canal', 'Crown', 'Cleaning'];
  const proceduresList = [
    {
      name: 'Root canal',
      id: 1,
      description: 'Very painful'
    },
    {
      name: 'Crown',
      id: 2,
      description: 'Not too bad'
    },
    {
      name: 'Cleaning',
      id: 3,
      description: 'Piece of cake'
    }
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route
          exact
          path="/procedures"
          render={() => {
            return <Procedures proceduresList={proceduresList} />;
          }}
        />
        <Route
          path="/procedures/:id"
          render={(routeInfo) => {
            const id = routeInfo.match.params.id;
            return <ProcedureDetails procedure={proceduresList[id - 1]} />;
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
