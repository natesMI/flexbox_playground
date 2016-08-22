$( document ).ready(function() {

  var buttonMap_1 = {
    flex: {
      status: false,
      options: ['', '1', '30px', 'auto']
    },
    order: {
      status: false,
      options: ['', '5', '-5']
    },
    flex_wrap: {
      status: false,
      options: ['', 'wrap', 'wrap-reverse', 'nowrap']
    }
  };

  $('#flex-basis').on('click', function(){
    $('#css-3').html('<div><pre><code>flex-wrap: wrap;</code></pre></div>');
    $('.wrap_item').css('flex-wrap', 'wrap');
  });

});