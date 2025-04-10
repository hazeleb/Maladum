$('.clickable').bind('click', function (ev) {
    var $div = $(ev.target);
    var $display = $div.find('.display');

    var offset = $div.offset();
    var x = ev.clientX - offset.left;
    var y = ev.clientY - offset.top;

    $display.img(url("images/skills/Quick Recovery.jpg"));
});

var myData = {
    "left-eye": {
        "title": "Quick Recovery",
        "image": "images/skills/Quick Recovery.jpg",
        
        "description": "1 Restore 1 Health. <br><br>" +
                "2 Use before activating to remove any Stunned, Poisoned or Wounded counters. <br><br>" +
                "3 <b>Reaction:</b> Use after being defeated. You are no longer defeated – restore 1" +
                "Health and Stand Up. <br>" +
                "&nbsp; <b>Passive:</b> At the start of your turn you may remove one Fatigued counter."
    },
    "mouth": {
        "title": "This point B",
        "image": "images/skills/Acrobatics.jpg",       
        "description": "Lorem ipsum B dolor sin amet."
    },
   
};
var areas         = document.getElementsByTagName('area'),
    bubble        = document.getElementById('myBubble'),
    bubbleContent = document.getElementById('myBubbleContent'),
    bubbleClose   = document.getElementById('myBubbleCloseButton');

// On click of an area, open popup
for(var i=0, l=areas.length; i<l; i++) {
  areas[i].addEventListener('click', openBubble, false);
}

// On click of close button, close popup
bubbleClose.addEventListener('click', closeBubble, false);

function openBubble() {
  var content = myData[this.id];
  bubbleContent.innerHTML = 
                          '<img src="' + content.image + '" alt="" />'
                          + '<h3>' + content.title + '</h3>'
                          + '<p>' + content.description + '</p>';
  bubble.className = 'shown';
}

function closeBubble() {
  bubble.className = '';
}

// Make the image map responsive
imageMapResize();
