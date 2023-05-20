import styled from "styled-components";

styled;

const ProporcionAurea = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://i2.wp.com/tuplanetavital.org/wp-content/uploads/2014/12/2-proporcion-aurea.jpgm"
        alt=""
        className="bannerImg"
      />
      <p>Proporción Aurea</p>
      <br />
    </Container>
  );
};

export default ProporcionAurea;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 6rem 1.2rem;

  .bannerImg {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;
