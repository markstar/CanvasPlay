/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

BehaviourManager = function()
{
	this.initialise();
};

var p = BehaviourManager.prototype;

p.behaviours = null;

p.initialise = function()
{
	this.behaviours = [];
};

p.update = function()
{
	for( var i = 0; i < this.behaviours.length; i++ )
	{
		this.behaviours[i].run();
	}
};

p.add = function( behaviour )
{
	this.behaviours.push( behaviour );
};

p.removeAllForTarget = function( target )
{
	for( var i = this.behaviours.length - 1; i > -1; i-- )
	{
		if( this.behaviours[i].target == target )
		{
			this.behaviours.splice( i, 1 );
		}
	}
};