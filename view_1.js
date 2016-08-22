$( document ).ready(function() {

  var viewMap_1 = {
    display: false,
    flex_direction: {
      status: false,
      options: ['', 'row', 'row-reverse', 'column', 'column-reverse']
    },
    justify_content: {
      status: false,
      options: ['', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between']
    },
    align_items: {
      status: false,
      options: ['', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between']
    }
  };

  $('#display').on('click', function(){
    if(viewMap_1['display']){
      viewMap_1['display'] = false;
      $('#css-1').html('<h3>Purple Div CSS Properties</h3>');
      $('#container-one').css('display', '');
    } else {
      viewMap_1['display'] = true;
      $('#css-1').html('<div><pre><code>display: flex;</code></pre></div>');
      $('#container-one').css('display', 'flex');
    }
  });

  $('#flex-direction').on('click', function(){
    if(viewMap_1['display']){
      if(buttonMap['flex_direction']){
        buttonMap['flex_direction'] = false;
        $('#css-1').html('<div><pre><code>display: flex;</code></pre></div>');
        $('#container-one').css('flex-direction', '');
      } else {
        buttonMap['flex_direction'] = true;
        $('#css-1').html('<div><pre><code>display: flex; flex-direction: row;</code></pre></div>');
        $('#container-one').css('flex-direction', 'row');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

  $('#justify-content').on('click', function(){
    if(viewMap_1['display']){
      if(buttonMap['justify_content']){
        buttonMap['justify_content'] = false;
        $('#css-1').html('<div><pre><code>display: flex; flex-direction: row;</code></pre></div>');
        $('#container-one').css('justify-content', '');
      } else {
        buttonMap['justify_content'] = true;
        $('#css-1').html('<div><pre><code>display: flex; flex-direction: row; justify-content: center;</code></pre></div>');
        $('#container-one').css('justify-content', 'center');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

  $('#align-items').on('click', function(){
    if(viewMap_1['display']){
      if(buttonMap['align_items']){
        buttonMap['align_items'] = false;
        $('#css-1').html('<div><pre><code>display: flex; flex-direction: row; justify-content: center;</code></pre></div>');
        $('#container-one').css('align-items', '');
      } else {
        buttonMap['align_items'] = true;
        $('#css-1').html('<div><pre><code>display: flex; flex-direction: row; justify-content: center; align-items: center;</code></pre></div>');
        $('#container-one').css('align-items', 'center');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });
});

















