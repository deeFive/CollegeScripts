/*PUT DOOR IN LEVEL
  CREATE EMPTY GAME OBJECT
  PUT WHERE HINGE SHOULD BE ON DOOR
  MAKE A CUBE PUT IT IN DOOR AND MAKE MASSIVE TURN OFF MESH RENDERER AND TICK IS TRIGGER CALL IT TRIGGER
  CREATE ANOTHER EMPTY GAME OBJECT AND CALL IT DOOR_BASE
  DRAG DOOR OVER HINGE MAKING IT A PARENT
  DRAG HINGE AND DOOR PARENT INTO DOOR_BASE
  AND DRAG TRIGGER INTO DOOR_BASE
  INSERT CODE ONTO TRIGGER
  DRAG HINGE WITH DOOR AS CHILD INTO SCRIPT IN INSPECTOR
  AND WALK UP TO THE DOOR AND SEE IF IT OPENS IF IT OPENS THE WRONG WAY CHANGE ANGLE-X TO -90 DEGREES
  
     Script coded by Robert Hubbard credits where ever you wish!
*/


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
