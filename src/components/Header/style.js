import styled from "styled-components";

export const ContainerHeader = styled.header`
  section {
    width: calc(100% - 56px - 56px);
    height: 32px;

    background-color: var(--color-gray-1);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 56px;

    div {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
      }
    }

    h2,
    h3 {
      font-size: 12px;
      font-weight: 700;
      color: var(--color-orange);
    }
    p {
      font-weight: 500;
      font-size: 10px;
      color: var(--color-gray-5);
      margin-left: 11px;
    }
  }
`;
