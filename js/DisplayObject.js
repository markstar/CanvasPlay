/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

DisplayObject = function()
{
	this.initialise();
};

var p = DisplayObject.prototype;

p.alpha = null;
p.scale = null;
p.x = null;
p.y = null;

p.initialise = function()
{
	this.alpha = 1;
	this.scale = 1;
	this.x = 0;
	this.y = 0;
};

p.update = function( context )
{
};