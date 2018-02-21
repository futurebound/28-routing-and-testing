import React from 'react';
import NoteCreateForm from '../note-create-form/index';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    };
  };

  handleAddNote(note) {
    note.createdOn = new Date();
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;
    note.content = '';
    note.title = '';
    console.log('note', note);

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  };

  handleRemoveNote(id) {
    let newState = this.state.notes.slice();
    if(newState.indexOf(note.id) > -1) {
      newState.splice(newState.indexOf(note.id), 1);

      this.setState({notes: newState})
    }
  }

  // change the <ul> to be <NoteList /> instead of the ul, and add the ul to that componenet
  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <ul>
          {
            this.state.notes.map((note, index) =>
              <li key={index}>{note.name}:${note.price}</li>
            )
          }
        </ul>
      </div>
    )
  };
};

export default Dashboard;