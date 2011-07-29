
(function($) {

  $.disableWith = {
    initialize: function() {
      this.getElements().click(this._disable);
    },

    getElements: function() {
      return $('input[data-disable-with]');
    },

    _disable: function() {
      var element = $(this);
      var message = element.data('disable-with');
      $(this).disableWith(message);
    }
  };

  $.fn.disableWith = function(message) {
    var element = $(this);

    element.data('original-value', element.val());
    element.prop('disabled', true);
    element.val(message);

    return element;
  };

  $.fn.revert = function() {
    var element = $(this);
    var originalValue = element.data('original-value');

    element.prop('disabled', false);

    if (originalValue) {
      element.val(originalValue);
    }

    return element;
  };

  $(function() {
    $.disableWith.initialize();
  });

}(this.jQuery));
