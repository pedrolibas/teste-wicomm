import styled from "styled-components";

export const ContainerHeader = styled.header`
  section {
    width: calc(100% - 56px - 56px);
    height: 32px;

    background-color: var(--dark1);

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
      color: var(--orange1);
    }
    p {
      color: var(--gray2);
      margin-left: 11px;
    }
  }

  nav {
    width: calc(100% - 48px - 56px);
    height: 72px;

    background-color: var(--black1);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 48px 0 56px;

    .logo {
      height: 32px;
      width: 166px;
    }

    ul {
      height: inherit;

      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        color: var(--gray1);

        padding: 0 14px;
      }
    }

    form {
      width: 200px;
      height: 40px;

      background-color: var(--dark1);

      border: 1px solid var(--dark3);
      border-radius: 4px;

      display: flex;
      align-items: center;

      input {
        height: 37px;

        background-color: var(--dark1);

        border: none;

        outline: 0;
      }

      input::placeholder {
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--gray1);
        font-family: "Barlow", sans-serif;

        padding-left: 16px;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;

      img {
      }
    }
  }
`;
