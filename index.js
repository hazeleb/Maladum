// Check if the user is accessing the page on a mobile device
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var areas = document.getElementsByTagName('area'),
    selectContentC = document.getElementById('mySelectImagesC'),
    selectContentT = document.getElementById('mySelectImagesT'),
    selectmapinfo = document.getElementById('mapinfo'),
    bubble        = document.getElementById('myBubble'),
    bubbleContent = document.getElementById('myBubbleContent'),
    bubbleClose   = document.getElementById('myBubbleCloseButton');

const dropdownC = document.getElementById('character');
const dropdownT = document.getElementById('trade');

dropdownC.addEventListener('change', function() {
  const selectedValueC = dropdownC.value;
  const selectedValueT = dropdownT.value;
  var contentC = myData[selectedValueC];
  var contentT = myData[selectedValueT];
  if (isMobile) {
    selectmapinfo.innerHTML = contentC.mobile_map + contentT.mobile_map;
    selectContentC.innerHTML = 
    `
    <img id="${selectedValueC}" class="myCharImage_mobile" src="images/characters/${selectedValueC}.jpg" usemap="#${selectedValueC}" />
    ` ;
  } else {
    selectmapinfo.innerHTML = contentC.map + contentT.map;
    selectContentC.innerHTML = 
    `
    <img id="${selectedValueC}" class="myCharImage" src="images/characters/${selectedValueC}.jpg" usemap="#${selectedValueC}" />
    ` ;
  }
  // On click of an area, open popup
  for(var i=0, l=areas.length; i<l; i++) {
    areas[i].addEventListener('click', openBubble, false);
  }
});  

dropdownT.addEventListener('change', function() {
  const selectedValueC = dropdownC.value;
  const selectedValueT = dropdownT.value;
  var contentC = myData[selectedValueC];
  var contentT = myData[selectedValueT];
  if (isMobile) {
    selectmapinfo.innerHTML = contentC.mobile_map + contentT.mobile_map;
    selectContentT.innerHTML = 
    `
    <img id= "${selectedValueT}" class="myTradeImage_mobile" src="images/trades/${selectedValueT}.jpg" usemap="#${selectedValueT}" />
  `;
  } else {
    selectmapinfo.innerHTML = contentC.map + contentT.map;
    selectContentT.innerHTML = 
    `
    <img id= "${selectedValueT}" class="myTradeImage" src="images/trades/${selectedValueT}.jpg" usemap="#${selectedValueT}" />
    `;
  }
  // On click of an area, open popup
  for(var i=0, l=areas.length; i<l; i++) {
    areas[i].addEventListener('click', openBubble, false);
  }
});  


// On click of close button, close popup
bubbleClose.addEventListener('click', closeBubble, false);

function openBubble() {
  if (this.id == 'Less Health' || this.id == 'Extra Skill') {
    bubbleContent.innerHTML = `
        <p>${this.id}</p>
        `;
  } else {
    bubbleContent.innerHTML = `
        <p>${this.id}</p>
        <img src="images/skills/${this.id}.jpg" alt="${this.id}" />
        `;
  }
  bubble.className = 'shown';
}

function closeBubble() {
  bubble.className = '';
}


// Make the image map responsive
//imageMapResize();