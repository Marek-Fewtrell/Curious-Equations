export default function() {
	this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
	
	
	
	let equations = [
		{
			type: "equation",
			id: "volume-cylinder",
			attributes: {
				title: "Cylinder Volume Equation",
				equation: "Pi * r squared * height",
				description: "Calc the total volume of something",
				explanation: "explanation",
				genre: "volume"
			}
		},
		{
			type: "equation",
			id: "volume-cone",
			attributes: {
				title: "Cone Volume Equation",
				equation: "Pi * r squared * height",
				description: "Calc the total volume of something",
				explanation: "explanation",
				genre: "volume"
			}
		},
		{
			type: "equation",
			id: "volume-box",
			attributes: {
				title: "Box Volume Equation",
				equation: "width * height * depth",
				description: "Calc the total volume of something",
				explanation: "explanation",
				genre: "volume"
			}
		},
		{
			type: "equation",
			id: "area-circle",
			attributes: {
				title: "Circle Area Equation",
				equation: "Pi * r squared",
				description: "Calc the total volume of something",
				explanation: "explanation",
				genre: "area"
			}
		},
		{
			type: "equation",
			id: "area-sqaure",
			attributes: {
				title: "Square Area Equation",
				equation: "width * height",
				description: "Calc the total volume of something",
				explanation: "explanation",
				genre: "area"
			}
		},
		{
			type: "equation",
			id: "triangle-pythag",
			attributes: {
				title: "Pythagoras Equation",
				equation: "a * b = c",
				description: "Calc the total volume of something",
				explanation: "explanation",
				genre: "triangle"
			}
		}
	];
		
		this.get('/equations', function(db, request) {
			if (request.queryParams.genre !== undefined) {
				let filteredEquations = equations.filter(function(i) {
					return i.attributes.genre.toLowerCase().indexOf(request.queryParams.genre.toLowerCase()) !== -1;
				});
				return  { data: filteredEquations };
			} else {
				return {data: equations };
			}
		});
		
		this.get('/equations/:id', function(db, request) {
			return { data: equations.find((equation) => request.params.id === equation.id)};
		});
		
		/*return {
			data: [
				{
					type: "equations",
					id: "Volume",
					attributes: {
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
					}
				},
				{
					type: "equations",
					id: "Area",
					attributes: {
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
					}
				},
				{
					type: "equations",
					id: "Triangles",
					attributes: {
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
				}
			]
		};*/
	
	
		/*return {
			data: [
				{
					type: "equation",
					id: "cylinder",
					attributes: {
						equation: "Pi * r squared * height",
						description: "Calc the total volume of something",
						explanation: ""
					}
				}
			]
		};*/
		
		/*return {
			data: [
			{
				type: "equation",
				id: "Volume",
				attributes: {
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
				}
			},
			{
				type: "equation",
				id: "Area",
				attributes: {
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
				}
			},
			{
				type: "equation",
				id: "Triangles",
				attributes: {
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
			}
			]
		};*/
	
}
