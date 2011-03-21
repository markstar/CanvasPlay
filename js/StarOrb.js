/**
 * Created by Mark Starling.
 * Date: 03/03/11
 * Time: 21:07
 */

StarOrb = function()
{
	this.initialise();
};

var p = StarOrb.prototype = new DisplayContainer();

p._color = null;
p.DisplayContainer_initialise = p.initialise;

p.initialise = function()
{
	this.DisplayContainer_initialise();
	
	this.color = "#000000";
};

p.__defineGetter__( "color", function()
{
	return this._color;
} );

p.__defineSetter__( "color", function( val )
{
	this._color = val;
	this.createChildren();
} );

p.createChildren = function()
{
	this.removeChildren();

	var child = new Star();
	child.radius = 1.5;
	child.innerRadius = 0.5;
	child.numPoints = 5;
	child.color = this.color;
	this.addChild( child );

	var child = new Star();
	child.radius = 3;
	child.innerRadius = 1.5;
	child.numPoints = 5;
	child.alpha = 0.2;
	child.color = this.color;
	this.addChild( child );
};