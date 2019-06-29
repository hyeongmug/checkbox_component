function checkbox(elem) {

	var el = elem || 'input[type=checkbox]';
	var key;

	$(window).keydown(function(e) {
		key = e.keyCode || e.which;
	})

	$(el).focus(function() {
		if (key == 9) {
			$(this).parents('label').addClass('focus');
		}
		key = null;
	})

	$(el).blur(function() {
		$(this).parents('label').removeClass('focus');
	})

	$(el).change(function() {
		if ($(this).is(':checked')) {
			$(this).parents('label').addClass('active');
		} else {
			$(this).parents('label').removeClass('active');
		}
	});
}
