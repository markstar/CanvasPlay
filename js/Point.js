/**
 * Created by Mark Starling.
 * Date: 07/03/11
 * Time: 20:51
 */

Point = function( x, y )
{
	this.initialise( x, y );
};

var p = Point.prototype;

p.x = null;
p.y = null;

p.initialise = function( x, y )
{
	this.x = x;
	this.y = y;
};