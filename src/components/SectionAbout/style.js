import styled from "styled-components";

export const ContainerSectionAbout = styled.section`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 0 auto;

    position: absolute;

    top: 64px;
  }

  h3 {
    color: var(--dark1);
    text-align: center;

    position: absolute;

    top: 160px;
  }

  p {
    color: var(--dark3);
    text-align: center;

    width: 643px;

    position: relative;
    
    top: 222px;
  }
`;
