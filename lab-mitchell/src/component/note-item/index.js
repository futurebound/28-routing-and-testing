import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
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