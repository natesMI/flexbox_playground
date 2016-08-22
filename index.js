$( document ).ready(function() {
 
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

  $('#display').on('click', function(){
    $('#css-1').html('<pre><code>#purple-div { display: flex; }</code></pre>');
    $('#container-one').css('display', 'flex');
  });
  $('#flex-direction').on('click', function(){
    $('#css-1').html('<pre><code>#purple-div { display: flex; flex-direction: column; }</code></pre>');
    $('#container-one').css('flex-direction', 'column');
  });
  $('#justify-content').on('click', function(){
    $('#css-1').html('<pre><code>#purple-div { display: flex; flex-direction: row; justify-content: center }</code></pre>');
    $('#container-one').css('justify-content', 'center');
  });
  $('#align-items').on('click', function(){
    $('#css-1').html('<pre><code>#purple-div { display: flex; flex-direction: row; justify-content: center; align-items: center }</code></pre>');
    $('#container-one').css('align-items', 'center');
  });

});