import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import answerActions from '../redux/actions/answer-actions';
import questionsActions from '../redux/actions/questions-actions';
import decodeHTMLEntities from '../helpers/decodeHtml';

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
const Card = styled.div`
  border: 1px solid black;
  display: flex;
  min-height: 500px;
  margin-top: auto;
  padding: 20px;
  align-items: center;
  font-size: 24px;
  width: calc(100% - 40px);
  justify-content: center;
  flex-direction: column;
`;
const CardText = styled.p`
  text-align: center;
  margin-top: auto;
`;
const Title = styled.h1`
  margin: 0;
  text-align: center;
`;
const ButtonBlock = styled.div`
  margin-top: auto;
`;
const Button = styled.button`
  padding: 10px;
  border: 1px solid;
  background: transparent;
  margin: 10px;
  cursor: pointer;
  outline: none;
`;
const CountText = styled.p`
  margin-bottom: auto;
`;
const PASSED_KEYS = ['KeyY', 'KeyN', 'KeyF'];
const FALSE_VALUE = 'False';
const TRUE_VALUE = 'True';

class Question extends Component {
  static propTypes = {
    addAnswer: PropTypes.func.isRequired,
    fetchQuestions: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
    questionList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
    document.addEventListener('keydown', this.handleKeyAnswer, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyAnswer, false);
  }

  onClickFalse = () => this.handleAnswer(FALSE_VALUE);

  onClickTrue = () => this.handleAnswer(TRUE_VALUE);

  handleAnswer = answerValue => {
    const {
      questionList: { length },
      addAnswer,
      history,
      match: {
        params: { id },
      },
    } = this.props;
    const { question, correct_answer: correctAnswer } = this.returnCurrentQuestion();
    const answer = {
      answerValue,
      correctAnswer,
      question,
    };
    addAnswer(answer);
    if (Number(id) === length) {
      history.push('/result');
    } else {
      history.push(`/question/${Number(id) + 1}`);
    }
  };

  handleKeyAnswer = e => {
    const {
      questionList: { length },
    } = this.props;
    if (length && PASSED_KEYS.includes(e.code)) {
      const answerValue = e.code === 'KeyY' ? TRUE_VALUE : FALSE_VALUE;
      this.handleAnswer(answerValue);
    }
  };

  returnCurrentQuestion = () => {
    const {
      questionList,
      match: {
        params: { id },
      },
    } = this.props;
    return questionList[id - 1];
  };

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const currentQuestion = this.returnCurrentQuestion();
    return !currentQuestion ? (
      <Container>
        <CountText>Loading...</CountText>
      </Container>
    ) : (
      <Container>
        <Title>{currentQuestion.category}</Title>
        <Card>
          <CardText>{decodeHTMLEntities(currentQuestion.question)}</CardText>
          <ButtonBlock>
            <Button onClick={this.onClickTrue}>{TRUE_VALUE}</Button>
            <Button onClick={this.onClickFalse}>{FALSE_VALUE}</Button>
          </ButtonBlock>
        </Card>
        <CountText>{`${id} of 10`}</CountText>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  questionList: state.questions.questionList,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addAnswer: answerActions.addAnswer,
      fetchQuestions: questionsActions.fetchQuestionsRequest,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Question);
