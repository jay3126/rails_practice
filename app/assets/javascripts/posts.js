function openForm(action){
	if(action == "new"){
		$('#post_title').val('');
		$('#post_description').val('');
	}
	$('#action_type').val(action);
	$("#postModal").modal({keyboard: false});
}

function createOrUpdatePost(){
	$("#postModal").modal('hide');
	var action_type = $("#action_type").val();
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
		$.ajax({
			type: "PATCH",
			url: "",
			dataType: "",
			data: {},
			beforeSend: function(){},
			success: function() {},
			complete: function() {},
			error: function() {}
		});
	}
}