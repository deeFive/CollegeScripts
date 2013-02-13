/* Download the stoplook script from https://github.com/rhubbard1995/CollegeScripts
   place Stop Look on your first person controller camera NOT THE FIRST PERSON CONTROLLER PREFAB
   now place this pause menu script onto the first person controller itself NOT THE CAMERA 
   goto play the scene and press escape key to test 
   Script coded by Robert Hubbard credits where ever you wish!
*/

var guiSkin: GUISkin;
var nativeVerticalResolution = 1200.0;
var isPaused : boolean = false;
 
Time.timeScale = 1.0;
 
function Update()
{
 
     if(Input.GetKeyDown("escape") && !isPaused)
   {
      print("Paused");
      Time.timeScale = 0.0;
      isPaused = true;
      Screen.lockCursor = false;
      GetComponent("MouseLook").enabled = false;
      GetComponent("CrossHair").enabled = false;
   }
   else if(Input.GetKeyDown("escape") && isPaused)
   {
      print("Unpaused");
      Time.timeScale = 1.0;
      isPaused = false;
      Screen.lockCursor = true;
      GetComponent("MouseLook").enabled = true;
      GetComponent("CrossHair").enabled = true;
          
   } 
}
 
function OnGUI ()
{
 
 
    GUI.skin = guiSkin;
 
    GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (Screen.height / nativeVerticalResolution, Screen.height / nativeVerticalResolution, 1)); 
 
 
    if(isPaused)
    {
      if(GUI.Button (Rect(950,290,200,80), "Credits"))
      {
         print("main menu");
         Application.LoadLevel(3);
      }
      if(GUI.Button (Rect(950,370,200,80), "Restart")) 
      {
         print("Restart");
         Application.LoadLevel(Application.loadedLevel);
      }
      if(GUI.Button (Rect(950,450,200,80), "Quit"))
      {
         print("main menu");
         Application.LoadLevel(0);
      }
   } 
 
 
}
 
 
@script AddComponentMenu ("Menu/Pause Menu")
