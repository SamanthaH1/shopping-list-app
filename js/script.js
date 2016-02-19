//check items off list
$(document).ready(function(){
//console.log($('#listitems'));
	$('#listitems').on('click', 'li', function() {
//		console.log(this);
		$(this).toggleClass('crossout'); 
		$(this).children('.box').toggleClass('box_chk');
});
	});


//add list items
//not working
// my codepen http://codepen.io/SamanthaH1/pen/PZvzOa

$('.plus_icon').click(function() {
	$('.listitems').append($('<li>', {
		text:$('#item').val()
	}));
});


//sortable list items
//not working
	$('#listitems').sortable( 
		{
			axis: "y"
		});


	//show delete button on mouse hover
	//not working

	$('#listitems').on('mouseenter', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});
	
	$('#listitems').on('mouseleave', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});



