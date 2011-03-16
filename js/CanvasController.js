/**
 * Created by Mark Starling.
 * Date: 27/02/11
 * Time: 14:01
 */

CanvasController = function( canvas )
{
	this.initialise( canvas );
};

var p = CanvasController.prototype;

p.canvas = null;
p.context = null;
p.children = null;
p.capture = null;

p.initialise = function( canvas )
{
	this.canvas = canvas;
	this.context = canvas.getContext( "2d" );
	this.children = [];
	this.capture = false;
};

p.update = function()
{
	if( !this.capture )
	{
		this.clear();
	}

	for( var i = 0; i < this.children.length; i++ )
	{
		this.children[i].update( this.context );
	}
};

p.clear = function()
{
	this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
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