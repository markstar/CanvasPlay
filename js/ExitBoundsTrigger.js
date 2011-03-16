/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

ExitBoundsTrigger = function( target, bounds, callback )
{
	this.initialise( target, bounds, callback );
};

var p = ExitBoundsTrigger.prototype;

p.target = null;
p.bounds = null;
p.callback = null;

p.initialise = function( target, bounds, callback )
{
	this.target = target;
	this.bounds = bounds;
	this.callback = callback;
};

p.run = function()
{
	var trigger = false;

	if( this.target.x < bounds.x )
	{
		trigger = true;
	}
	if( this.target.y < bounds.y )
	{
		trigger = true;
	}
	if( this.target.x > bounds.x + bounds.width )
	{
		trigger = true;
	}
	if( this.target.y > bounds.y + bounds.height )
	{
		trigger = true;
	}

	if( trigger )
	{
		this.callback( this.target );
	}
};