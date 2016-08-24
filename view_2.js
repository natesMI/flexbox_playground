$( document ).ready(function() {

  var viewMap_2 = {
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
    if(viewMap_2['flex_basis']['status']){
      viewMap_2['flex_basis']['status'] = false;
      $('#flex-basis').css('background-color', '#34495e');
      $('#child-two-a').css('flex-basis', '400px');
      $('#child-two-b').css('flex-basis', '400px');
      $('#child-two-c').css('flex-basis', '400px');
    } else {
      viewMap_2['flex_basis']['status'] = true;
      $('#flex-basis').css('background-color', '#1abc9c');
      $('#child-two-a').css('flex-basis', '150px');
      $('#child-two-b').css('flex-basis', '250px');
      $('#child-two-c').css('flex-basis', '350px');
    }
  });
});