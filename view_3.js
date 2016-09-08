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
    flex['value'] = '.uno';
    $('.uno').css('flex', '1');
    $('#flex-one').css('background-color', '#9b59b6');
  })

});