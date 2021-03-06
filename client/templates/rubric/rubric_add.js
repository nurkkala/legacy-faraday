Template.rubricAdd.events({
  'submit form': function(e) {
	e.preventDefault();

	var rubric = {
	  name: $(e.target).find('[name=name]').val()
	};

	Meteor.call('rubricInsert', rubric, function(error, result) {
	  if (error) {
		return alert(error.reason);
	  }

	  Router.go('rubricDetail', {_id: result._id});
	});
  }
});
