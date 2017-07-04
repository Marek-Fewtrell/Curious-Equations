import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	equation: DS.attr(),
	description: DS.attr(),
	explanation: DS.attr(),
	genre: DS.attr()
});
