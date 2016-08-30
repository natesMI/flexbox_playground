$( document ).ready(function() {

  var display = false;
  var flexDirection = {
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

  $('#display-flex').on('click', function(){
    if(display === true){
      display = false;
      $('#display-flex').css('background-color', '#ffffff');
      $('#container-one').css('display', '');
    } else {
      display = true;
      $('#display-flex').css('background-color', '#9b59b6');
      $('#container-one').css('display', 'flex');
    }
  });

  $('#flex-direction-row').on('click', function(){
    if(display === true){
      if(flexDirection['status']){
        $('#flex-direction' + flexDirection['value']).css('background-color', '#ffffff');
      }
      $('#flex-direction-row').css('background-color', '#9b59b6');
      $('#container-one').css('flex-direction', 'row');
      flexDirection['status'] = true;
      flexDirection['value'] = '-row';
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
    }
  });

  $('#flex-direction-column').on('click', function(){
    if(display === true){
      if(flexDirection['status']){
        $('#flex-direction' + flexDirection['value']).css('background-color', '#ffffff');
      }
      $('#flex-direction-column').css('background-color', '#9b59b6');
      $('#container-one').css('flex-direction', 'column');
      flexDirection['status'] = true;
      flexDirection['value'] = '-column';
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
    }
  });

  $('#flex-direction-row-reverse').on('click', function(){
    if(display === true){
      if(flexDirection['status']){
        $('#flex-direction' + flexDirection['value']).css('background-color', '#ffffff');
      }
      $('#flex-direction-row-reverse').css('background-color', '#9b59b6');
      $('#container-one').css('flex-direction', 'row-reverse');
      flexDirection['status'] = true;
      flexDirection['value'] = '-row-reverse';
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
    }
  });

  $('#flex-direction-column-reverse').on('click', function(){
    if(display === true){
      if(flexDirection['status']){
        $('#flex-direction' + flexDirection['value']).css('background-color', '#ffffff');
      }
      $('#flex-direction-column-reverse').css('background-color', '#9b59b6');
      $('#container-one').css('flex-direction', 'column-reverse');
      flexDirection['status'] = true;
      flexDirection['value'] = '-column-reverse';
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
    }
  });

  $('#justify-content-flex-start').on('click', function(){
    if(display === true && flexDirection['status'] === true){
      if(justifyContent['status']){
        $('#justify-content' + justifyContent['value']).css('background-color', '#ffffff');
      }
      $('#justify-content-').css('background-color', '#9b59b6');
      $('#container-one').css('flex-direction', 'column-reverse');
      flexDirection['status'] = true;
      flexDirection['value'] = '-column-reverse';
    } else {
      $('#message-display').html('<h1>*Must first select display and flex-direction properties</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
    }
  });

  $('#align-items').on('click', function(){
    if(display === true && flexDirection['status'] === true){
      if(viewMap_1['align_items']['status']){
        viewMap_1['align_items']['status'] = false;
        $('#align-items').css('background-color', '#9b59b6');
        $('#container-one').css('align-items', '');
      } else {
        viewMap_1['align_items']['status'] = true;
        $('#align-items').css('background-color', '#1abc9c');
        $('#container-one').css('align-items', 'center');
      }
    } else {
      $('#message-display').html('<h1>*Must first select display and flex-direction properties</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
    }
  });
});

















