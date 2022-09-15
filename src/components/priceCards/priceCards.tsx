import * as C from './style';

interface cardProps{
    name:string;
    price:number;
    color:string;
}

const PriceCards=({name,price,color}:cardProps)=>{
    return(
        <C.Container color={color}>
            <span>{name}</span>
            <h2>$ {price}</h2>
            <small>/ MONTH</small>
            <div>
                <p>Tracking Issues</p>
                <div></div>
                <p>Add bugs through email</p>
                <div></div>
                <p>Notifications</p>
                <div></div>
                <p>Time Tracking</p>
                <div></div>
                <p>Custom News</p>
                <button>CHOOSE</button>
            </div>
        </C.Container>
    )
}
export default PriceCards;