import { ContainerListProducts } from "./style"
import arrowRight from "../../assets/icons/ArrowRight.svg"
import arrowLeft from "../../assets/icons/ArrowLeft.svg"

export const ListProducts = ({children}) => {
    return (
        <ContainerListProducts>
            <button className="button-list left"><img src={arrowLeft} alt="" /></button>
            {children}
            <button className="button-list right"><img src={arrowRight} alt="" /></button>
        </ContainerListProducts>
    )
}