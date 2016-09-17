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
    } 
  });

  $('#justify-content-flex-start').on('click', function(){
    if(display === true){
      if(justifyContent['status']){
        $('#justify-content' + justifyContent['value']).css('background-color', '#ffffff');
      }
      $('#justify-content-flex-start').css('background-color', '#9b59b6');
      $('#container-one').css('justify-content', 'flex-start');
      justifyContent['status'] = true;
      justifyContent['value'] = '-flex-start';
    } 
  });

  $('#justify-content-flex-end').on('click', function(){
    if(display === true){
      if(justifyContent['status']){
        $('#justify-content' + justifyContent['value']).css('background-color', '#ffffff');
      }
      $('#justify-content-flex-end').css('background-color', '#9b59b6');
      $('#container-one').css('justify-content', 'flex-end');
      justifyContent['status'] = true;
      justifyContent['value'] = '-flex-end';
    } 
  });

  $('#justify-content-center').on('click', function(){
    if(display === true){
      if(justifyContent['status']){
        $('#justify-content' + justifyContent['value']).css('background-color', '#ffffff');
      }
      $('#justify-content-center').css('background-color', '#9b59b6');
      $('#container-one').css('justify-content', 'center');
      justifyContent['status'] = true;
      justifyContent['value'] = '-center';
    } 
  });

  $('#justify-content-space-between').on('click', function(){
    if(display === true){
      if(justifyContent['status']){
        $('#justify-content' + justifyContent['value']).css('background-color', '#ffffff');
      }
      $('#justify-content-space-between').css('background-color', '#9b59b6');
      $('#container-one').css('justify-content', 'space-between');
      justifyContent['status'] = true;
      justifyContent['value'] = '-space-between';
    } 
  });

  $('#justify-content-space-around').on('click', function(){
    if(display === true){
      if(justifyContent['status']){
        $('#justify-content' + justifyContent['value']).css('background-color', '#ffffff');
      }
      $('#justify-content-space-around').css('background-color', '#9b59b6');
      $('#container-one').css('justify-content', 'space-around');
      justifyContent['status'] = true;
      justifyContent['value'] = '-space-around';
    } 
  });

  $('#align-items-flex-start').on('click', function(){
      if(display === true){
        if(alignItems['status']){
          $('#align-items' + alignItems['value']).css('background-color', '#ffffff');
        }
        $('#align-items-flex-start').css('background-color', '#9b59b6');
        $('#container-one').css('align-items', 'flex-start');
        alignItems['status'] = true;
        alignItems['value'] = '-flex-start';
      } 
  });

  $('#align-items-flex-end').on('click', function(){
      if(display === true){
        if(alignItems['status']){
          $('#align-items' + alignItems['value']).css('background-color', '#ffffff');
        }
        $('#align-items-flex-end').css('background-color', '#9b59b6');
        $('#container-one').css('align-items', 'flex-end');
        alignItems['status'] = true;
        alignItems['value'] = '-flex-end';
      } 
  });

  $('#align-items-center').on('click', function(){
      if(display === true){
        if(alignItems['status']){
          $('#align-items' + alignItems['value']).css('background-color', '#ffffff');
        }
        $('#align-items-center').css('background-color', '#9b59b6');
        $('#container-one').css('align-items', 'center');
        alignItems['status'] = true;
        alignItems['value'] = '-center';
      } 
  });

  $('#align-items-baseline').on('click', function(){
      if(display === true){
        if(alignItems['status']){
          $('#align-items' + alignItems['value']).css('background-color', '#ffffff');
        }
        $('#align-items-baseline').css('background-color', '#9b59b6');
        $('#container-one').css('align-items', 'baseline');
        alignItems['status'] = true;
        alignItems['value'] = '-baseline';
      }
  });

  $('#align-items-stretch').on('click', function(){
      if(display === true){
        if(alignItems['status']){
          $('#align-items' + alignItems['value']).css('background-color', '#ffffff');
        }
        $('#align-items-stretch').css('background-color', '#9b59b6');
        $('#container-one').css('align-items', 'stretch');
        alignItems['status'] = true;
        alignItems['value'] = '-stretch';
      } 
  });

});

















