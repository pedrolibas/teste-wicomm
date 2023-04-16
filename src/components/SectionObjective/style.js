import styled from "styled-components";

export const ContainerSectionObjective = styled.section`
  h2 {
    color: var(--dark1);
    text-align: center;

    margin: 64px 0 24px 0;
  }
  ul {
    width: calc(100% - 56px - 56px);

    padding: 0 56px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      width: 277px;
      height: 340px;

      position: relative;

      img {
        width: inherit;
        height: inherit;
      }

      div {
        width: 212px;
        height: 40px;

        background-color: var(--orange1);

        position: absolute;
        left: 0;
        bottom: 0;

        display: flex;
        align-items: center;

        h3 {
          font-style: italic;

          margin-left: 16px;
        }
      }
    }
  }
`;
