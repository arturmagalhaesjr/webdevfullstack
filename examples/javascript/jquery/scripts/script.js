var Error = {
  clear: function () {
    $('#errors').hide();
  },
  showMessage: function (msg) {
    $('#errors').html(msg).removeClass('hide').show();
  }
};

$('.form').submit(function (event) {
      event.preventDefault();
      Error.clear();

      var nome = $('input[name=nome]').val();
      var email = $('input[name=email]').val();

      $('input').parent().removeClass('has-error');
      // verifica se tem nome e sobrenome
      if(!nome.match(/\D+\s\D+/g)) {
          $('input[name=nome]').parent().addClass('has-error');
          Error.showMessage("Nome inválido");
          return false;
      }
      /** verifica se o e-mail é válido **/
      if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        $('input[name=email]').parent().addClass('has-error');
          Error.showMessage("E-mail inválido");
          return false;
      }

      var msg = $('<div></div>');
      msg.addClass('alert alert-success');
      msg.html('Cadastro efetuado!');
      $('.container').append(msg);
});
