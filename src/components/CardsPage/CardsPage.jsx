import {useEffect, useState}from  "react" ;
import { useLazyQuery } from "@apollo/client";

import FILTER_CARDS from '../../graphql/query/cards'

import Title from '../Title';
import Form from '../Form';
import CardsList from '../CardsList'

import styles from './CardsPage.module.scss';

export default function CardsPage (){
    const [value, setValue] = useState('');

    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState(null);
    const [error, setError] = useState(null);
      
    const [setFilter, receivedData ] = useLazyQuery(FILTER_CARDS);

    useEffect(()=>{
        const { loading, data, error } = receivedData;

    if(loading || !loading) setLoading(loading);
    if(data) setCards(data.contentCards.edges);
    if(error) setError(error);

    },[receivedData])




  useEffect(()=>{
    setFilter({
      variables: {
        filter: {
          limit: 20,
          keywords:value,
          types: ["PODCAST"],
        },
      },
    });
  },[value]);


  const handleChange = (e) => setValue(e.target.value)

    return (
    <div className={styles.wrapper}>
       <div className={styles.container}>
          <Title text="Search" />
          <Form value={value} onChange={handleChange} />
          <CardsList cards={cards} />
        </div>
  
    </div>)
}