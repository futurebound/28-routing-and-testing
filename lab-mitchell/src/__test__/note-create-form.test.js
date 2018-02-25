import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });

import NoteCreateForm from '../component/note-create-form/index';

describe('#note-create-form', function () {
  describe('testing initial state', () => {
    test('initial state, form title', () => {
      let mountedNoteCreateForm = Enzyme.mount(<NoteCreateForm />);
      expect(mountedNoteCreateForm.state('title')).toEqual(''); 
    });
    test('initial state, form content', () => {
      let mountedNoteCreateForm = Enzyme.mount(<NoteCreateForm />);
      expect(mountedNoteCreateForm.state('content')).toEqual(''); 
    });
  });
})