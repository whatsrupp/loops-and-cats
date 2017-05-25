$(document).ready(function() {

  $('#recButton').addClass("notRec");

  $('#recButton').click(function(){
  	if($('#recButton').hasClass('notRec')){
  		$('#recButton').removeClass("notRec");
  		$('#recButton').addClass("Rec");
  	}
  	else{
  		$('#recButton').removeClass("Rec");
  		$('#recButton').addClass("notRec");
  	}
  });	
})
