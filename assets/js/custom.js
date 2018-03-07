$ (function () {
	var clipboard = new ClipboardJS('.js-copy');

	clipboard.on('success', function(e) {
		var text = $(e.trigger).html();
		$(e.trigger).text('Code Copied!');
		setTimeout(function () {
			$(e.trigger).html(text)
		}, 2000);

		e.clearSelection();
	});

});
