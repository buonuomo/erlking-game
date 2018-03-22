var bg = $("#bg");
var speaker = $(".speaker");
var text = $(".text p");
var r1 = $("#r1");
var r2 = $("#r2");
var r3 = $("#r3");
var r1p = $("#r1 p");
var r2p = $("#r2 p");
var r3p = $("#r3 p");

var father = function() {
  speaker.css("background-image","resources/betterman.png");
  speaker.css("display","block");
};

var erlking = function() {
  speaker.css("background-image","resources/erlman3.png");
}

var narrate = function(narration) {
  text.text(narration);
};

var options = function(n) {
  if (n === 1) {
    r1.show();
    r2.hide();
    r3.hide();
  } else if (n === 2) {
    r1.show();
    r2.show();
    r3.hide();
  } else if (n===3) {
    r1.show();
    r2.show();
    r3.show();
  } else {
    r1.hide();
    r2.hide();
    r3.hide();
  }
}

var plot = [
   [erlking,3,1,1,2,"THE ERLKING!!!","Look away","SCREAM!!!","Stare him in the eyes","#theme"],
   [father,2,3,4,"What is the matter, my son?","Nothing","It's the Erlking!!!","#meinSohn"],
   [erlking,0,"The Erlking stares back at you and you DIE.","#dasKind"],
   [father,1,5,"Okay then...","Continue"],
   [father,1,5,"It is but a streak of fog","Continue","#nebel"],
   [erlking,3,8,6,7,"The Erlking approaches you: My dear child, come with me. I have games, colorful flowers on the beach, and golden robes","FATHER!!!","Wait...flowers on the beach? But how...with the sand...","Okay, sounds dope","#blumen"],
   [erlking,2,8,7,"You know, forget the flowers. That was a bit of exaggeration, but what about the games and robes?","Father!!!","I'll forgive your lying...and go with you!"],
   [erlking,0,"You go with the Erlking, but instead of playing games with you, he violently murders you.","#dasKind"],
   [father,1,9,"Do not worry, it is only the sound of the wind blowing through the dead leaves","Continue","#blaetten"],
   [erlking,3,10,11,11,"Come on, my sweet boy, my daughters will wait upon your every need, and we shall dance all night","Dad!!! Look, it's him and his daughters!!!!","You had me at “dancing”!","Okay, fine. I'm convinced, let's go","#tochter"],
   [father,1,12,"Ah yes, I see it now. It is the old Willows playing tricks on your eyes.","Continue","#ichSehEs"],
   [erlking,0,"You go with the Erlking, but the only dance that is performed is the one that his daughters do after they tear you limb from limb.","#dasKind"],
   [erlking,3,13,14,15,"I love you, my tender child. You must come with me, and if you are not willing, then we'll have to do this THE HARD WAY!!!","Okay, chill, man, I'll come with you","Nooooooo!!!!","...","#gewalt"],
   [erlking,0,"You follow the Erlking, but he does it the hard way anyways, for when you reach his lair, he engulfs you with a wave of dark magic, and you die.","#dasKind"],
   [erlking,1,16,"Before you can utter a sound, the Erlking reaches out and touches you with one of his cold, wrinkly hands. You have the sensation of something rapidly rushing out of your body","Father...The Erlking...he has done me harm...","#leids"],
   [erlking,1,16,"The Erlking reaches out and touches you with one of his cold, wrinkly hands. You have the sensation of something rapidly rushing out of your body","Father...The Erlking...he has done me harm...","#leids"],
   [father,1,17,"Your father, frightened, rides on swiftly through the night with you in his arms, and reaches his farm with much difficulty.","Continue","#derVater"],
   [father,0,"But, when he finally arrives, he finds you dead in his arms.","#tot"]
];

var oldSong = "h";
var song = "h";
var makeScreen = function(key) {
  plot[key][0]();
  options(plot[key][1]);
  narrate(plot[key][2+plot[key][1]]);
  r1p.text(plot[key][3+plot[key][1]]);
  r2p.text(plot[key][4+plot[key][1]]);
  r3p.text(plot[key][5+plot[key][1]]);
  oldSong = song;
  song = plot[key][plot[key].length-1]
  if (oldSong[0] == "#") {
    $(oldSong)[0].pause();
  }
  if (song[0] == "#") {
    $(song)[0].play();
  }
  r1.click(function() {
    oldKey = key;
    newKey = plot[key][2];
  })
  r2.click(function() {
    oldKey = key;
    newKey = plot[key][3];
  })
  r3.click(function() {
    oldKey = key;
    newKey = plot[key][4];
  })
};

var oldKey
var newKey = 0;
var adventure = function() {
  $('#theme')[0].pause();
  narrate("It is a dark and stormy night...");
  options(1);
  $('#reitet')[0].play();
  r1p.text("Continue")
  r1.click(function() {
    $('#reitet')[0].pause();
    narrate("...You are riding through the woods with your father. He is holding you warmly in his arms.");
    father();
    $('#vater')[0].play();
    r1.click(function() {
      $('#vater')[0].pause();
      //$('#theme')[0].play();
      narrate("Suddenly...You see a dark form in the distance moving behind some trees. It's ...")
      r1.click(function() {     
        $(".action").click(function() {
          makeScreen(newKey);
        });
      })
    })
  })
};

function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
    $('<img/>')[0].src = this;
  });
}


$(document).ready(function() {
    
  preload(['resources/betterman.png','resources/erlman3.png','resources/forest.jpg',"resources/menu.png",'resources/goodmenu.png',"resources/textbest.png"]);
  
  $("#theme")[0].play();
  $("#play").click(function() {
    $(".menu").css("display","none");
    $(".action").css("display","block");
    adventure();
  });
  
  $("#options").click(function() {
    
  });
  
  $("#about").click(function() {
    $(".menu").css("display","none");
    $("#info").css("display","block");
    $("#back").css("display","block");
    $("#back").click(function() {
      $(".menu").css("display","block");
      $("#info").css("display","none");
      $("#back").css("display","none");
    })
  });

});
