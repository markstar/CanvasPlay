/**
 * Created by Mark Starling.
 * Date: 03/03/11
 * Time: 21:48
 */

ObjectPool = function( classToPool, max )
{
	this.initialise( classToPool, max );
};

var p = ObjectPool.prototype;

p.classToPool = null;
p.max = null;
p.pool = null;

p.onCreateObject = function( object )
{
};

p.initialise = function( classToPool, max )
{
	this.classToPool = classToPool;
	this.max = max;
	this.pool = [];
};

p.release = function( swimmer )
{
	var pos = this.pool.indexOf( swimmer )
	if( pos != -1 )
	{
		this.pool.splice( pos, 1 );
	}
};

p.request = function()
{
	if( this.pool.length < this.max )
	{
		var swimmer = new this.classToPool();
		this.pool.push( swimmer );
		this.onCreateObject( swimmer );
		return swimmer;
	}
	else
	{
		return null;
	}
};

p.requestAll = function()
{
	while( this.pool.length < this.max )
	{
		this.request();
	}
};