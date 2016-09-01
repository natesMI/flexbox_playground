$( document ).ready(function() {

  var flexBasis = {
    status: false,
    value: ''
  };
  var flexGrow = {
    status: false,
    value: ''
  };
  var flexShrink = {
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

  $('#flex-grow-large').on('click', function(){
    if(flexGrow['status']){
      $('#flex-grow' + flexGrow['value']).css('background-color', '#ffffff');
    }
    flexGrow['status'] = true;
    flexGrow['value'] = '-large';
    $('#flex-grow-large').css('background-color', '#9b59b6');
    $('#child-two-a').css('flex-grow', '3');
  });

  $('#flex-grow-medium').on('click', function(){
    if(flexGrow['status']){
      $('#flex-grow' + flexGrow['value']).css('background-color', '#ffffff');
    }
    flexGrow['status'] = true;
    flexGrow['value'] = '-medium';
    $('#flex-grow-medium').css('background-color', '#9b59b6');
    $('#child-two-b').css('flex-grow', '2');
  });

  $('#flex-grow-small').on('click', function(){
    if(flexGrow['status']){
      $('#flex-grow' + flexGrow['value']).css('background-color', '#ffffff');
    }
    flexGrow['status'] = true;
    flexGrow['value'] = '-small';
    $('#flex-grow-small').css('background-color', '#9b59b6');
    $('#child-two-c').css('flex-grow', '1');
  });

  $('#flex-shrink-small').on('click', function(){
    if(flexShrink['status']){
      $('#flex-shrink' + flexShrink['value']).css('background-color', '#ffffff');
    }
    flexShrink['status'] = true;
    flexShrink['value'] = '-small';
    $('#flex-shrink-small').css('background-color', '#9b59b6');
    $('#child-two-c').css('flex-shrink', '1');
  });

  $('#flex-shrink-medium').on('click', function(){
    if(flexShrink['status']){
      $('#flex-shrink' + flexShrink['value']).css('background-color', '#ffffff');
    }
    flexShrink['status'] = true;
    flexShrink['value'] = '-medium';
    $('#flex-shrink-medium').css('background-color', '#9b59b6');
    $('#child-two-b').css('flex-shrink', '2');
  });

  $('#flex-shrink-large').on('click', function(){
    if(flexShrink['status']){
      $('#flex-shrink' + flexShrink['value']).css('background-color', '#ffffff');
    }
    flexShrink['status'] = true;
    flexShrink['value'] = '-large';
    $('#flex-shrink-large').css('background-color', '#9b59b6');
    $('#child-two-a').css('flex-shrink', '3');
  });

});