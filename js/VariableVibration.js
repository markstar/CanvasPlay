/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

VariableVibration = function( target, property, spring, ease, range )
{
	this.initialise( target, property, spring, ease, range );
};

var p = VariableVibration.prototype;

p.target = null;
p.property = null;
p.spring = null;
p.ease = null;
p.range = null;
p.speed = null;

p.initialise = function( target, property, spring, ease, range )
{
	this.target = target;
	this.property = property;
	this.spring = spring;
	this.ease = ease;
	this.range = range;
	this.speed = 0;
};

p.run = function()
{
	var value = this.target[ this.property ];

	var goal = value + ( Math.random() * this.range ) - (this.range / 2);
	this.speed = ( this.speed * this.spring ) + ( goal - value ) * this.ease;

	this.target[ this.property ] = value + this.speed;
};