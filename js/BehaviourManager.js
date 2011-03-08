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
}