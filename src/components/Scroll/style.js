import styled from "styled-components";

export const ContainerScroll = styled.div`
  width: 140px;

  display: flex;
  align-items: baseline;
  gap: 10px;
  
  .line {
    width: 40px;
    height: 2px;
    background-color: var(--gray2);

    cursor: pointer;
  }

  .activate {
    height: 6px;
    background-color: var(--orange1);
  }
`;
