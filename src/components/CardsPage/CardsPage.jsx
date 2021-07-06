import {useEffect, useState}from  "react" ;
import { useLazyQuery } from "@apollo/client";
import useDebounce from '../../helpers/useDebounce'

import FILTER_CARDS from '../../graphql/query/cards'

import Title from '../Title';
import Form from '../Form';
import CardsList from '../CardsList'

import styles from './CardsPage.module.scss';

export default function CardsPage (){
    const [query, setQuery] = useState('');

    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState(null);
    const [error, setError] = useState(null);
      
    const [setFilter, receivedData ] = useLazyQuery(FILTER_CARDS);

    const debouncedSearchTerm = useDebounce(query, 300);

    

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
            limit: 10,
            keywords:debouncedSearchTerm,
            types: ["PODCAST"],
          },
        },
      });
    
    
  },[debouncedSearchTerm]);


  const handleChange = (e) => setQuery(e.target.value)

    return (
    <section className={styles.wrapper}>
       <div className={styles.container}>
          <Title text="Search" />
          <Form value={query} onChange={handleChange} />
          <CardsList cards={cards} loading={loading} />
        </div>
    </section>)
}