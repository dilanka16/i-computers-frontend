export default function Productcard(props){

    return (
        <div>
        <h1>{props.name}</h1>
        <img src={props.image}/>
        <p>price Rs: {props.price} </p>
      </div>
    );
}