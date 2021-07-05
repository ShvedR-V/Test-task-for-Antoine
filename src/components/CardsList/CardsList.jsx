import styles from './CardsList.module.scss';
import Card from '../Card'


function CardsWrapper({cards}) {

    console.log(cards);


    return (
      <ul className={styles.cardsList}>
        { cards?.map((card) =>  <Card key={card.name} card={card}></Card> )}
      </ul>
    );
  }
  export default CardsWrapper;