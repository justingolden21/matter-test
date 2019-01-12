//https://github.com/liabru/matter-js/
//https://github.com/liabru/matter-js/wiki/Getting-started
//http://brm.io/matter-js/docs/classes/Body.html

// module aliases
let Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies,
	Body = Matter.Body;

let circleA;

window.onload = function() {

	// create an engine
	let engine = Engine.create();

	// create a renderer
	let render = Render.create({
		canvas:  document.getElementById('world'),
		engine: engine,
		options: {
			width: 800,
			height: 600,
			wireframes: false
		}
	});

	// create two boxes and a ground
	let boxA = Bodies.rectangle(400, 200, 80, 80, { isStatic: true, wireframes: true});
	let boxB = Bodies.rectangle(450, 50, 80, 80);
	circleA = Bodies.circle(600, 250, 25, {
		density: 0.04,
		friction: 0.1,
		frictionAir: 0.01,
		restitution: 0.8,
		render: {
			fillStyle: '#f66',
			strokeStyle: '#66f',
			lineWidth: 2
		}
	});
	let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

	// add all of the bodies to the world
	World.add(engine.world, [boxA, boxB, circleA, ground]);

	// run the engine
	Engine.run(engine);

	// run the renderer
	Render.run(render);

}

window.onkeyup = function(e) {
	let key = e.keyCode ? e.keyCode : e.which;
	if(key==37) {
		console.log('left');
		Body.applyForce(circleA, {x: circleA.position.x, y: circleA.position.y}, {x:-0.5, y:0});
	} else if(key==39) {
		console.log('right');
		Body.applyForce(circleA, {x: circleA.position.x, y: circleA.position.y}, {x:0.5, y:0});
	} else if(key==38) {
		console.log('up');
		Body.applyForce(circleA, {x: circleA.position.x, y: circleA.position.y}, {x:0, y:-2.5});
	}
}

