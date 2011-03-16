/**
 * Created by Mark Starling.
 * Date: 15/03/11
 * Time: 19:54
 */

Bounds = function( x, y, width, height )
{
	this.initialise( x, y, width, height );
};

var p = Bounds.prototype = new Point();

p.Point_initialise = p.initialise;

p.width = null;
p.height = null;

p.initialise = function( x, y, width, height )
{
	this.Point_initialise( x, y );
	this.width = width;
	this.height = height;
};