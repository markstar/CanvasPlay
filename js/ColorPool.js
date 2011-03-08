/**
 * Created by Mark Starling.
 * Date: 03/03/11
 * Time: 21:35
 */

ColorPool = function()
{
	this.initialise( arguments );
};

var p = ColorPool.prototype;

p.colors = null;

p.initialise = function( colors )
{
	this.colors = Array.prototype.slice.call( colors );
};

p.getColor = function()
{
	return this.colors[ Math.random() * this.colors.length | 0 ];
}