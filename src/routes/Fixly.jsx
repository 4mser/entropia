import styled from "styled-components";
import MovieSearch from "../components/MovieSearch";

const Fixly = ({ tema }) => {
  return (
    <Container
      tema={tema}
      style={{
        paddingTop: "5rem",
      }}
    >
      <MovieSearch></MovieSearch>
    </Container>
  );
};

export default Fixly;

const Container = styled.div`
  p {
    font-size: 1rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    padding: 0 1.2rem;
  }
  h2 {
    font-size: 1rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    padding: 0 1.2rem;
  }
`;
