import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import { history } from './redux';
import questionsActions from './redux/actions/questions-actions';
import Home from './views/Home';
import Question from './views/Question';
import Result from './views/Result';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuestions: questionsActions.fetchQuestionsRequest,
    },
    dispatch,
  );

class App extends Component {
  static propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question/:id" component={Question} />
          <Route path="/result" component={Result} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
