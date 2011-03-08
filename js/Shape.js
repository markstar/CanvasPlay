/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

Shape = function()
{
	this.initialise();
};

var p = Shape.prototype = new DisplayObject();

p.DisplayObject_initialise = p.initialise;

p.color = null;

p.initialise = function()
{
	this.DisplayObject_initialise();

	this.color = "#000000";
};