/* In unity goto edit >> project settings >> input Look where it says 17 and change it to 19
   call the 18th one E and open its minimenu by the little arrow in Name put E where i put a capital you should too
   put in Name E descriptive name E descriptive negative name E now in megative button put e in positive button
   put e and in Alt negative button put e and alt positive button put e
*/
/*
   In unity goto edit >> project settings >> input Look where it says 17 and change it to 19
   call the 19th one E and open its minimenu by the little arrow in Name put Q where i put a capital you should too
   put in Name Q descriptive name Q descriptive negative name Q now in megative button put q in positive button
   put q and in Alt negative button put q and alt positive button put q   
*/
/*
   Put this script on your picture frame. Click on your picture frame goto Component >> Physics >> Box Collider
   place box collider wherever you want make a new guiskin (Google if you dont know how) and place where it says
   Gui skin in the hierarchy on the image make an image in paint with the size (930 x 558) on one side put the
   larger image of the painting and on the other side place information about the painting who made it etc...
   Press 'E' to open information on painting and press Q to close it.
   
   
   Script made by Robert Hubbard  Credits where ever if you wish
*/


var showGUI : boolean = false;
var showpresse : boolean = false;
var newSkin : GUISkin;
var PaintingInfoImage : Texture2D;
private var presse : boolean = false;
private var turnofe : boolean = false;

  turnofe = true;

function OnTriggerEnter ()
{
	presse = true;
	showpresse = true;
	print("in trigger");
}


function OnTriggerExit ()
{
	showpresse = false;
}


function Update()
{
		if(presse){
		if (Input.GetButtonDown ("E")) 
		{
			showGUI  = true;
		}
	else
		if (Input.GetButtonDown ("Q"))
		{
			showGUI = false;	
		}
		}
}


function OnGUI() 
{
	 GUI.skin = newSkin;
	 if(showGUI)
	 {
	  GUI.Label (Rect (310,60,930,558), PaintingInfoImage);
	 }
	 if(showpresse)
	 {
     GUI.Button(Rect(630,0,340,35),"Press E to show information about this painting");
     }
}
