import React, {Component} from 'react';

export default class ShowAddButton extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">Add Question</button>
    )
  }
}
