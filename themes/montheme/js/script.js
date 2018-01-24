( function() {
  var controller = {
    init: function(){
      controller.setup();
    },

    setup : function(){
      menu.init();
    }
  }

  var menu = {
    init : function(){
      menu.items = {
        firstDiv : $('#primary-menu'),
        Ul : $('#primary-menu ul')
      };

      menu.setup();
    },

    setup : function(){
      menu.items.firstDiv.addClass('navbar-header');
      menu.items.Ul.addClass('nav navbar-nav');
    }
  }

  $(document).ready(controller.init);
} )();
