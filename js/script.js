//javascript for shopping app.
//check items off list
$(document).ready(function() {
    //console.log($('#listitems'));
    $('#listitems').on('click', 'li', function() {
        //		console.log(this);
        $(this).toggleClass('crossout');
        $(this).children('.box').toggleClass('box_chk');
    });
    $('.plus_icon').click(function() {
   		console.log($('#item'))
     	$('#listitems').append('<li> <div class="box"></div> <p>'+$('#item').val()+'</p> <img class="delete" src="images/delete.png"> </li>')
    });

    $('#listitems').sortable({
		axis: "y"
	});
	$('#listitems').on('mouseenter', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});

	$('#listitems').on('mouseleave', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});
//delete list items
	$('#listitems').on('click', '.delete', function(e){
		e.preventDefault(); $(this).parent().remove()
	});


});