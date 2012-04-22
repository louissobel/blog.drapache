$('document').ready(function() {
	

	$('span.open_post').click(function() {
		
		var $this = $(this);
		$this.off('click');
		
		var $nextLoader = $this.next("div.loader");
		$nextLoader.removeClass("invisible");
		
		$.get("post",{id : this.dataset['postId'] },function(data) {
			$nextLoader.addClass("invisible");
			$this.after(data);
			$this.removeClass("open_post");
		});
	});
	
	$('#admin').click(function () {
		if (this.dataset['loggedIn'] == "true") {
			document.location = 'edit';
		} else {
			document.location = 'login';
		}
	});
	

});