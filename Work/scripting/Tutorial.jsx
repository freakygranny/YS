//Save selected layer to variable:
var originalStem = app.activeDocument.activeLayer;

//Ask user for input by showing prompt box and save inputted value to variable:
var stemsAmount = prompt ("How many?", 12, "Processing "+originalStem.name);

//Calculate the rotation angle:
var angle = 360 / parseInt(stemsAmount);

//Create a group for stems
var stemsGroup = app.activeDocument.layerSets.add();
stemsGroup.name = originalStem.name + " ("+stemsAmount+" stems)";

//Duplicate and rotate layers
for(var i=1; i < stemsAmount; i++){
	var newStem = originalStem.duplicate();

	//Rotate new layer
	newStem.rotate(angle * i, AnchorPosition.BOTTOMCENTER);


	//Add index to new layers
	newStem.name = originalStem.name + " " + (i+1);

	//Place original layer in group
	originalStem.move(stemsGroup, ElementPlacement.INSIDE);

	//Place new layer inside stems group
	newStem.move(stemsGroup, ElementPlacement.PLACEATEND);
};