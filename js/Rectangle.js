/**
 * Created by Mark Starling.
 * Date: 27/02/11
 * Time: 14:25
 */

Rectangle = function()
{
	this.initialise();
};

var p = Rectangle.prototype = new Shape();

p.Shape_initialise = p.initialise;

p.width = null;
p.height = null;

p.initialise = function()
{
	this.Shape_initialise();

	this.width = 0;
	this.height = 0;
};

p.update = function( context )
{
	context.globalAlpha = this.alpha;
	context.beginPath();
	context.rect( this.x, this.y, this.width, this.height );
	context.fillStyle = this.color;
	context.fill();
};