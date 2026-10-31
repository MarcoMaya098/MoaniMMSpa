import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 4.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  h6 {
    font-size: 40px;

    @media only screen and (max-width: 414px) {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 0 2rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 640px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
