import React from 'react';
import Dashboard from '../dashboard/index';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props); //super(props); is calling the constructor, so to be able to use 'this.state = {}' we need to call the constructor

    this.state = { //default state of form
      title: '',
      content: '',
    };

    // BINDING HANDLERS -- so we don't have to do the line 16 part again and again for each. kinda a lot tho.
    let memberFunctions = Object.getOwnPropertyNames(NoteCreateForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  // Member Function
  handleSubmit(event) {
    event.preventDefault();

    this.props.handleAddNote(this.state);
    console.log(this.props.notes);
    // CLEARING THE FORM AFTER ADD
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