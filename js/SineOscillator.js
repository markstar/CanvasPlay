/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

SineOscillator = function( target, property, frequency, min, max, offset )
{
	this.initialise( target, property, frequency, min, max, offset );
};

var p = SineOscillator.prototype;

p.target = null;
p.property = null;
p.frequency = null;
p.center = null;
p.range = null;
p.offset = null;
p.step = null;
p.amp = null;

p.initialise = function( target, property, frequency, min, max, offset )
{
	this.target = target;
	this.property = property;
	this.frequency = 1 / frequency;
	this.center = min + ( max - min ) / 2;
	this.range = max - min;
	this.offset = offset;
	this.step = 0;
	this.amp = 1;
};

p.run = function()
{
	var value = this.step + this.offset;
	value = value - (value | 0);

	this.target[this.property] = this.sineWave( value ) * this.range / 2 * this.amp + this.center;

	this.step += this.frequency;
	this.step = this.step + (this.step | 0);
};

p.sineWave = function( step )
{
	return Math.sin( Math.PI * 2 * step );
}