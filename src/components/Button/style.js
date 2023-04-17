import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 14px 24px;

  background-color: var(--orange1);

  border: none;
  border-radius: 4px;

  color: var(--black1);

  cursor: pointer;

  &:hover{
    transition: 1ms;

    background-color: var(--orange2);
  }
`;
