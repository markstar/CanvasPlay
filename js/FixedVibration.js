/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

FixedVibration = function( target, property, spring, ease, min, max, isRelative )
{
	this.initialise( target, property, spring, ease, min, max, isRelative );
};

var p = FixedVibration.prototype;

p.target = null;
p.property = null;
p.spring = null;
p.ease = null;
p.min = null;
p.max = null;
p.range = null;
p.speed = null;

p.initialise = function( target, property, spring, ease, min, max, isRelative )
{
	if( isRelative )
	{
		min += target[ property ];
		max += target[ property ];
	}

	this.target = target;
	this.property = property;
	this.spring = spring;
	this.ease = ease;
	this.min = min;
	this.max = max;
	this.range = max - min;
	this.speed = 0;
};

p.run = function()
{
	var value = this.target[this.property];

	var goal = this.min + ( Math.random() * this.range );
	this.speed = ( this.speed * this.spring ) + ( goal - value ) * this.ease;

	this.target[ this.property ] = value + this.speed;
};