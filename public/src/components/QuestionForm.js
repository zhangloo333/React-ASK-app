import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class QuestionForm extends Component{
  constructor(props) {
    super(props);

  }

  render() {
    var styleObject = {
      display: this.props.formDisplayed ? 'block': 'none',
    }

    return(
      <form ref="addQuestionForm" style={ styleObj } name="addQuestion" className="clearfix" onSubmit={this.handleForm}>
			  <div className="form-group">
			    <label htmlFor="qtitle">问题</label>
			    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
			  </div>
			  <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
			  <button className="btn btn-success pull-right">确认</button>
			  <a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
			</form>
    )
  }
}
