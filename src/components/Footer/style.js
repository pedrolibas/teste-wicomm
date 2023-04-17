import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: calc(100% - 71px - 43px);
  height: 588px;

  background-color: var(--black1);

  padding: 0 43px 0 71px;
  margin-top: 60px;

  section {
    display: flex;

    height: 500px;
  }

  .container-footer {
    display: flex;
    height: inherit;

    border-right: 1px solid var(--dark3);
  }

  .contacts {
    width: 231px;

    display: flex;

    flex-direction: column;
    align-items: center;

    .logo {
      width: inherit;
      height: 40px;

      margin-top: 62px;
    }

    h3 {
      color: var(--white);
      text-align: center;

      margin: 47px 0 16px 0;
    }

    ul {
      width: 200px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        img {
          width: 24px;
          height: 24px;

          cursor: pointer;
        }
      }
    }
  }

  .infos {
    width: 546px;

    padding: 0 40px 0 55px;

    display: flex;
    flex-wrap: wrap;
  }

  .container-infos {
    width: inherit;

    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: column;
      gap: 14px;

      margin-top: 62px;

      h2 {
        color: var(--white);
        text-transform: uppercase;

        margin-bottom: 20px;
      }

      li {
        color: var(--gray1);
        line-height: 16.8px;

        width: 160px;

        cursor: pointer;
      }
    }
  }

  .payment {
    h2 {
      color: var(--white);
      text-transform: uppercase;

      margin-bottom: 20px;
    }

    ul {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;

      width: 218px;

      li{
        img{
          cursor: pointer;
        }
      }
    }
  }

  .segurity {
    margin-left: 48px;

    h2 {
      color: var(--white);
      text-transform: uppercase;

      margin-bottom: 20px;
    }

    ul {
      display: flex;
      gap: 10px;

      li{
        img{
          cursor: pointer;
        }
      }
    }
  }

  .form-footer {
    width: 353px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: var(--white);
      text-align: center;

      width: 140px;

      margin-top: 64px;
    }

    strong {
      color: var(--orange1);
    }

    p {
      color: var(--gray1);
      text-align: center;

      margin: 16px 0 32px 0;

      width: 260px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        width: 266px;
        height: 56px;

        background-color: var(--dark1);

        border: 1px solid var(--dark3);
        border-radius: 4px;

        margin-bottom: 16px;
      }

      input::placeholder {
        font-weight: 500;
        font-size: 12px;
        color: var(--gray1);

        padding-left: 16px;
      }

      button {
        margin-top: 8px;
        width: 138px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .bottom-footer {
    height: 88px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--black1);

    border-top: 1px solid var(--dark3);

    h2{
        color: var(--white);
    }

    div{

    }
  }
`;
