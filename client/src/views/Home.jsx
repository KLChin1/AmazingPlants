import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";








const Home = (props) => {
    const {updateCart}=props


    const [plantList, setPlantList] = useState([]);
    console.log(plantList[0])
    //useEffect to automatically bring data from mealsdB
    useEffect(() => {
        axios.get("http://localhost:8000/api/plants")
            .then((serverResponse) => {
                //data test//
                console.log(serverResponse.data)
                setPlantList(serverResponse.data)

            })
            .catch(err => console.log(err));

    }, [])


 


    return (
        <div>




            <table className='table table-striped table-bordered border-black'>

                <tbody>
                    {
                        plantList.map((plant) => {
                            return (
                                <tr key={plant._id}>

                                    <td>
                                        <img src={plant.imageUrl} width={150} height={150} />
                                        <button className='btn btn-success' onClick={() => updateCart(plant)}>Add to Cart</button>

                                    </td>
                                    <td>
                                        <Link to={"/plants/" + plant._id} >{plant.plantName}</Link>
                                        <p>Hardiness Zone: {plant.hardinessZone}</p>
                                        <p>Price: ${plant.price} </p>
                                        {/* <p>Quantity: {plant.quantity} </p> */}

                                    </td>


                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Home