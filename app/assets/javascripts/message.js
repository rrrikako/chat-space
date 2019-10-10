$(function(){
  $('#message_content').on('submit', function(e){
    e.preventDefault();
    console.log(this);
  })
})