import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ShowAddButton from './ShowAddButton';
import QuestionForm from './QuestionForm';
import _ from 'lodash';

export default class QuestionApp extends Component {
  constructor(props){
    super(props);
    var questions = [{
      key:1,
      title:'What is React?',
      description:'React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.',
      voteCount: 15,
    },
    {
      key:2,
      title:'What happens during the lifecycle of a React component?',
      description:'Initialization,State/Property Updates,Destruction',
      voteCount: 17,
    },
  ];
    this.state = {
      questions: questions,
      formDisplayed: false,
    }

    this.onToggleForm = this.onToggleForm.bind(this);
    this.onNewQuestion = this.onNewQuestion.bind(this);
    this.sortQuestion = this.sortQuestion.bind(this);
    this.onVote = this.onVote.bind(this);
  }
  //open/close form
  onToggleForm() {
    this.setState({
      formDisplayed: !this.state.formDisplayed,
    })
  }

  // add new question
  onNewQuestion() {
    newQuestion.key = this.state.questions.length + 1;

		var newQuestions = this.state.questions.concat( newQuestion );

		newQuestions = this.sortQuestion( newQuestions );

		this.setState({
			questions: newQuestions,
		})
  }

  sortQuestion(questions) {
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});
		return questions;
	}

  onVote(key,newCount) {
    var questions = _.uniq( this.state.questions );
		var index = _.findIndex( questions, function(qst){
			return qst.key == key;
		} )

		questions[index].voteCount = newCount;

		questions = this.sortQuestion(questions);

		this.setState({
			questions: questions
		})
  }

	render() {
		return (
      <div>
        <div className="jumbotron text-center">
  			    <div className="container">
  			      <h1>React Question</h1>
  			      <ShowAddButton onToggleForm={this.onToggleForm} />
  			    </div>

            <div className="main container">
              <QuestionForm
                onNewQuestion={this.onNewQuestion}
                onToggleForm={this.onToggleForm}
                formDisplayed={this.state.formDisplayed}
              />
            </div>
  			</div>
      </div>
		)
	}
}
