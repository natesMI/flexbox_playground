$( document ).ready(function() {

  var flex = {
    status: false,
    value: ''
  };
  var order = {
    status: false,
    value: '',
  };
  var alignSelf = {
    status: false,
    value: ''
  };
  var flexWrap = {
    status: false,
    value: '',
  };
  var flexFlow = {
    status: false,
    value: '',
  };

  $('#flex-one').on('click', function(){
    if(flex['status']){
      $('flex' + flex['value']).css('background-color', '#ffffff');
    }
    flex['status'] = true;
    flex['value'] = '-one';
    $('#wrap-one').css('flex', '1');
    $('#flex-one').css('background-color', '#9b59b6');
  });

  $('#flex-three').on('click', function(){
    if(flex['status']){
      $('flex' + flex['value']).css('background-color', '#ffffff');
    }
    flex['status'] = true;
    flex['value'] = '-three';
    $('#wrap-three').css('flex', '1');
    $('#flex-three').css('background-color', '#9b59b6');
  });

  $('#flex-six').on('click', function(){
    if(flex['status']){
      $('flex' + flex['value']).css('background-color', '#ffffff');
    }
    flex['status'] = true;
    flex['value'] = '-six';
    $('#wrap-six').css('flex', '1');
    $('#flex-six').css('background-color', '#9b59b6');
  });

  $('#flex-nine').on('click', function(){
    if(flex['status']){
      $('flex' + flex['value']).css('background-color', '#ffffff');
    }
    flex['status'] = true;
    flex['value'] = '-nine';
    $('#wrap-nine').css('flex', '1');
    $('#flex-nine').css('background-color', '#9b59b6');
  });

});