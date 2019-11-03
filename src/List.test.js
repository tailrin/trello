import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

it('renders without crashing', () => {
    
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="This was left blank" cards={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });