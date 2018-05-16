import React, {Component} from 'react'

import Nav from './Nav';
import Credit from './Credit';


const CreditList = (props) =>{


  const creditComponents = props.credits.map((credit, index) => {
    return <Credit
        description={credit.description}
        amount={credit.amount}
        date={credit.date}
        key={index}/>;
  });
  

    return (
        <div>
            {creditComponents}
            <Nav />
        </div>
    );
};

    // state= {
    //     debits: []
    // }

export default CreditList