(function(Todo) {
	Todo.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			log("Initializing Todo Application View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
			var template = Handlebars.templates["todo_workspace"];

			this.$el.html( template({  }) );
	
			return this;
		}
	});
	
	
})(loader.app("todo"));