var areas         = document.getElementsByTagName('area'),
    bubble        = document.getElementById('myBubble'),
    bubbleContent = document.getElementById('myBubbleContent'),
    bubbleClose   = document.getElementById('myBubbleCloseButton'),
    selectContentC= document.getElementById('mySelectImagesC'),
    selectContentT= document.getElementById('mySelectImagesT');

const dropdownC = document.getElementById('character');
const dropdownT = document.getElementById('trade');

dropdownC.addEventListener('change', function() {
    const selectedValueC = dropdownC.value;
    selectContentC.innerHTML = 
    `
    <img id="${selectedValueC}" class="myCharImage" src="images/characters/${selectedValueC}.jpg" usemap="#${selectedValueC}" />`
});  

dropdownT.addEventListener('change', function() {
    const selectedValueT = dropdownT.value;
    selectContentT.innerHTML = 
    `
    <img id= "${selectedValueT}" class="myTradeImage" src="images/trades/${selectedValueT}.jpg" usemap="#${selectedValueT}" />`;
});  
 

// On click of an area, open popup
for(var i=0, l=areas.length; i<l; i++) {
  areas[i].addEventListener('click', openBubble, false);
}

// On click of close button, close popup
bubbleClose.addEventListener('click', closeBubble, false);

function openBubble() {
  //var content = myData[this.id];
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
