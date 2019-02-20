import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import answerActions from '../redux/actions/answer-actions';
import questionsActions from '../redux/actions/questions-actions';
import decodeHTMLEntities from '../helpers/decodeHtml';

const mapStateToProps = state => ({
  answerList: state.answers.answerList,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetAnswer: answerActions.resetAnswer,
      fetchQuestions: questionsActions.fetchQuestionsRequest,
    },
    dispatch,
  );

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
    min-height: calc(100vh - 70px);
    padding: 20px;
    
`;
const AnswerIncorrect = styled.p`
  color: #ef3a3e;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px 0;
  text-align: left;
  width: 100%;
`;
const AnswerCorrect = styled.p`
    color: #118e11;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 10px 0
    text-align: left;
    width: 100%;
`;
const ScoreBlock = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  margin: 0;
`;
const StyledLink = styled(Link)`
  margin: 0;
  text-align: center;
  font-size: 38px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
`;

class Result extends Component {
  static propTypes = {
    resetAnswer: PropTypes.func.isRequired,
    fetchQuestions: PropTypes.func.isRequired,
    answerList: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentWillUnmount() {
    const { resetAnswer, fetchQuestions } = this.props;
    resetAnswer();
    fetchQuestions();
  }

  renderAnswer = (answer, index) => {
    if (answer.answerValue === answer.correctAnswer) {
      return <AnswerCorrect key={index}>{`+ ${decodeHTMLEntities(answer.question)}`}</AnswerCorrect>;
    }
    return <AnswerIncorrect key={index}>{`- ${decodeHTMLEntities(answer.question)}`}</AnswerIncorrect>;
  };

  renderScore = () => {
    const { answerList } = this.props;
    const correctAnswers = answerList.filter(item => item.answerValue === item.correctAnswer);
    return (
      <ScoreBlock>
        <Title>You scored</Title>
        <Title>{`${correctAnswers.length}/${answerList.length}`}</Title>
      </ScoreBlock>
    );
  };

  render() {
    const { answerList } = this.props;
    return (
      <Container>
        {this.renderScore()}
        {answerList.length ? answerList.map(this.renderAnswer) : <p>Upps</p>}
        <StyledLink to="/">PLAY AGAIN?</StyledLink>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);
