var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var expectJSX = require('expect-jsx');
var Question = require('./question');

// expect.extend(expectJSX);

describe('Question', () => {

  it('should render the icon', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Question answer='This works' />);
    const actual = renderer.getRenderOutput().props.className.includes('ob-question');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});