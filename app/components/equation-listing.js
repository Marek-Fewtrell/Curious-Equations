import Ember from 'ember';

export default Ember.Component.extend({
	bravo: false,
	actions: {
		alertSomething() {
			alert(this.bravo);
		}
	}
});
