(function($) {
  'use strict';
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#slinky', {
    // This will run before each test in this module.
    setup: function() {
      this.$nav = $('.navigation');
      this.scroller = this.$nav.children().first();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.$nav.slinky(), this.$nav, 'should be chainable');
  });

  test('header heights', function() {
    var $headers = $('header');
    expect(3);
    strictEqual($headers.eq(0).height(), 30, 'first header should be 30px tall');
    strictEqual($headers.eq(2).height(), 20, 'third header should be 20px tall');
    strictEqual($headers.eq(4).height(), 40, 'fifth header should be 40px tall');
  });

  test('initial header positions', function() {
    var $headers = $('header');
    this.$nav.slinky();

    expect(13);
    strictEqual($headers.eq(0).css('position'), 'absolute', 'first header should be positioned');
    strictEqual($headers.eq(0).css('top'), '0px', 'first header should be positioned');

    strictEqual($headers.eq(1).css('position'), 'static', 'second header should be static');

    strictEqual($headers.eq(2).css('position'), 'absolute', 'third header should be positioned');
    strictEqual($headers.eq(2).css('bottom'), '130px', 'third header should be positioned');

    strictEqual($headers.eq(3).css('position'), 'absolute', 'fourth header should be positioned');
    strictEqual($headers.eq(3).css('bottom'), '100px', 'fourth header should be positioned');

    strictEqual($headers.eq(4).css('position'), 'absolute', 'fifth header should be positioned');
    strictEqual($headers.eq(4).css('bottom'), '60px', 'fifth header should be positioned');

    strictEqual($headers.eq(5).css('position'), 'absolute', 'sixth header should be positioned');
    strictEqual($headers.eq(5).css('bottom'), '30px', 'sixth header should be positioned');

    strictEqual($headers.eq(6).css('position'), 'absolute', 'last header should be positioned');
    strictEqual($headers.eq(6).css('bottom'), '0px', 'last header should be positioned');
  });

  asyncTest('half-way scroll header positions', function() {
    var $headers = $('header');
    this.$nav.slinky();
    this.scroller.scrollTop(445);

    expect(12);

    setTimeout(function () {
      strictEqual($headers.eq(0).css('position'), 'absolute', 'first header should be positioned');
      strictEqual($headers.eq(0).css('top'), '0px', 'first header should be positioned');

      strictEqual($headers.eq(1).css('position'), 'absolute', 'second header should be positioned');
      strictEqual($headers.eq(1).css('top'), '30px', 'second header should be positioned');

      strictEqual($headers.eq(2).css('position'), 'absolute', 'third header should be positioned');
      strictEqual($headers.eq(2).css('top'), '60px', 'third header should be positioned');

      strictEqual($headers.eq(3).css('position'), 'static', 'fourth header should be static');

      strictEqual($headers.eq(4).css('position'), 'static', 'fifth header should be static');

      strictEqual($headers.eq(5).css('position'), 'absolute', 'sixth header should be positioned');
      strictEqual($headers.eq(5).css('bottom'), '30px', 'sixth header should be positioned');

      strictEqual($headers.eq(6).css('position'), 'absolute', 'last header should be positioned');
      strictEqual($headers.eq(6).css('bottom'), '0px', 'last header should be positioned');

      start();
    }, 10);
  });

  asyncTest('bottom scroll header positions', function() {
    var $headers = $('header');
    this.$nav.slinky();
    this.scroller.scrollTop(890);

    expect(13);

    setTimeout(function () {
      strictEqual($headers.eq(0).css('position'), 'absolute', 'first header should be positioned');
      strictEqual($headers.eq(0).css('top'), '0px', 'first header should be positioned');

      strictEqual($headers.eq(1).css('position'), 'absolute', 'second header should be positioned');
      strictEqual($headers.eq(1).css('top'), '30px', 'second header should be positioned');

      strictEqual($headers.eq(2).css('position'), 'absolute', 'third header should be positioned');
      strictEqual($headers.eq(2).css('top'), '60px', 'third header should be positioned');

      strictEqual($headers.eq(3).css('position'), 'absolute', 'fourth header should be positioned');
      strictEqual($headers.eq(3).css('top'), '80px', 'fourth header should be positioned');

      strictEqual($headers.eq(4).css('position'), 'absolute', 'fifth header should be positioned');
      strictEqual($headers.eq(4).css('top'), '110px', 'fifth header should be positioned');

      strictEqual($headers.eq(5).css('position'), 'absolute', 'sixth header should be positioned');
      strictEqual($headers.eq(5).css('top'), '150px', 'sixth header should be positioned');

      strictEqual($headers.eq(6).css('position'), 'static', 'last header should be static');

      start();
    }, 10);
  });

test('setup and cleanup', function () {
  this.$nav.slinky();
  expect(2);

  equal($.data(this.$nav[0], 'slinky'), true, 'the plugin should initialize');

  this.$nav.trigger('remove').remove();
  equal($.data(this.$nav[0], 'slinky'), undefined, 'the plugin should clean up');
});

}(jQuery));
