
(function($) {

  $.disableWith = {
    getElements: function() {
      return $('input[data-disable-with]');
    }
  };

  $.fn.disableWith = function(message) {
    var element = $(this);
    element.prop('disabled', true);
    element.val(message);
  };

}(this.jQuery));
