import styled from "styled-components";

export const ContainerHero = styled.section`
  width: 100%;
  height: 548px;

  img {
    width: inherit;
    height: inherit;

    position: absolute;
  }

  h2 {
    width: 551px;

    color: var(--white);

    position: relative;
    top: 130px;
    left: 155px;
  }
  strong {
    color: var(--orange1);
  }

  p {
    width: 349px;

    color: var(--white);

    position: relative;
    top: 146px;
    left: 155px;
  }

  button {
    padding: 14px 24px;

    background-color: var(--orange1);

    border: none;
    border-radius: 4px;

    position: relative;
    top: 178px;
    left: 155px;

    cursor: pointer;
  }

  .scroll {
    width: 140px;

    display: flex;
    align-items: baseline;
    gap: 10px;

    position: relative;
    top: 268px;
    left: 570px;
  }

  .line {
    width: 40px;
    height: 2px;
    background-color: var(--gray2);
  }

  .activate {
    height: 6px;
    background-color: var(--orange1);
  }
`;
