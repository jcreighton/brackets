var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var expectJSX = require('expect-jsx');
var LogoBracket = require('./logo-bracket');

// expect.extend(expectJSX);

describe('Question', () => {

  it('should render the icon', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LogoBracket/>);
    const actual = renderer.getRenderOutput().props.children[0].props.className.includes('logo-bracket__bracket');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});