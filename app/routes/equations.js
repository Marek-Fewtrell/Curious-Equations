import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		//return ['Volume', 'Area', 'Pythagoras', 'Maths Stuff'];
		
		/*return [
			{
				title: "Volume Equation",
				equation: "width X height X depth",
				description: "Calc the total volume of something",
				genre: "",
				tags: ""
			},
			{
				title: "Area Equation",
				equation: "width X height",
				description: "Calc the total area of something",
				genre: "",
				tags: ""
			},
			{
				title: "Pythagoras Theorem",
				equation: "a * b = c",
				description: "Figure out triangle stuff",
				genre: "",
				tags: ""
			},
			{
				title: "Maths Stuff Equation",
				equation: "math * math",
				description: "Calc math based stuff",
				genre: "",
				tags: ""
			}
		];*/
		
		return [
			{
				genre: "Volume",
				equations: [
					{
						title: "Cylinder",
						equation: "Pi * r squared * height",
						description: "Calc the total volume of something",
						explanation: ""
					},
					{
						title: "Cone",
						equation: "Pi * r squared * height",
						description: "Calc the total volume of something",
						explanation: ""
					},
					{
						title: "Box",
						equation: "width X height X depth",
						description: "Calc the total volume of something",
						explanation: ""
					}
				]
			},
			{
				genre: "Area",
				equations: [
					{
						title: "Circle",
						equation: "pi * r squared",
						description: "Calc the total volume of something",
						explanation: ""
					},
					{
						title: "Square",
						equation: "width * height",
						description: "Calc the total volume of something",
						explanation: ""
					}
				]
			},
			{
				genre: "Triangles",
				equations: [
					{
						title: "Pythagoras",
						equation: "a * b = c",
						description: "Calc the total volume of something",
						explanation: ""
					}
				]
			}
			
		];
		
	}
	
});
