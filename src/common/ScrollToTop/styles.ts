import styled from "styled-components";

export const ScrollUpContainer = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 40px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: rgb(241, 242, 243);  color: white;
  border-radius: 50%;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease;

  &:hover {
    background: rgb(224, 224, 224);
  }

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    width: 35px;
    height: 35px;
  }
`;
