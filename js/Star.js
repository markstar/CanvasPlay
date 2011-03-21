/**
 * Created by Mark Starling.
 * Date: 27/02/11
 * Time: 14:25
 */

Star = function()
{
	this.initialise();
};

var p = Star.prototype = new Shape();

p.Shape_initialise = p.initialise;

p.radius = null;
p.innerRadius = null;
p.numPoints = null;

p.initialise = function()
{
	this.Shape_initialise();

	this.radius = 0;
	this.innerRadius = 0;
	this.numPoints = 0;
};

p.update = function( context )
{
	context.globalAlpha = this.alpha;
	context.beginPath();

	var angleStep = Math.PI / this.numPoints;
	var currentAngle = -Math.PI/2;
	var radius = this.scale * this.radius;
	var innerRadius = this.scale * this.innerRadius;

	context.moveTo( this.x + Math.cos( currentAngle ) * radius, this.y + Math.sin( currentAngle ) * radius );

	for( var i = 0; i < this.numPoints; i++ )
	{
		currentAngle += angleStep;
		context.lineTo( this.x + Math.cos( currentAngle ) * innerRadius, this.y + Math.sin( currentAngle ) * innerRadius );
		currentAngle += angleStep;
		context.lineTo( this.x + Math.cos( currentAngle ) * radius, this.y + Math.sin( currentAngle ) * radius );
	}

	context.fillStyle = this.color;
	context.fill();
};