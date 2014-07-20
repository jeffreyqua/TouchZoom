
// jQuery
$(document).ready(function(){ 
	// ------------------- //
	// -- INTERIOR PAGE -- //
	// ------------------- //
	var zoomSize = 200;				// Zoom Radius (Offset calculation. Standard size is at 100px circle)
	var touchOffset = 70;			// Manual Offset so that zoom window isn't on thumb
	var pageYOffset = zoomSize/2;
	var pageXOffset = zoomSize/2;

	var pageYOffsetMobile = zoomSize/2;
	var pageXOffsetMobile = zoomSize/2;

	// ZOOM CLICK DOWN
	$('#base-image').bind('mousedown',function(e){
		e.preventDefault();
		var elementOffset = $(this).offset();	// Calculate image offset from document - handles window resizes
		$('#zoom').css('top',event.pageY-pageYOffset-touchOffset);
		$('#zoom').css('left',event.pageX-pageXOffset);
		$('#zoom').css('background-position',(-(event.pageX - elementOffset.left - pageXOffset))+'px '+(-(event.pageY-elementOffset.top - pageYOffset))+'px');
		$("#zoom").css("display","block");
	});

	$('#base-image').bind('touchstart',function(e){
		var elementOffset = $(this).offset();	// Calculate image offset from document - handles window resizes
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		$('#zoom').css('top',touch.pageY-pageYOffsetMobile-touchOffset);
		$('#zoom').css('left',touch.pageX-pageXOffsetMobile);
		$('#zoom').css('background-position',(-(event.pageX - elementOffset.left - pageXOffsetMobile))+'px '+(-(event.pageY - elementOffset.top - pageYOffsetMobile))+'px');
		$("#zoom").css("display","block");
		e.preventDefault();
	});

	// ZOOM MOVE
	$('#base-image').bind('mousemove',function(e){
		e.preventDefault();
		var elementOffset = $(this).offset();	// Calculate image offset from document - handles window resizes
		//$("#interior-zoom").css("display","block");
		//var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		//CODE GOES HERE
		//console.log(event.pageY+' '+event.pageX);
		$('#zoom').css('top',event.pageY-pageYOffset-touchOffset);
		$('#zoom').css('left',event.pageX-pageXOffset);
		$('#zoom').css('background-position',(-(event.pageX - elementOffset.left - pageXOffset))+'px '+(-(event.pageY-elementOffset.top - pageYOffset))+'px');

		//console.log('background position: '+$('#interior-zoom').css('background-position'));
	});
	
	$('#base-image').bind('touchmove',function(e){
		e.preventDefault();
		var elementOffset = $(this).offset();	// Calculate image offset from document - handles window resizes
		//$("#interior-zoom").css("display","block");
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		//CODE GOES HERE
		//console.log(touch.pageY+' '+touch.pageX);
		$('#zoom').css('top',touch.pageY-pageYOffsetMobile-touchOffset);
		$('#zoom').css('left',touch.pageX-pageXOffsetMobile);

		$('#zoom').css('background-position',(-(event.pageX - elementOffset.left - pageXOffsetMobile))+'px '+(-(event.pageY - elementOffset.top - pageYOffsetMobile))+'px');
	});

	// ZOOM UP
	$('#zoom-container').bind('mouseup',function(e){
		//touchend
		$("#zoom").css("display","none");
	});

	$('#zoom-container').bind('touchend',function(e){
		//touchend
		$("#zoom").css("display","none");
	});
});