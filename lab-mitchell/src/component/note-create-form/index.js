import React from 'react';
import Dashboard from '../dashboard/index';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props); //super(props); is calling the constructor, so to be able to use 'this.state = {}' we need to call the constructor

    this.state = { //default state of form
      title: '',
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleAddNote(this.state);
    console.log(this.props.notes);
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

  // Lifecycle Hook
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