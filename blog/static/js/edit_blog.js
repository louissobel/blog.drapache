$('document').ready(function() {
	
	var showLoader = function() {
		var loader = document.getElementById('loader_holder');
		if (loader.showCount == undefined) {
			loader.showCount = 1
		} else {
			loader.showCount++;
		}
		$(loader).removeClass("invisible");
	};
	
	var hideLoader = function() {
		var loader = document.getElementById('loader_holder');
		loader.showCount--;
		if (loader.showCount == 0) {
			$(loader).addClass("invisible");
		}
	};


	$("td.status").click(function() {
		
		var $this = $(this);
		
		var $other;
		
		if ($this.hasClass("selected")) {
			return;
		}
		
		var published;
		if ($this.hasClass("in-progress")) {
			published = false;
			$other = $this.siblings(".published")
		} else if ($this.hasClass("published")) {
			published = true;
			$other = $this.siblings(".in-progress")
		}
		
		var postId = $this.data("postId");
		
		$this.addClass("pending");
		
		$.get('update_post_status.dbpy',{id:postId,published:published},function(data) {		
			
			hideLoader();
			if (data == "ok\n") {
				$this.addClass('selected');
				$this.removeClass('pending');
				$other.removeClass('selected');
			} else {
				$this.removeClass('pending');
			}
		});
		showLoader();
		
	});
	
	$('div.delete-post').click(function() {
	
		var $this = $(this);
		
		var $tableRow = $this.closest("tr");
		
		var postId = this.dataset["postId"];
		
		//not nice.. is there a better way?
		var title = $(this).parent().parent().parent().find("h2").html()
		
		
		if (confirm("Are you sure you want to delete this post\n"+title)) {
			
			showLoader();
			$tableRow.addClass("delete-pending");
			$.post('delete_post.dbpy',{id:postId},function(data) {
				
				hideLoader();
				if (data=="ok\n") {
					$tableRow.remove();
				} else {
					$tableRow.removeClass("delete-pending");
				}
			});
		}
		
	});
	

	
});