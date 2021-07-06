import React from 'react'
import featuredImages from '../assets/simple-profile.png'
import featuredImages2 from '../assets/simple-reschedule.png'
import featuredImages3 from '../assets/easy-ticket.png'
import featuredImages4 from '../assets/simple-refund.png'

const MainFeature = () => {

       const ListFeature = (props) => {
              return(
                     <div className="list-feature">
                            <div className="featured-images">
                                   <img src={props.featuredImages} alt={props.descImages} />
                            </div>
                            <div className="feature-info">
                                   <h3 className="title">{props.title}</h3>
                                   <p className="subtitle">{props.subtitle}</p>
                            </div>
                     </div>
              )
       }
       return (
              <div className="main-feature">
                     <div className="container">
                            <ListFeature featuredImages={featuredImages} descImages="simpleprofile" title="Simple Profile" subtitle="Pesan lebih cepat, isi data penumpang dengan sekali klik." />
                            <ListFeature featuredImages={featuredImages2} descImages="Simple Reschedule" title="Simple Reschedule" subtitle="Memudahkan kamu mengatur ulang penerbangan." />
                     </div>
                     <div className="container">
                            <ListFeature featuredImages={featuredImages3} descImages="Simple Booking" title="Simple Booking Process" subtitle="Pemesanan tanpa ribet dimanapun dan kapan pun." />
                            <ListFeature featuredImages={featuredImages4} descImages="simple refund" title="Simple Refund" subtitle="Refund tiket tanpa ribet dari aplikasi maupun website." />
                     </div>
              </div>
       )
}

export default MainFeature
