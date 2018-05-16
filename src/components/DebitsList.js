import React, {Component} from 'react'

import Nav from './Nav';
import Debit from './Debit';


const DebitsList = (props) =>{


  const debitComponents = props.debits.map((debit, index) => {
    return <Debit
        description={debit.description}
        amount={debit.amount}
        date={debit.date}
        key={index}/>;
  });
  

    return (
        <div>
            {debitComponents}
            <Nav />
        </div>
    );
};


export default DebitsList