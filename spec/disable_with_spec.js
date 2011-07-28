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
  });

});
