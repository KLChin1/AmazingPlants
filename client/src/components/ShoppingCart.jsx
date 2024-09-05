import React from 'react'
import { createContext } from 'react'


const ShoppingCart = (props) => {
  const { carts } = props





  return (
    <div>
      {/* {JSON.stringify(carts)} */}
      {
        carts.map((plant) => {
          return (
            <table className="table" >
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr >

                  <td>
                    <img src={plant.imageUrl} width={150} height={150} />
                  </td>
                  <td>
                    <p>Name:{plant.plantName} </p>
                  </td>
                  <td>
                    <p>Price: ${plant.price} </p>
                  </td>


                </tr>
              </tbody>
            </table>
          );
        })


      }


    </div>
  )
}

export default ShoppingCart
