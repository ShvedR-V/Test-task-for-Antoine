import styles from './CardsList.module.scss'


function CardsWrapper({cards}) {

    console.log(cards);

   
  
    return (
      <div className={styles.cardsList}>
        { 
          cards?.map((card, index) => {
            // const cardExpertsName = card.experts[0].firstName + card.experts[0].lastName;
            // const domen = card.image.uri.match(IMAGE_REG_EXP)[0]
            // const cardImage = domen + `resize/${342}x/` + card.image.uri.slice(domen.length);
  
            return <li key={index}></li> 
              
            //   cardImage={cardImage}
            //   cardCategory={card.categories[0].name}
            //   cardName={card.name} 
            //   expertName={cardExpertsName}
            //   expertTitle={card.experts[0].title}
            //   expertCompany={card.experts[0].company}
            // />
          })
        }
      </div>
    );
  }
  export default CardsWrapper;