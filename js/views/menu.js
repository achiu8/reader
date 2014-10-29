app.views.menu = Backbone.View.extend({
  template: Handlebars.compile($('#tmpl-menu').html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({}));
  }
});
