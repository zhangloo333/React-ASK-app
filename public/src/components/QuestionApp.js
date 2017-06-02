import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import ShowAddButton from './ShowAddButton';
// import QuestionForm from './QuestionForm';
// import QuestionList from './QuestionList';
import _ from 'lodash';

export default class QuestionApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <h1>React 问答</h1>
{
  //  <ShowAddButton onToggleForm={this.onToggleForm} />
}
          </div>
        </div>
      </div>
    )
  }
}
