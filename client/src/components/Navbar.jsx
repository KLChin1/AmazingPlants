import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'



const Navbar = (props) => {
    const [zip, setZip] = useState()
    const [zone, setZone] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(zip)//test submit



        axios.get(`https://phzmapi.org/${zip}.json`)
            .then(res => {
                console.log(res.data.zone);
                setZone(res.data.zone)


            })
            .catch(err => console.log(err));
        ;

    }







    return (
        <div className='banner'>

            <div className="container d-flex flex-row justify-content-between" id="banner">
                <div className="col-4 ">

                    <br>
                    </br>
                    <br>
                    </br>
                    <h1 className=" text-start text-primary">Amazing Plants</h1>
                    <Link style={{ height: '35px' }} className='btn btn-success' to={"/plants/"} >Home</Link> |
                    <Link style={{ height: '35px' }} className='btn btn-success' to={"/plants/cart"} >Cart</Link>



                </div>
                <div className="col-4">
                    <h2>Hardiness Zone Finder</h2>
                    <form onSubmit={handleSubmit} className='inputContainer'>
                        <label className='input'> Enter Your Zip Code to Find Your Growing Zone: </label>
                        <input type='text' placeholder='Zip Code' className='input' onChange={e => setZip(e.target.value)} />
                        <button id='submitButton' className='input'>Submit</button>

                    </form>
                    <div id='resultsContainer'>
                        {zone != "" ? <p>Zone: {zone}</p> : ""}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
