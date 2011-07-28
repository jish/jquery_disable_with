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

});
