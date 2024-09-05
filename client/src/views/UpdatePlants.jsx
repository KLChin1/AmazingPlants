import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdatePlants = (props) => {
    const [plant, setPlant] = useState(null);
    const [plantName, setPlantName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [hardinessZone, setHardinessZone] = useState("");
    const [pollination, setPollination] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();



    useEffect(() => {
        axios.get("http://localhost:8000/api/plants/" + id)
            .then(res => {
                //console.log(res.data)
                setPlantName(res.data.plantName);
                setImageUrl(res.data.imageUrl);
                setPrice(res.data.price);
                setQuantity(res.data.quantity);
                setHardinessZone(res.data.hardinessZone);
                setPollination(res.data.pollination);
                setPlant(res.data);



            })
            .catch(err => console.log(err));
    }, [id])



    const updatePlant = (e) => {
        e.preventDefault();
        // console.log("test submit")//test submit

        const tempObjToServer = {
            plantName,
            imageUrl,
            price,
            quantity,
            hardinessZone,
            pollination

        };

        axios.put("http://localhost:8000/api/plants/" + id, tempObjToServer)
            .then(serverRes => {
                console.log(serverRes.data)
                navigate("/plants")
            })
            .catch(err => {
                //console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });

    };

    const remove = (idToDelete) => {
        console.log(idToDelete);
        axios.delete("http://localhost:8000/api/plants/" + idToDelete)
            .then(res => {
                console.log(res.data)
                navigate("/plants")
            })
            .catch(err => console.log(err));

    };






    return (
        <div>
            <form onSubmit={updatePlant} >
                <div className="">
                    <div className='col1'>
                        <div>
                            Plant Name<br></br>
                            <input value={plantName} onChange={e => setPlantName(e.target.value)} />
                            {errors.plantName && <p className='text-danger'>{errors.plantName.message}</p>}
                        </div>
                        <div>
                            Image Url<br></br>
                            <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                            {errors.imageUrl && <p className='text-danger'>{errors.imageUrl.message}</p>}
                        </div>
                        <div>
                            Price<br></br>
                            <input type='number' value={price} onChange={e => setPrice(e.target.value)} />
                            {errors.price && <p className='text-danger'>{errors.price.message}</p>}
                        </div>
                        <div>
                            Quantity<br></br>
                            <input type='number' value={quantity} onChange={e => setQuantity(e.target.value)} />
                            {errors.quantity && <p className='text-danger'>{errors.quantity.message}</p>}
                        </div>
                        <div>
                            Hardiness Zone<br></br>
                            <input value={hardinessZone} onChange={e => setHardinessZone(e.target.value)} />
                            {errors.hardinessZone && <p className='text-danger'>{errors.hardinessZone.message}</p>}<br></br><br></br>

                        </div>
                        <div>
                            Pollination requirement<br></br>
                            <input value={pollination} onChange={e => setPollination(e.target.value)} />
                            {errors.pollination && <p className='text-danger'>{errors.pollination.message}</p>}<br></br><br></br>
                            <button className='btn btn-primary'>✏️ Update</button>
                        </div>
                        <button className="btn btn-danger" onClick={() => remove(plant._id)}> ❌  Delete </button>

                    </div>

                </div>

            </form>
        </div>
    )
}

export default UpdatePlants
