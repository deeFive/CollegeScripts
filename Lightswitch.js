/* Place this script on what ever you want to be your lightswitch in the hierarchy drag the light onto 
   linkedlight. In the Hierarchy again click on the light you want to be turned on and off and tick it 
   to off play the scene and left click it to work
   
   Script made by Robert Hubbard  Credits where ever if you wish
*/

var linkedLight : Light;

function OnMouseDown() {
    linkedLight.enabled = !linkedLight.enabled;
}
