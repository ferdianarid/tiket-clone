import React from 'react'
import '../main.css'
import logos from '../assets/logo.png'

const Navbar = () => {
       return (
              <div className="Navbar">
                     {/* Corona Notification */}
                     <div className="corona">
                            <p>Cek info terbaru tentang &nbsp; 
                                   <a href="https://www.tiket.com/info/tiket-clean" target="_blank">tiket CLEAN</a>&nbsp; dan <a href="https://www.tiket.com/info/tiket-safe" target="_blank">kebijakan pemesanan &amp; perjalanan</a> selama COVID-19.</p>
                     </div>
                     <div className="offer">
                            <p>Daftarkan Hotel Anda</p>
                            <p>Daftarkan Aktivitas/Event Anda</p>
                            <p>Promo</p>
                            <p>Pusat Bantuan</p>
                     </div>
                     <div className="topBanner">
                            <div className="left-side">
                                   <img src={logos}  alt="logo" />
                            </div>
                            <div className="center-side">
                                   <div className="product-list">
                                          <div className="product-link">
                                                 <a href="#">Tiket Pesawat</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="#">Hotel</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="#">To Do</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="#">Tiket Kereta Api</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="#">Sewa Mobil</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="#">Event</a>
                                          </div>
                                   </div>
                            </div>
                            <div className="right-side">
                                   <div className="product-list">
                                          <div className="product-link">
                                                 <a href="">Elite Rewards</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="">Cek Order</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="">Login</a>
                                          </div>
                                          <div className="product-link">
                                                 <a href="" className="register">Daftar</a>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Navbar
