import React from 'react'
import CardFlexi from './CardFlexi'

const NewFeature = () => {
       return (
              <div className="newFeature">
                     <div className="container">
                            <div className="head">
                                   <p className="titleText">Fitur baru untuk Liburan lebih Aman !</p>
                                   <p className="subtitleText">Dari tiket CLEAN untuk memastikan kebersihan, sampai tiket FLEXI yang bisa dipakai sampai 1 tahun kedepan.</p>
                            </div>
                            <div className="card-tiket-flexi">
                                   <CardFlexi />
                            </div>
                     </div>
              </div>
       )
}

export default NewFeature
