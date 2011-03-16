/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

TriggerManager = function()
{
	this.initialise();
};

var p = TriggerManager.prototype;

p.triggers = null;

p.initialise = function()
{
	this.triggers = [];
};

p.update = function()
{
	for( var i = 0; i < this.triggers.length; i++ )
	{
		this.triggers[i].run();
	}
};

p.add = function( trigger )
{
	this.triggers.push( trigger );
};

p.removeAllForTarget = function( target )
{
	for( var i = this.triggers.length - 1; i > -1; i-- )
	{
		if( this.triggers[i].target == target )
		{
			this.triggers.splice( i, 1 );
		}
	}
};