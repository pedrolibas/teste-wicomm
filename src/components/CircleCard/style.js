import styled from "styled-components";

export const ContainerCircleCard = styled.li`
  width: 178px;
  height: 210px;

  cursor: pointer;

  div {
    width: inherit;
    height: 178px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--background);

    border-radius: 50%;

    img {
      width: 108px;
      height: 108px;
    }
  }

  h2 {
    text-align: center;

    margin-top: 16px;
  }
`;
