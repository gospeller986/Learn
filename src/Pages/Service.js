import React from 'react'
import web from '../images/img2.webp'
import './Home.css'
import web1 from '../images/img1.webp'
import web3 from '../images/img3.webp'

function Service() {
  return (
    <div>
                      <div className='text' >
                  <h1>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                         <div className='col-md-4 col-10 mx-auto'>
                            <div class="card" >
                                <img class="card-img-top" src={web1} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                            <div class="card" >
                                <img class="card-img-top" src={web3} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                            <div class="card" >
                                <img class="card-img-top" src={web} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                            <div class="card" >
                                <img class="card-img-top" src={web1}alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                            <div class="card" >
                                <img class="card-img-top" src={web3} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                            <div class="card" >
                                <img class="card-img-top" src={web} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default Service