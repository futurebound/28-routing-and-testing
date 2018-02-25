import React from 'react';

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
    this.props.handleRemoveNote(event);
  }

  render() {
    return (
      <div>
        {
          this.props.notes.map((note, index) =>
            <li key={index}>
              <p>Title: {note.title}</p>
              <p>Content: {note.content}</p>
              <button id={note.id} onClick={this.handleOnClick}>Delete</button>
            </li>
          )
        }
      </div>
    );
  };
};

export default NoteItem;