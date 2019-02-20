import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 5px 5px 24px #D3D3D3;
    background: #D3D3D3
    max-width: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    height: calc(100vh - 70px);
    padding: 20px;
`;
const Title = styled.h1`
  margin: 0;
  text-align: center;
`;
const Text = styled.p`
  margin: 0;
  text-align: center;
  font-size: 38px;
  font-weight: 500;
`;
const StyledLink = styled(Link)`
  margin: 0;
  text-align: center;
  font-size: 38px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
`;

function Home() {
  return (
    <Container>
      <Title>
        Welcome to the
        <br />
        Trivia Challenge!
      </Title>
      <Text>
        You will be presented
        <br />
        with 10 True or False
        <br />
        questions.
      </Text>
      <Text>Can you score 100%?</Text>
      <StyledLink to="/question/1">BEGIN</StyledLink>
    </Container>
  );
}

export default Home;
