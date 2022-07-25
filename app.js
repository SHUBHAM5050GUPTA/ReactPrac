import { Fragment } from 'react';
import './App.css';


// Components .
import Add from './components/Add';
import ListCompany from './components/list';

function App() {
  return <Fragment>
    <Add></Add>
    <div className='mt-5'>
    <ListCompany></ListCompany>
    </div>
  </Fragment>
}

export default App;
