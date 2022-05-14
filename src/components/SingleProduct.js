import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

export default function SingleProduct({value}) {


  const {state: {cart}, dispatch} = CartState()
  // console.log(cart)
  // console.log(dispatch)


  return (
    <div className='products'>
      <Card>
        <Card.Img variant="top" src={value.image} alt={value.name} className="BeerListItem-img"/>
        <Card.Body>
          <Card.Title> {value.name} </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
             <span>Price: ₹ {value.price}</span>          
          </Card.Subtitle>

          <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>Year: {value.year}</span>
          </Card.Subtitle>


          <Card.Subtitle style={{ paddingBottom: 10 }}>
              <Rating rating={value.ratings} />
          </Card.Subtitle>
        {
          cart.some(p => p.id === value.id)?           
          
          (<Button 

            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: value,
              })

            }}
            variant='danger'>Remove From Cart</Button>):
          
          ( <Button 
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: value,

              });

            }}

          
          disabled={!value.inStock}  variant='success'>
          {!value.inStock ? "Out of Stock": "Add to Cart"}
          </Button>)
        }
        
       
    </Card.Body>

      </Card>
      </div>
  )
};
