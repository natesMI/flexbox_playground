$( document ).ready(function() {

  var buttonMap_1 = {
    flex_basis: {
      status: false,
      options: ['', '30px', 'auto', 'fill']
    },
    flex_grow: {
      status: false,
      options: ['', '3', '0.5']
    },
    flex_shrink: {
      status: false,
      options: ['', '2', '0.6']
    }
  };

  $('#flex-basis').on('click', function(){
    $('#css-2').html('<div><pre><code>#BOX_1{ flex-basis: 50px; } #BOX_2{ flex-basis: 100px; } #BOX3{ flex-basis: 150px; }</code></pre></div>');
    $('#child-two-a').css('flex-basis', '50px');
    $('#child-two-b').css('flex-basis', '100px');
    $('#child-two-c').css('flex-basis', '150px');
  });

});