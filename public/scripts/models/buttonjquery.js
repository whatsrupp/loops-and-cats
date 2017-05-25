$(document).ready(function() {

  // $('#recButton').addClass("notRec");

  $('#recording-button').click(function(){
  	if($('#recording-button').hasClass('notRec')){
  		$('#recording-button').removeClass("notRec");
  		$('#recording-button').addClass("Rec");
  	}
  	else{
  		$('#recording-button').removeClass("Rec");
  		$('#recording-button').addClass("notRec");
  	}
  });
})
