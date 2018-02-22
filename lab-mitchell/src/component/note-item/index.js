import React from 'react';
import Dashboard from '../dashboard/index'

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  };

  handleOnClick(event) {
    // event.preventDefault();
    this.props.handleRemoveNote(event);
    console.log(event.target.id);
  }

  render() {
    return (
      <div>
        {
          this.props.notes.map((note, index) =>
            <li key={index}>
              <p>Title: {note.title}</p>
              <p>Content: {note.content}</p>
              <button id={this.props.notes.note.id} onClick={this.handleOnClick}>Delete</button>
            </li>
          )
        }
      </div>
    );
  };
};

export default NoteItem;