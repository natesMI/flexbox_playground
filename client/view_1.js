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
    if(display === true){
      if(justifyContent['status']){
        $('#justify-content' + justifyContent['value']).css('background-color', '#ffffff');
      }
      $('#justify-content-flex-start').css('background-color', '#9b59b6');
      $('#container-one').css('justify-content', 'flex-start');
      justifyContent['status'] = true;
      justifyContent['value'] = '-flex-start';
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
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
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
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
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
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
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
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
    } else {
      $('#message-display').html('<h1>*Must first select display property</h1>')
        .show(1, function(){
          setTimeout(function(){
            $('#message-display').hide();
          }, 2000);
        });
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
      } else {
        $('#message-display').html('<h1>*Must first select display property</h1>')
          .show(1, function(){
            setTimeout(function(){
              $('#message-display').hide();
            }, 2000);
          });
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
      } else {
        $('#message-display').html('<h1>*Must first select display property</h1>')
          .show(1, function(){
            setTimeout(function(){
              $('#message-display').hide();
            }, 2000);
          });
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
      } else {
        $('#message-display').html('<h1>*Must first select display property</h1>')
          .show(1, function(){
            setTimeout(function(){
              $('#message-display').hide();
            }, 2000);
          });
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
      } else {
        $('#message-display').html('<h1>*Must first select display property</h1>')
          .show(1, function(){
            setTimeout(function(){
              $('#message-display').hide();
            }, 2000);
          });
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
      } else {
        $('#message-display').html('<h1>*Must first select display property</h1>')
          .show(1, function(){
            setTimeout(function(){
              $('#message-display').hide();
            }, 2000);
          });
      }
  });

});

















