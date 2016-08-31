$( document ).ready(function() {

  var flexBasis = {
    status: false,
    value: ''
  };
  var justifyContent = {
    status: false,
    value: ''
  };
  var alignItems = {
    status: false,
    value: ''
  };

  $('#flex-basis-small').on('click', function(){
    if(flexBasis['status']){
      $('#flex-basis' + flexBasis['value']).css('background-color', '#ffffff');
    }
    flexBasis['status'] = true;
    flexBasis['value'] = '-small';
    $('#flex-basis-small').css('background-color', '#9b59b6');
    $('#child-two-a').css('flex-basis', '200px');
    $('#child-two-b').css('flex-basis', '200px');
    $('#child-two-c').css('flex-basis', '200px');
  });

  $('#flex-basis-medium').on('click', function(){
    if(flexBasis['status']){
      $('#flex-basis' + flexBasis['value']).css('background-color', '#ffffff');
    }
    flexBasis['status'] = true;
    flexBasis['value'] = '-medium';
    $('#flex-basis-medium').css('background-color', '#9b59b6');
    $('#child-two-a').css('flex-basis', '300px');
    $('#child-two-b').css('flex-basis', '300px');
    $('#child-two-c').css('flex-basis', '300px');
  });

  $('#flex-basis-large').on('click', function(){
    if(flexBasis['status']){
      $('#flex-basis' + flexBasis['value']).css('background-color', '#ffffff');
    }
    flexBasis['status'] = true;
    flexBasis['value'] = '-large';
    $('#flex-basis-large').css('background-color', '#9b59b6');
    $('#child-two-a').css('flex-basis', '400px');
    $('#child-two-b').css('flex-basis', '400px');
    $('#child-two-c').css('flex-basis', '400px');
  });

});