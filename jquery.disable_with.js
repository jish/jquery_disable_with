
(function($) {
  $.disableWith = function() {
    $('input[type=submit][data-disable-with]').click(function() {
      var element = $(this);
      var disableText = element.data('disable-with');

      element.prop('disabled', true);
      element.val(disableText);
    })
  }

  $(function() {
    jQuery.disableWith();
  })

}(this.jQuery));
