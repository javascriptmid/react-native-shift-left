import 'react-native';
import React from 'react';

import AnswerResultTitle from '../AnswerResultTitle';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<AnswerResultTitle />', () => {
  it('renders CORRECTO!', () => {
    const component = renderer.create(<AnswerResultTitle isCorrect />);
    const tree = component.toJSON();
    const text = tree.children[0];
    expect(text).toBe('CORRECTO!');
    expect(tree.props.style.color).toBe('green');
  });

  it('renders FALLASTE!', () => {
    const component = renderer.create(<AnswerResultTitle isCorrect={false} />);
    const tree = component.toJSON();
    const text = tree.children[0];
    expect(text).toBe('FALLASTE!');
    expect(tree.props.style.color).toBe('red');
  });
});
