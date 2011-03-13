/**
 * Created by Mark Starling.
 * Date: 03/03/11
 * Time: 21:20
 */

Ticker = function()
{
	throw "Ticker cannot be instantiated.";
}

Ticker._listeners = [];
Ticker.interval = 1000/30;
Ticker.intervalID = null;

Ticker.add = function( listener )
{
	Ticker._listeners.push( listener );
}

Ticker.tick = function()
{
	for( var i = 0; i < Ticker._listeners.length; i++ )
	{
		Ticker._listeners[i].call( null );
	}
}

Ticker.start = function()
{
	if( Ticker.intervalID == null )
	{
		Ticker.intervalID = setInterval( Ticker.tick, Ticker.interval );
	}
}

Ticker.stop = function()
{
	clearInterval( Ticker.intervalID );
	Ticker.intervalID = null;
}