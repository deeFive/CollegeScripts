/****************************************
      Script coded by Robert Hubbard 
    Contact me with any information at
        rhubbard1995@hotmail.co.uk
****************************************/



var AngleX : float = 0.0;
var AngleY : float = 90.0;
var AngleZ : float = 0.0;

private var targetValue : float = 0.0;
private var currentValue : float = 0.0;
private var easting : float = 0.1;         //Changing this Determins the speed the door opens IE... 0.1 being slow and 1 being fast.

var Target : GameObject;

function Update() 
{

  currentValue = currentValue + (targetValue - currentValue) * easting;
	
	Target.transform.rotation = Quaternion.identity;
	Target.transform.Rotate(0, currentValue, 0);
	
}

function OnTriggerEnter (other : Collider) 
{
	targetValue = AngleY;
	currentValue =0;
}

function OnTriggerExit (other : Collider) 
{
	currentValue = AngleY;
	targetValue = 0.0;
}
