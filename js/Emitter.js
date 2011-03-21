/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

Emitter = function( target, drag, minScale, maxScale, minForce, maxForce, emitMinAngle, emitMaxAngle, gravityForce, gravityAngle )
{
	this.initialise( target, drag, minScale, maxScale, minForce, maxForce, emitMinAngle, emitMaxAngle, gravityForce, gravityAngle );
};

var p = Emitter.prototype;

p.target = null;
p.drag = null;
p.velocity = null;
p.gravityVelocity = null;

p.initialise = function( target, drag, minScale, maxScale, minForce, maxForce, emitMinAngle, emitMaxAngle, gravityForce, gravityAngle )
{
	var angle = emitMinAngle + ( emitMaxAngle - emitMinAngle ) * Math.random();
	var mass = Math.random();

	target.scale = mass * ( maxScale - minScale ) + minScale;

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