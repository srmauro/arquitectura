$(document).ready(function(){
	console.log('ready')

	$('.icon-bars').click(function() {
		$('#nav-menu').show();
	});
	
	$('.icon-times').click(function(){
		$('#nav-menu').hide();
	})
})