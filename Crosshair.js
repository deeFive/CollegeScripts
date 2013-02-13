/* Make a crosshair texture in photoshop and remove the white backround making it transparent place the
   crosshair script on the first person controller (Player) and drag your texture onto where it says texture
   in the hierachy play the scene theres your cross hair ps you might want to press Escape key or 
   (whatever that key is on a damn mac) to quit the scene from playing add my pause menu for wasy close and 
   replay
   
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
