// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

function validateFields(fields){
	var errors = 0;
	$.each(fields, function(i,arr){
		if($(arr[0]).val() == ''){
			errors += 1;
			addRedBorder(arr[0], null);
		}else{
			removeRedBorder(arr[0]);
		}
	});
	return errors;
}

function addError(obj,err){
	obj.closest('.form-group').find("div[data-hold='error']").text(err);
}

function removeError(obj){
	obj.closest('.form-group').find("div[data-hold='error']").text('');
}

function addRedBorder(obj){
	$(obj).addClass('red-border');
}

function removeRedBorder(obj){
	$(obj).removeClass('red-border');
}