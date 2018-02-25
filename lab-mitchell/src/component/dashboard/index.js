import React from 'react';
import NoteCreateForm from '../note-create-form/index';
import NoteList from '../note-list/index';
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

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  };

  handleRemoveNote(event) {
    let id = event.target.id;

    this.setState({notes: this.state.notes.filter(note => note.id !== id)})
  }

  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote} notes={this.state.notes}/>
        <h2>List</h2>
        <NoteList handleRemoveNote={this.handleRemoveNote} notes={this.state.notes}/>
      </div>
    )
  };
};

export default Dashboard;