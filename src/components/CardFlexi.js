import React from 'react'
import FlexiCard1 from '../assets/card1.jpg'
import FlexiCard2 from '../assets/card2.jpg'
import FlexiCard3 from '../assets/card3.jpg'

const CardFlexi = () => {
       const CardsFlexi = ( props ) => {
              return (
                     <div className="cardFlexi">
                            <div className="listCard">
                                   <img src={props.imageFlexies} alt={props.altFlexies} />
                            </div>
                     </div>
              )
       }
       return (
              <React.Fragment>
                     <CardsFlexi imageFlexies={FlexiCard1} altFlexies="firstFlexies" />
                     <CardsFlexi imageFlexies={FlexiCard2} altFlexies="secondFlexies" />
                     <CardsFlexi imageFlexies={FlexiCard3} altFlexies="thirdFlexies" />
                     <CardsFlexi imageFlexies={FlexiCard1} altFlexies="fourthFlexies" />
              </React.Fragment>
       )
}

export default CardFlexi
