var Messages = {
    endPoint: "http://socialbase.magalhaes.tech/api",
    init: function () {
        this.getMessages();
        setInterval(function () {
          Messages.getMessages();
        }, 10000);

        $('.form-add').submit(function (event) {
          event.preventDefault();
          Messages.postAction();
          return false;
        });
    },

    getMessages: function () {

      $('#loading').html('Carregando...').fadeIn();

      $.get(this.endPoint + "/messages.json?limit=10000", function (r) {
            r.reverse();

            $('#loading').fadeOut();

            var list = $('<ul></ul>');
            list.addClass('list-unstyled');
            list.attr('id', 'list-messages');

            for(var i in r) {
                list.append(Messages.createMessageItem(r[i]));
            }
            $('.messages').html(list);
        });
    },

    createMessageItem: function (obj) {
      var item = $('<li></li>');

      var message = $('<p></p>');
      message.html(obj.message);

      var buttonDelete = $('<a></a>');
      buttonDelete.addClass('text-danger text-xs').html('<i class="glyphicon glyphicon-remove"></i>').click(function(){
        Messages.deleteAction(obj);
      });

      item.append(buttonDelete).append(message);

      return item;
    },

    postAction: function (obj) {
        var message = $('#message').val();
        // POST /messages.json parametro message
    },

    deleteAction: function () {
        console.info("Excluiu");
    }
}



$(function () {
    Messages.init();
});
