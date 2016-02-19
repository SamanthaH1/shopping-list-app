//check items off list
$(document).ready(function(){
console.log($('#listitems'));
	$('#listitems').on('click', 'li', function() {
		console.log(this);
		$(this).toggleClass('crossout'); 
		$(this).children('.box').toggleClass('box_chk');
});
	});


//add list items
$('.plus_icon').click(function() {
	$('.listitems').append($('<li>', {
		text:$('#item').val()
	}));
});

// ^^^^   codepen link:  http://codepen.io/SamanthaH1/pen/PZvzOa


//sortable list items
// sortable API http://api.jqueryui.com/sortable/#option-items

	$('#listitems').sortable( 
		{
			axis: "y"
		});


	show delete button on mouse hover ISNT WORKING
	$('#listitems').on('mouseenter', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});
	$('#listitems').on('mouseleave', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});

 });