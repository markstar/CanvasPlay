/**
 * Created by Mark Starling.
 * Date: 27/02/11
 * Time: 14:25
 */

Circle = function()
{
	this.initialise();
};

var p = Circle.prototype = new Shape();

p.Shape_initialise = p.initialise;

p.radius = null;

p.initialise = function()
{
	this.Shape_initialise();

	this.radius = 0;
};

p.update = function( context )
{
	context.globalAlpha = this.alpha;
	context.beginPath();
	context.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false );
	context.fillStyle = this.color;
	context.fill();
};