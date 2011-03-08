/**
 * Created by Mark Starling.
 * Date: 28/02/11
 * Time: 08:30
 */

DisplayContainer = function()
{
	this.initialise();
};

var p = DisplayContainer.prototype = new DisplayObject();

p.DisplayObject_initialise = p.initialise;

p.children = null;

p.initialise = function()
{
	this.DisplayObject_initialise();

	this.children = [];
};

p.update = function( context )
{
	for( var i = 0; i < this.children.length; i++ )
	{
		this.children[i].alpha *= this.alpha;
		this.children[i].x += this.x;
		this.children[i].y += this.y;
		this.children[i].update( context );
		this.children[i].alpha /= this.alpha;
		this.children[i].x -= this.x;
		this.children[i].y -= this.y;
	}
};

p.addChild = function( child )
{
	this.children.push( child );
};

p.removeChild = function( child )
{
	var pos = this.children.indexOf( child )
	if( pos != -1 )
	{
		this.children.splice( pos, 1 );
	}
};

p.removeChildren = function()
{
	this.children.splice( 0, this.children.length );
};