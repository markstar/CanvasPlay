/**
 * Created by Mark Starling.
 * Date: 07/03/11
 * Time: 20:52
 */

ThreeDPoint = function( x, y, z )
{
	this.initialise( x, y, z );
};

var p = ThreeDPoint.prototype = new Point();

p.Point_initialise = p.initialise;

p.z = null;

p.initialise = function( x, y, z )
{
	this.Point_initialise( x, y );
	this.z = z;
};