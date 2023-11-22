import Images from "../lib/Images.js";

export const images = new Images();
export const resetProgress = false;
// Load JSON text from server hosted file and return JSON parsed object
export function loadJSON(filePath) {
  // Load json file;
  var json = loadTextFileAjaxSync(filePath, "application/json");
  // Parse json
  return JSON.parse(json);
}
export const gameSpeed = localStorage.getItem('gameSpeed') ?? 0.5; // Change this to change the speed of the game
localStorage.setItem('gameSpeed', gameSpeed);

// Load text with Ajax synchronously: takes path to file and optional MIME type
function loadTextFileAjaxSync(filePath, mimeType) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
    return xmlhttp.responseText;
  }
  else {
    // TODO Throw exception
    return null;
  }
}