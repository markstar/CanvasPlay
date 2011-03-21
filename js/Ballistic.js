/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

Ballistic = function( target, drag, minForce, maxForce, gravityForce, gravityAngle )
{
	this.initialise( target, drag, minForce, maxForce, gravityForce, gravityAngle );
};

var p = Ballistic.prototype;

p.target = null;
p.drag = null;
p.velocity = null;
p.gravityVelocity = null;

p.initialise = function( target, drag, minForce, maxForce, gravityForce, gravityAngle )
{
	//var angle = ( Math.PI / 2 ) * Math.random() - Math.P;

	var angle = ( Math.PI * 1.35 ) + ( Math.PI * 0.3 ) * Math.random();
	var mass = Math.random();

	target.scale = mass * 4;

	var force = minForce + ( ( 1 - mass ) * ( maxForce - minForce ) );

	this.target = target;
	this.drag = drag;

	this.gravityVelocity = new Point( 0, 0 );
	this.gravityVelocity.x = Math.cos( gravityAngle * Math.PI / 180 ) * gravityForce;
	this.gravityVelocity.y = Math.sin( gravityAngle * Math.PI / 180 ) * gravityForce;

	this.velocity = new Point( 0, 0 );
	this.velocity.x = force * Math.cos( angle );
	this.velocity.y = force * Math.sin( angle );
};

p.run = function()
{
	this.velocity.x += this.gravityVelocity.x;
	this.velocity.y += this.gravityVelocity.y;

	this.velocity.x *= this.drag;
	this.velocity.y *= this.drag;

	this.target.x += this.velocity.x;
	this.target.y += this.velocity.y;
};