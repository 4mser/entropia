import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 6rem 1.2rem;

  .banner-img {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    text-align: justify;
  }

  h2 {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  .img-content {
    width: 100%;
  }

  .img-autor {
    height: 100%;
  }

  @media (min-width: 1000px) {
    padding: 6rem 15vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .banner-img {
      width: 40%;
    }

    p {
      text-align: justify;
      font-size: 1.2rem;
    }
  }
`;
