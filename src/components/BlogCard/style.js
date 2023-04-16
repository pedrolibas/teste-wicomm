import styled from "styled-components";

export const ContainerBlogCard = styled.li`
width: 376px;
height: 380px;

background-color: var(--dark1);

border: 1px solid var(--dark3);

img{
   width: inherit;
   height: 200px;

   margin-bottom: 15px;
}

div{
    width: calc(100% - 32px - 24px);

    padding: 0 32px 0 24px;
    

    span{
        color: var(--gray2);
    }

    h3{
        color: var(--white);
        text-transform: uppercase;
        margin: 16px 0 24px 0;
    }

    button{
      height: 40px;
      width: 138px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
}
`