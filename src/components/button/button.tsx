import * as C from './style';


interface ButtonProps {
    name: string,
}

const Button=({name}:ButtonProps)=>{
    return(
        <C.Container>
            {name}
        </C.Container>
    );
}
export default Button;