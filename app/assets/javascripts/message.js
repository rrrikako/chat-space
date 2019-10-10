$(function(){
  function buildMessage(message){
    var image = message.image ? `<img class="lower-message__image" src=${message.image}>` : "";
    var html = `<div class="message">
                  <div class="message__user__name">
                    ${message.user_name}
                  </div>
                  <div class="message__created__at">
                    ${message.created_at}
                  </div>
                    <div class="message__content">
                      <p class="lower__message__content">
                        ${message.content}
                      </p>
                        ${image}
                    </div>
                </div>`
    return html;
   }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildMessage(data);
      $('.contents__messages').append(html);
    })
    .fail(function(data){
      alert('error');
    })
  })
})