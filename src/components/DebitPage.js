import React from 'react';

import DebitsList from './DebitsList';
import {Link} from 'react-router-dom';
  
const DebitPage = (props) => {
  console.log(props);
  return (
      <div>
        <h1>Debits</h1>
        <Link to="/">Back to Home</Link>
        <br/>

        <DebitsList debits={props.debits}/>
      </div>
  );
};


export default DebitPage;