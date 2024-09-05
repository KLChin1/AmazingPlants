import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

const ShowOne = (props) => {

    const [plant, setPlant] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/plants/" + id)
            .then(res => {
                console.log(res.data);
                setPlant(res.data);
            })
            .catch(err => console.log(err));
    }, []);






    return (
        <div>
           
                
<h1>Plant Details</h1>
<hr/>
            {
                plant ? (
                    <>
                        
            <div>
                <h1>{plant.plantName}</h1>
                <img src={plant.imageUrl} alt={plant.plantName} width={250} />
                <h3>Price ${plant.price}</h3>
                <h3>Quantity {plant.quantity}</h3>
                <h3>Hardiness Zone: {plant.hardinessZone}</h3>
                <h3>Pollination Requirement: {plant.pollination}</h3>
                
            </div>
                <Link className='btn btn-outline-dark' to={"/plants/" + plant._id + "/update"} >Edit Plant Details</Link>
            </>
                ) : "Loading......"

            }
        </div>
    )
}

export default ShowOne
