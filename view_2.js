$( document ).ready(function() {

  var flexBasis = {
    status: false,
    value: ''
  };
  var flexGrow = {
    status: false,
    value: '',
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
    $('#child-two-one').css('flex-basis', '200px');
    $('#child-two-two').css('flex-basis', '200px');
    $('#child-two-three').css('flex-basis', '200px');
  });

  $('#flex-basis-medium').on('click', function(){
    if(flexBasis['status']){
      $('#flex-basis' + flexBasis['value']).css('background-color', '#ffffff');
    }
    flexBasis['status'] = true;
    flexBasis['value'] = '-medium';
    $('#flex-basis-medium').css('background-color', '#9b59b6');
    $('#child-two-one').css('flex-basis', '300px');
    $('#child-two-two').css('flex-basis', '300px');
    $('#child-two-three').css('flex-basis', '300px');
  });

  $('#flex-basis-large').on('click', function(){
    if(flexBasis['status']){
      $('#flex-basis' + flexBasis['value']).css('background-color', '#ffffff');
    }
    flexBasis['status'] = true;
    flexBasis['value'] = '-large';
    $('#flex-basis-large').css('background-color', '#9b59b6');
    $('#child-two-one').css('flex-basis', '400px');
    $('#child-two-two').css('flex-basis', '400px');
    $('#child-two-three').css('flex-basis', '400px');
  });

  $('#flex-grow-one').on('click', function(){
    if(flexGrow['status']){
      $('#flex-grow' + flexGrow['value']).css('background-color', '#ffffff');
      $('#child-two' + flexGrow['value']).css('flex-grow', '0');
    }
    flexGrow['status'] = true;
    flexGrow['value'] = '-one';
    $('#flex-grow-one').css('background-color', '#9b59b6');
    $('#child-two-one').css('flex-grow', '1');
  });

  $('#flex-grow-two').on('click', function(){
    if(flexGrow['status']){
      $('#flex-grow' + flexGrow['value']).css('background-color', '#ffffff');
      $('#child-two' + flexGrow['value']).css('flex-grow', '0');
    }
    flexGrow['status'] = true;
    flexGrow['value'] = '-two';
    $('#flex-grow-two').css('background-color', '#9b59b6');
    $('#child-two-two').css('flex-grow', '1');
  });

  $('#flex-grow-three').on('click', function(){
    if(flexGrow['status']){
      $('#flex-grow' + flexGrow['value']).css('background-color', '#ffffff');
      $('#child-two' + flexGrow['value']).css('flex-grow', '0');
    }
    flexGrow['status'] = true;
    flexGrow['value'] = '-three';
    $('#flex-grow-three').css('background-color', '#9b59b6');
    $('#child-two-three').css('flex-grow', '1');
  });

  $('#flex-shrink-one').on('click', function(){
    if(flexShrink['status']){
      $('#flex-shrink' + flexShrink['value']).css('background-color', '#ffffff');
      $('#child-two' + flexShrink['value']).css('flex-shrink', '1');
    }
    flexShrink['status'] = true;
    flexShrink['value'] = '-one';
    $('#flex-shrink-one').css('background-color', '#9b59b6');
    $('#child-two-one').css('flex-shrink', '2');
  });

  $('#flex-shrink-two').on('click', function(){
    if(flexShrink['status']){
      $('#flex-shrink' + flexShrink['value']).css('background-color', '#ffffff');
      $('#child-two' + flexShrink['value']).css('flex-shrink', '1');
    }
    flexShrink['status'] = true;
    flexShrink['value'] = '-two';
    $('#flex-shrink-two').css('background-color', '#9b59b6');
    $('#child-two-two').css('flex-shrink', '2');
  });

  $('#flex-shrink-three').on('click', function(){
    if(flexShrink['status']){
      $('#flex-shrink' + flexShrink['value']).css('background-color', '#ffffff');
      $('#child-two' + flexShrink['value']).css('flex-shrink', '1');
    }
    flexShrink['status'] = true;
    flexShrink['value'] = '-three';
    $('#flex-shrink-three').css('background-color', '#9b59b6');
    $('#child-two-three').css('flex-shrink', '2');
  });

});