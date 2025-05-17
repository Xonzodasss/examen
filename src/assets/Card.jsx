import  './card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.odam.img}alt="" /> <br />
        <button>Add to cart</button> <br />
        <h2>{props.odam.name}</h2>
        <p>narxi: {props.odam.price}</p>
        <span>rating: {props.odam.reting}</span>
    </div>
  )
}

export default Card
