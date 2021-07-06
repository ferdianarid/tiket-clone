import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import plane from '../assets/plane.png'
import hotel from '../assets/hotels.png'
import cars from '../assets/cars.png'
import ballon from '../assets/ballon.png'
import train from '../assets/train.png'
import ticket from '../assets/ticket.png'
const Feature = () => {
       const ProductBox = (props) => {
              return(
                     <div className="product-box">
                            <div className="product-list">
                                   <img src={props.images} alt={props.alt} height="56px" width="76px" />
                            </div>
                            <span className="product-label">{props.labels}</span>
                     </div>
              )
       }
       return (
              <div className="feature">
                     <div className="topFeature">
                            <div className="leftContent">
                                   <span>Hey, kamu</span>
                                         <br></br>
                                   <span class="bold-title">Mau ke mana?</span>
                            </div>
                            <div className="product-list-content">
                                   <ProductBox images={plane} alt="plane" labels="Pesawat" />
                                   <ProductBox images={hotel} alt="hotels" labels="Hotel" />
                                   <ProductBox images={ballon} alt="todos" labels="To Do" />
                                   <ProductBox images={train} alt="trains" labels="Kereta Api" />
                                   <ProductBox images={cars} alt="cars" labels="Sewa Mobil" />
                                   <ProductBox images={ticket} alt="tickets" labels="Event" />
                            </div>
                     </div>
                     <div className="product-form">
                            <div className="product-form-header">
                                   <div className="product-header-group">
                                          <div className="product-form-header-top">
                                                 <span className="product-form-logo">
                                                        <FontAwesomeIcon icon={faPlane} />
                                                 </span>
                                                 <div className="product-form-subtitle">Cari harga tiket pesawat murah & promo di sini</div>
                                          </div>
                                          <div className="product-form-last-search placeholder-container">
                                                 <span className="form-last-search-text">
                                                        Pencarian Terakhir
                                                 </span>
                                                 <span className="form-last-search-logo-container">
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                 </span>
                                          </div>
                                   </div>
                            </div>
                            <div className="product-form-bottom">
                                   <div className="product-form-flight-type">
                                          <div className="radioV3">
                                                 <input type="radio" name="flightType" id="oneway" />
                                                 <label htmlFor="oneWay">Sekali Jalan</label>
                                                 <input type="radio" name="flightType" id="twoway" />
                                                 <label htmlFor="oneWay">Pulang-Pergi</label>
                                          </div>
                                   </div>
                            </div>
                            <div className="product-form-container product-form-search-group">
                                   <div className="spaces"></div>
                                   <div className="calendars">
                                   <label htmlFor="product-search-input-label">
                                                        Dari
                                                 </label>
                                                 <div className="product-search-input-container">
                                                        <span className="product-search-logo">
                                                               <FontAwesomeIcon icon={faPlaneDeparture} />
                                                        </span>
                                                        <input type="text" class="product-search-input" id="productSearchFrom" placeholder="Kota atau bandara" autocomplete="off" value=""></input>
                                                 </div>
                                   </div>
                                   <div className="calendars">
                                          <label htmlFor="product-search-input-label">
                                                 Ke
                                          </label>
                                          <div className="product-search-input-container">
                                                 <span className="product-search-logo">
                                                        <FontAwesomeIcon icon={faPlaneArrival} />
                                                 </span>
                                                 <input type="text" class="product-search-input" id="productSearchFrom" placeholder="Mau ke mana ?" autocomplete="off" value=""></input>
                                          </div>
                                   </div>
                                   <div className="calendars">
                                          <label htmlFor="product-search-input-label">
                                                 Berangkat
                                          </label>
                                          <div className="product-search-input-container">
                                                 <span className="product-search-logo">
                                                        <FontAwesomeIcon icon={faCalendar} />
                                                 </span>
                                                 <input type="text" class="product-search-input" id="productSearchDeparture" placeholder="" value="Sen, 21 Jun 2021" readonly=""></input>
                                          </div>
                                   </div>
                                   <div className="calendars">
                                          <label htmlFor="product-search-input-label">
                                                 Pulang
                                          </label>
                                          <div className="product-search-input-container">
                                                 <span className="product-search-logo">
                                                        <FontAwesomeIcon icon={faCalendar} />
                                                 </span>
                                                 <input type="text" class="product-search-input" id="productSearchDeparture" placeholder="" value="Sen, 21 Jun 2021" readonly=""></input>
                                          </div>
                                   </div>
                                   <div className="calendars">
                                          <label htmlFor="product-search-input-label">
                                                 Penumpang & Kelas Kabin
                                          </label>
                                          <div className="product-search-input-container">
                                                 <span className="kabin">1 Penumpang, Ekonomi</span>
                                          </div>
                                   </div>
                            </div>
                            <div className="product-form-button-group">
                                   <div className="flight-notes-component">
                                          <div className="checkV3">
                                                 <input id="widget-flight-notes" type="checkbox"></input>
                                                 <label htmlFor="widget-flight-notes">
                                                        Tampilkan tiket FLEXI
                                                 </label>
                                                 <p>Tiket fleksibel yang bebas di-reschedule. <span>Lihat detail.</span></p>
                                          </div>
                                   </div>
                                   <div className="buttonflight">
                                          <button className="flightButton">CARI PENERBANGAN</button>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
export default Feature
