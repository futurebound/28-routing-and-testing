import React from 'react';
import Dashboard from '../dashboard/index';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleAddNote(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input 
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default NoteCreateForm;