$(document).ready( function(){
	
} );

function createimage(){
	//Get jquery elements
	image = $('#headturn');
	container = $('#headturn-container');
	frameCount = 7;
	centerFrame = 3;

	//Get image width & height
	imageWidth = image[0].clientWidth;
	imageHeight = image[0].clientHeight;
	frameWidth = imageWidth/frameCount;

	//Reposition Image
	image.css("height", imageHeight+"px");
	image.css("width", imageWidth+"px");
	image.css("left", -(imageWidth/frameCount)*centerFrame + "px" );

	//Adjust container size to hide overflow
	container.css("width", (imageWidth/frameCount) + "px");
}

$('#headturn').mousemove( function(event){

	//Get mouse position on image based on page position
	var positionX = event.pageX;
	var positionY = event.pageY;

	//Get mouse position on image based on client position
	var clientX = event.clientX;
	var clientY = event.clientY;

	//Print postions
	$("#s1").text( " positionX : " + positionX );
	$("#s2").text( " positionY : " + positionY );
	$("#s3").text( " clientX : " + clientX );
	$("#s4").text( " clientY : " + clientY );

	//
	parenOffsetX = $('#headturn-container').offset().left;
	var offset = getOffset(frameWidth, positionX, frameCount, parenOffsetX);
	image.css("left", -(imageWidth/frameCount)*(offset) + "px" );

	$("#s5").text( " offset : " + offset );


});

function getOffset(frame_Width, position_X, frame_Count, parent_offsetX){
	frame_Offset = (frame_Width/frame_Count);

	for(var i = 0; i <= frame_Count; i++){
		if(frame_Offset*i < position_X && position_X < frame_Offset*(i+1) + parent_offsetX)
			return i;
	}

}

