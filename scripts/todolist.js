$(document).ready(function() {

  if (localStorage.getItem('todolist') !== null) {
    $('#todoList').html(localStorage.getItem('todolist'));
  }

  console.log($('#todoList li').length)
  if($('#todoList li').length < 1) {
    $('.delAll').hide();
  }
  

  

  $('#add').on('click', function() {
    

    if ($('#todoText').val() === '') {
      return false;
    }

    var todoText = $('#todoText').val();

    $('#todoList').prepend('<section class="todoEntry"><li>' + todoText + '</li><span class="delete">x</span></section>');
    
     console.log($('#todoList li').length);
    
    if($('#todoList li').length>1){
      $('.delAll').fadeIn();
    } else {
      $('.delAll').fadeOut();
    }

    localStorage.setItem('todolist', $('#todoList').html());
    $('#todoText').val('');
  });


  $('#todoList').on('click', 'li', function() {

    $(this).toggleClass('crossedOut');

    if ($(this).hasClass('crossedOut')) {
      $(this).parent().appendTo('#todoList');
    } else {
      $(this).parent().prependTo('#todoList');
    }

    localStorage.setItem('todolist', $('#todoList').html());
  });

  $('.delete').hide();
  

  $('#todoList').on('mouseenter', '.todoEntry', function() {
    $(this).find('span').show();
  });
  $('#todoList').on('mouseleave', '.todoEntry', function() {
    $(this).find('span').hide();
  });


  $('#todoList').on('click', '.delete', function() {
    

  $(this).parent().find('li').hide('slow', function() {
      $(this).parent().find('li').remove();
    });

    $(this).hide('slow', function() {
      $(this).remove();
      localStorage.setItem('todolist', $('#todoList').html());
    });

    console.log($('#todoList li').length);
    if($('#todoList li').length<=2){
      $('.delAll').fadeOut();
    } else {
      $('.delAll').fadeIn();
    }
  });
  
  $('#clear').on('click', function(){
    
      $('#todoList li').hide('slow', function() {
      $('#todoList').empty();
      $('.delAll').hide();  localStorage.setItem('todolist', $('#todoList').html());
    });
     
    });

  $('#todoText').keypress(function(e) {
    if (e.which === 13) {
      $('#add').click();
    }
  });

});