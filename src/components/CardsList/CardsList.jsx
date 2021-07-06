import styles from './CardsList.module.scss';
import Card from '../Card'


export default function CardsList({cards, loading}) {

  if(loading) {
    return (
      <div className={styles.spinnerContainer}>
        {/**/}
      </div>
    );
  }




    return (
      <ul className={styles.cardsList}>
        { cards?.map((card) =>  <Card key={card.name} card={card}></Card> )}
      </ul>
    );
  }