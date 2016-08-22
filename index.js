$( document ).ready(function() {
 
  var $view1 = $('#view-1');
  var $view2 = $('#view-2');
  var $view3 = $('#view-3');

  $view1.show();

  var pageFlow = [$view1, $view2, $view3];
  var counter = 0;

  var buttonMap = {
    display: false,
    flex_direction: false,
    justify_content: false,
    align_items: false
  };

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
    if(buttonMap['display']){
      buttonMap['display'] = false;
      $('#css-1').html('<pre><code>#purple-div { display: block; }</code></pre>');
      $('#container-one').css('display', 'block');
    } else {
      buttonMap['display'] = true;
      $('#css-1').html('<pre><code>#purple-div { display: flex; }</code></pre>');
      $('#container-one').css('display', 'flex');
    }
  });

  $('#flex-direction').on('click', function(){
    if(buttonMap['display']){
      if(buttonMap['flex_direction']){
        buttonMap['flex_direction'] = false;
        $('#css-1').html('<pre><code>#purple-div { display: flex; flex-direction: none; }</code></pre>');
        $('#container-one').css('flex-direction', 'none');
      } else {
        buttonMap['flex_direction'] = true;
        $('#css-1').html('<pre><code>#purple-div { display: flex; flex-direction: row; }</code></pre>');
        $('#container-one').css('flex-direction', 'row');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

  $('#justify-content').on('click', function(){
    if(buttonMap['display']){
      $('#css-1').html('<pre><code>#purple-div { display: flex; flex-direction: row; justify-content: center }</code></pre>');
      $('#container-one').css('justify-content', 'center');
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

  $('#align-items').on('click', function(){
    if(buttonMap['display']){
      $('#css-1').html('<pre><code>#purple-div { display: flex; flex-direction: row; justify-content: center; align-items: center }</code></pre>');
      $('#container-one').css('align-items', 'center');
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

});