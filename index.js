$( document ).ready(function(){

	var $view1 = $('#view-1');
  var $view2 = $('#view-2');
  var $view3 = $('#view-3');

  $view1.show();

  var pageFlow = [$view1, $view2, $view3];
  var counter = 0;

  $('#prev').on('click', function(){
  	if(counter > 0){
  		pageFlow[counter].hide();
  		counter--;
  	  pageFlow[counter].show();
  	}
  });

  $('#next').on('click', function(){
  	if(counter < 2){
  		pageFlow[counter].hide();
  		counter++;
  	  pageFlow[counter].show();
  	}
  });

});