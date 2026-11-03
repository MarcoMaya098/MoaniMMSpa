import styled from "styled-components";

export const ScrollUpContainer = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 100px;
  right: 34px;
  width: 40px;
  height: 40px;
  background: rgb(241, 242, 243);  color: white;
  border-radius: 50%;
  display: flex;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transform: translateY(${({ show }) => (show ? "0" : "12px")});
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;

  &:hover {
    background: rgb(224, 224, 224);
  }

  @media (max-width: 768px) {
    right: 26px;
    bottom: 84px;
    width: 35px;
    height: 35px;
  }
`;
