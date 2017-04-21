$(document).ready(function(){
	$('#floating_button').click(function(){
		$(this).closest('#floating_container').toggleClass('is_opened');
	})
})
