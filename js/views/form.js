app.views.form = Backbone.View.extend({
  index: false,
  
  events: {
    'click button': 'save'
  },

  initialize: function() {
    this.render();
  },

  render: function(index) {
    var template = Handlebars.compile($('#tmpl-form').html());
    var output;
    if (typeof index == 'undefined') {
      this.index = false;
      output = template({ title: '' });
    } else {
      this.index = parseInt(index);
      this.todoForEditing = this.model.at(this.index);
      output = template({
        title: this.todoForEditing.get('title')
      });
    }

    this.$el.html(output);
    this.$el.find('textarea').focus();
    this.delegateEvents();
    return this;
  },
  
  save: function(e) {
    e.preventDefault();

    var title = this.$el.find('textarea').val();
    if (title == '') {
      alert('Empty textarea!'); return;
    }

    if (this.index !== false) {
      this.todoForEditing.set('title', title);
    } else {
      this.model.add({ title: title });
    }

    this.trigger('saved');
  }
});
