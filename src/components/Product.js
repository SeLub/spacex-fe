import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from '../assets/MGorDUi.png'
import React from 'react'

function Product() {
  return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

<div className="card p-3">
        
        <div className="d-flex justify-content-between align-items-center ">
            <div className="mt-2">
                <h4 className="text-uppercase">Ikea</h4>
                <div className="mt-5">
                    <h5 className="text-uppercase mb-0">Blanda Matt</h5>
                    <h1 className="main-heading mt-0">VASE</h1>
                    <div className="d-flex flex-row user-ratings">
                        <div className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div>
                        <h6 className="text-muted ml-1">4/5</h6>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={Image} width="200" />
            </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
            <span>Available colors</span>
            <div className="colors">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
        </div>
        
        
        <p>A great option weather you are at office or at home. </p>
        
        <button className="btn btn-danger">Add to cart</button>
    </div>

  )
}

export default Product