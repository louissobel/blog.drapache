$(document).ready(function() {
	var postEditor = CodeMirror.fromTextArea(document.getElementById('editor'),{mode:"markdown"});


	function savePost() {
		var titleInput = document.getElementById('title');
		
		var data = {};
		data.title = titleInput.value;
		data.id = titleInput.dataset["postId"];
		data.body = postEditor.getValue()
		
		$.post('save_post.dbpy',data,function(data) {
			$('#saving_indicator').addClass('invisible');
		});
		
	}

	
	$('#back').click(function() {
		savePost();
		document.location='edit';
	});
	
	$('#save').click(function() {
		$('#saving_indicator').removeClass('invisible');
		savePost();
	});

});