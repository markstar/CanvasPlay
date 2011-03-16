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
	var originalAlpha, originalScale, originalX, originalY;
	for( var i = 0; i < this.children.length; i++ )
	{
		originalAlpha = this.children[i].alpha;
		originalScale = this.children[i].scale;
		originalX = this.children[i].x;
		originalY = this.children[i].y;

		this.children[i].alpha *= this.alpha;
		this.children[i].scale *= this.scale;
		this.children[i].x += this.x;
		this.children[i].y += this.y;
		this.children[i].update( context );
		this.children[i].alpha = originalAlpha;
		this.children[i].scale = originalScale;
		this.children[i].x = originalX;
		this.children[i].y = originalY;
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