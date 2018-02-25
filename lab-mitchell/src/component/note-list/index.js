import React from 'react';
import Dashboard from '../dashboard/index';
import NoteItem from '../note-item/index';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
        <ul>
          <NoteItem handleRemoveNote={this.props.handleRemoveNote} notes={this.props.notes}/>
        </ul>
    )
  };
};

export default NoteList;