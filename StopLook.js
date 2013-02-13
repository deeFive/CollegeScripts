/*  download pause menu for this to work
   Script coded by Robert Hubbard credits where ever you wish!
*/

var isPaused : boolean = false;
 
 
 
 
function Update()
{
 
     if(Input.GetKeyDown("escape") && !isPaused)
   {
      print("Paused");
      Time.timeScale = 0.0;
      isPaused = true;
      Screen.lockCursor = false;
      GetComponent("MouseLook").enabled = false;
   }
   else if(Input.GetKeyDown("escape") && isPaused)
   {
      print("Unpaused");
      Time.timeScale = 1.0;
      isPaused = false;
      Screen.lockCursor = true;
      GetComponent("MouseLook").enabled = true;
          
   } 
}
