import { ContainerListProducts } from "./style"
import arrowRight from "../../assets/ArrowRight.svg"
import arrowLeft from "../../assets/ArrowLeft.svg"

export const ListProducts = ({children}) => {
    return (
        <ContainerListProducts>
            <button className="left"><img src={arrowLeft} alt="" /></button>
            {children}
            <button className="right"><img src={arrowRight} alt="" /></button>
        </ContainerListProducts>
    )
}