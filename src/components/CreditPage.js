import React from 'react';

import CreditList from './CreditList';
import {Link} from 'react-router-dom';
  
const CreditPage = (props) => {
  console.log(props);
  return (
      <div>
        <h1>Credits</h1>
        <Link to="/">Back to Home</Link>
        <br/>

        <CreditList credits={props.credits}/>
      </div>
  );
};


export default CreditPage;