$(document).on('turbolinks:load', function(){
  function buildMessage(message){
    var image = message.image.url ? `<img class="lower-message__image" src=${message.image.url}>` : "";
    var html = `<div class="message" data-id="${message.id}">
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
      $('.button').attr('disabled', false);
      $("#new_message")[0].reset();
      var target = $('.message').last();
      $("html,body").animate({scrollTop:target.offset().top});
    })
    .fail(function(){
      alert('error');
    });
  });
})