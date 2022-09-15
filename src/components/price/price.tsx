import { priceMock } from '../mock/priceMock';
import PriceCards from '../priceCards/priceCards';
import * as C from './style';

const Price=()=>{
    return(
        <C.MainContainer>
            <div className="title">
                <h2>PRICE</h2>
                <span>PRICING TABLE</span>
            </div>
            <C.Container>
                {priceMock.map((item,key)=>(
                    <PriceCards key={key} name={item.name} price={item.price}></PriceCards>
                ))}
            </C.Container>
        </C.MainContainer>
    )
}
export default Price;