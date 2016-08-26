$( document ).ready(function() {

  var viewMap_1 = {
    display: false,
    flex_direction: {
      status: false,
      options: ['', 'row', 'column', 'row-reverse', 'column-reverse']
    },
    justify_content: {
      status: false,
      options: ['', 'flex-start', 'flex-end', 'center', 'space-around', 'space-between']
    },
    align_items: {
      status: false,
      options: ['', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
    }
  };

  $('#display-flex').on('click', function(){
    if(viewMap_1['display']){
      viewMap_1['display'] = false;
      $('#display-flex').css('background-color', '#ffffff');
      $('#container-one').css('display', '');
    } else {
      viewMap_1['display'] = true;
      $('#display-flex').css('background-color', '#27ae60');
      $('#container-one').css('display', 'flex');
    }
  });

  $('#flex-direction-row').on('click', function(){
    if(viewMap_1['display']){
      if(viewMap_1['flex_direction']['status']){
        viewMap_1['flex_direction']['status'] = false;
        $('#flex-direction-row').css('background-color', '#ffffff');
        $('#container-one').css('flex-direction', '');
      } else {
        viewMap_1['flex_direction']['status'] = true;
        $('#flex-direction-row').css('background-color', '#27ae60');
        $('#container-one').css('flex-direction', 'row');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

  $('#flex-direction-column').on('click', function(){
    if(viewMap_1['display']){
      if(viewMap_1['flex_direction']['status']){
        viewMap_1['flex_direction']['status'] = false;
        $('#flex-direction-column').css('background-color', '#ffffff');
        $('#container-one').css('flex-direction', '');
      } else {
        viewMap_1['flex_direction']['status'] = true;
        $('#flex-direction-column').css('background-color', '#27ae60');
        $('#container-one').css('flex-direction', 'column');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

  $('#justify-content').on('click', function(){
    if(viewMap_1['display']){
      if(viewMap_1['justify_content']['status']){
        viewMap_1['justify_content']['status'] = false;
        $('#justify-content').css('background-color', '#34495e');
        $('#container-one').css('justify-content', '');
      } else {
        viewMap_1['justify_content']['status'] = true;
        $('#justify-content').css('background-color', '#1abc9c');
        $('#container-one').css('justify-content', 'center');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });

  $('#align-items').on('click', function(){
    if(viewMap_1['display']){
      if(viewMap_1['align_items']['status']){
        viewMap_1['align_items']['status'] = false;
        $('#align-items').css('background-color', '#34495e');
        $('#container-one').css('align-items', '');
      } else {
        viewMap_1['align_items']['status'] = true;
        $('#align-items').css('background-color', '#1abc9c');
        $('#container-one').css('align-items', 'center');
      }
    } else {
      $('#css-1').html('<h3>Must first toggle display property</h3>');
    }
  });
});

















