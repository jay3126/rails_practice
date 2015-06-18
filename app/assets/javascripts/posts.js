function openForm(action, post_id){
	if(action == "new"){
		$('#post_title').val('');
		$('#post_description').val('');
	}
	$('#action_type').val(action);
	$('#post_id').val(post_id);
	$("#postModal").modal({keyboard: false});
}

function createOrUpdatePost(){
	$("#postModal").modal('hide');
	var action_type = $("#action_type").val();
	var post_id = $('#post_id').val();
	var params = $('.post').serialize();
	if(action_type == "new"){
		$.ajax({
			type: "POST",
			url: "/posts",
			dataType: "script",
			data: params,
			beforeSend: function(){},
			success: function(){},
			complete: function() { $('#spinner_div').hide(); },
			error: function() {}
		});
	}else{
		var url = "/posts/"+"#{post_id}";
		alert(url);
		$.ajax({
			type: "PATCH",
			url: url,
			dataType: "script",
			data: params,
			beforeSend: function(){},
			success: function() {},
			complete: function() { $('#spinner_div').hide(); },
			error: function() {}
		});
	}
}