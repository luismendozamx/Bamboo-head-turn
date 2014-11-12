$(document).ready( function(){
	image = $('#headturn');
	container = $('#headturn-container');
	imageWidth = image[0].clientWidth;
	imageHeight = image[0].clientHeight;
	console.log(imageWidth);

	image.css("height", imageHeight+"px");
	image.css("width", imageWidth+"px");
	image.css("left", -(imageWidth/7)*3 + "px" );
	container.css("width", (imageWidth/7) + "px");

	
} );

$('#headturn').mousemove( function(event){
	var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
	var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
	$("#s1").text( "( event.pageX, event.pageY ) : " + pageCoords );
	$("#s2").text( "( event.clientX, event.clientY ) : " + clientCoords );
});