import styled from "styled-components";

export const ContainerProductCard = styled.li`
    width: 277px;
    height: 341px;

    border: 1px solid var(--background);
    border-radius: 4px;

    div{
        width: inherit;
        height: 197px;

        display: flex;
        align-items: flex-end;
        justify-content: center;

        position: relative;
        .img-product{
            width: 165px;
            height: 165px;

        }

        .icon{
            position: absolute;
        }

        .star{
            top: 22px;
            right: 18px;
        }

        .cart{
            top: 62px;
            right: 18px;
        }
    }

    h3{
        width: 182px;

        color: var(--black1);

        margin-top: 24px;
    }

    h4{
        color: var(--orange1);
        margin-top: 16px;
    }

    span{
        color: var(--dark3);
        margin-top: 4px;
    }
    
    h3, h4, span{
        padding-left: 24px;
    }

`