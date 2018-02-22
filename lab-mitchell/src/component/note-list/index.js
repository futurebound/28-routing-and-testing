import React from 'react';
import Dashboard from '../dashboard/index';
import NoteItem from '../note-item/index';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  };

  // change the <ul> to be <NoteList /> instead of the ul, and add the ul to that componenet
  render() {
    return (
        <ul>
          <NoteItem handleRemoveNote={this.props.handleRemoveNote} notes={this.props.notes}/>
        </ul>
    )
  };
};

export default NoteList;