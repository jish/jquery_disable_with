
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
    element.prop('disabled', true);
    element.val(message);
  };

  $(function() {
    $.disableWith.initialize();
  });

}(this.jQuery));
