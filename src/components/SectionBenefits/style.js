import styled from "styled-components";

export const ContainerSectionBenefits = styled.section`
  width: calc(100% - 155px - 155px);

  padding: 0 155px;
  margin-top: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 475px;
    height: 280px;

    background: linear-gradient(
      231.8deg,
      var(--gray1) -17.86%,
      var(--black1) 73%
    );

    position: relative;

    h2 {
      color: var(--white);
      font-style: italic;

      margin: 40px 0 24px 40px;

      width: 259px;

      line-height: 47px;
    }
    strong {
      color: var(--orange1);
    }

    button {
      margin-left: 40px;
    }

    img {
      position: absolute;

      right: 20px;
      bottom: 20px;
    }
  }
`;
