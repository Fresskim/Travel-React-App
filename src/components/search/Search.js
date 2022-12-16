import React from 'react'
import './SearchStyles.css'

import Itinerary from '../../assets/itinerary.png'

function Search() {
    return (
        <div name='book' id='search' className='search'>
            <div className="container">
                <div className="left">
                <h2> TRAVEL ITINERARIES</h2>
                <p>We know that deciding what to include on your travel itinerary can be overwhelming. We wanted to make things easier for you when planning your trip so we put together these itineraries from popular cities and countries around the globe. Each one of these has been tried and tested and will allow you to see the most things in your allotted time.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Itinerary} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                            <h3>THE MOST POPULAR DESTINATIONS</h3>
                            <p>Travel Smarter With These Sample Itineraries From The Most  Popular Destinations Around The World. </p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                            <h3>WE'VE GOT YOU COVERED</h3>
                            <p>Wether its Europe, North America or Asia, we got every thing planned for your next trip.  </p>
                            <button>View Itineraries</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                    <h4 className='save'>GET UP TO 15%  OFF! </h4>
                    <p className='timer'>WHEN USING MY COUPON CODE</p>
                    <p className='offers'>VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                            <option value="1">Egypt</option>
                                <option value="1">Mauritius</option>
                                <option value="1">Istanbul</option>
                                <option value="1">Venice</option>
                                <option value="1">Prague</option>
                                <option value="1">Rome</option>
                                <option value="1">Paris</option>
                                <option value="1">Annecy</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search