function openForm(action, post_id){
	if(action == "new"){
		$('#post_title').val('');
		$('#post_description').val('');
	}
	$('#action_type').val(action);
	$('#post_id').val(post_id);
	$("#postModal").modal({keyboard: false});
}

function validatePostForm(){
	var title = $('#post_title');
	var title_val = title.val();
	var desc = $('#post_description');
	var desc_val = desc.val();
	var fields = [];
	fields.push([title,"Can't be left blank"]);
	fields.push([desc,"Can't be left blank"]);

	var errors = validateFields(fields);
	if(errors <= 0){
		createOrUpdatePost();
	}
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
		var url = "/posts/"+post_id;
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

function fetchPost(action, post_id){
	$('#spinner_div').show();
	$('#action_type').val(action);
	$('#post_id').val(post_id);
	url = "/posts/"+post_id+"/fetch_posts";
	$.ajax({
		type: "GET",
		url: url,
		dataType: "script",
		data: {id: post_id},
		beforeSend: function(){},
		success: function() {},
		complete: function() { $('#spinner_div').hide(); },
		error: function() {}
	});
	$("#postModal").modal({keyboard: false});
}

function openConfirmationModal(post_id){
	$('#post_id').val(post_id);
	$('#confirmationModal').modal({keyboard: false});
}

function delPost(){
	$('#confirmationModal').modal('hide');
	$('#spinner_div').show();
	var post_id = $('#post_id').val();
	url = "/posts/"+post_id;
	$.ajax({
		type: "DELETE",
		url: url,
		dataType: "script",
		data: {id: post_id},
		beforeSend: function(){},
		success: function() {},
		complete: function() { $('#spinner_div').hide(); },
		error: function() {}
	});
}