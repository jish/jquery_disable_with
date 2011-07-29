describe('jQuery.disableWith', function() {
  describe('getElements', function() {
    it('should grab elements with data- attributes', function() {
      var button = $('<input data-disable-with="foo">');
      $('body').append(button);

      var elements = $.disableWith.getElements();
      expect(elements.length).toEqual(1);

      button.remove();
    });

    it('should not grab elements without data-attributes', function() {
      var button = $('<input type="submit">');
      $('body').append(button);

      var elements = $.disableWith.getElements();
      expect(elements.length).toEqual(0);

      button.remove();
    });
  });

  describe('initialize', function() {
    it('should set up a click handler for valid elements', function() {
      var button = $('<input value="foo" data-disable-with="bar">');
      $('body').append(button);
      $.disableWith.initialize();

      expect(button.prop('disabled')).toBeFalsy();
      expect(button.val()).toEqual('foo');

      button.click();
      expect(button.prop('disabled')).toBeTruthy();
      expect(button.val()).toEqual('bar');

      button.remove();
    });
  });
});

describe('fn.disableWith', function() {
  it('should disable a submit button', function() {
    var button = $('<input type="submit">');
    button.disableWith('foo');
    expect(button.prop('disabled')).toBeTruthy('a message');
  });

  it('should set the value of the button', function() {
    var button = $('<input type="submit">');
    button.disableWith('foo');
    expect(button.val()).toEqual('foo');
  });

  it('should be chainable', function() {
    var button = $('<input type="submit">');
    expect(button.disableWith('foo').val()).toEqual('foo');
  });

  it('should store the original value', function() {
    var button = $('<input type="submit" value="foo">');
    button.disableWith('bar');
    expect(button.data('original-value')).toEqual('foo');
  });
});

describe('fn.revert', function() {
  it('should enable the button', function() {
    var button = $('<input type="button" disabled="disabled">');
    button.revert();
    expect(button.prop('disabled')).toBeFalsy();
  });

  it('should restore the original value', function() {
    var button = $('<input type="button" data-original-value="foo">');
    button.revert();
    expect(button.val()).toEqual('foo');
  });

  it('should not break if there is no original value', function() {
    var button = $('<input type="button" value="foo">');
    button.revert();
    expect(button.val()).toEqual('foo');
  });

  it('should be chainable', function() {
    var button = $('<input type="button" data-original-value="foo">');
    expect(button.revert().val()).toEqual('foo');
  });
});
