import styled from "styled-components";

export const ContainerListProducts = styled.ul`
  width: calc(100% - 56px - 56px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding: 0 56px;

  button {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 4px;

    background-color: var(--gray2);

    cursor: pointer;

    position: absolute;
  }

  .right {
    right: 40px;
  }

  .left {
    left: 40px;
  }
`;
