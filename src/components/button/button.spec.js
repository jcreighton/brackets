var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var expectJSX = require('expect-jsx');
var Button = require('./button');

// expect.extend(expectJSX);

describe('button', function () {
  it('renders without problems', function () {
    var button = TestUtils.renderIntoDocument(<Button/>);
    expect(button).toExist();
  });
});

