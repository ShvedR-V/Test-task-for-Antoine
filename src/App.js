import Title from './components/Title';
import Form from './components/Form'

import './App.scss';

// import { useLazyQuery } from "@apollo/client";
// import FILTER_CARDS from './graphql/query/cards'
// import { useEffect } from 'react';



function App() {
  // const [addVarFiller, data] = useLazyQuery(FILTER_CARDS);
  // console.log(data);
  // useEffect(()=>{
  //   addVarFiller({
  //     variables: {
  //       filter: {
  //         limit: 20,
  //         keywords: "color",
  //         types: ["PODCAST"],
  //       },
  //     },
  //   });
  // })
  return (
    <div className="wrapper">
      <div className="container">
        <Title text="Search" />
        <Form />
    </div>
    
  </div>);
}

export default App;
