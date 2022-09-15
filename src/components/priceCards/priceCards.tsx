import * as C from './style';

interface cardProps{
    name:string;
    price:number;
}

const PriceCards=({name,price}:cardProps)=>{
    return(
        <C.Container>
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