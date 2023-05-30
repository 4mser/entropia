import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  overflow: hidden;
  margin-top: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 50%;
    object-fit: cover;
    opacity: 0.7;
    filter: ${(props) => (props.tema === "dark" ? "" : "invert(1)")};
  }

  p {
    opacity: 0.4;
    font-size: 0.6rem;
    color: ${(props) => (props.tema === "light" ? "black" : "white")};
  }

  @media (min-width: 1000px) {
    margin-top: 27rem;
    margin-bottom: 1rem;
  }
`;
