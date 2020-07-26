$( document ).ready(function() {
  
  selectedVoice = "UK English Female"
  let voicelist = responsiveVoice.getVoices();
  voicelist.forEach(function(item){
    let option = document.createElement('option');
    option.value = item.name;
    option.innerHTML = item.name;
    updateSpeaker.appendChild(option)
  });
  
  updateSpeaker.onchange = function(){
    selectedVoice = this.value;
  }

  $( "#speakContent" ).click(function(){
    let speakingContent = $("#speakingContent").val();
    if(speakingContent){
      responsiveVoice.speak(speakingContent, selectedVoice, {onstart: onSpeakingStart, onend: onSpeakingEnd} );
    }else{
      responsiveVoice.speak("Please inset text to read");
    }
  });
  onSpeakingStart = function(){
    $(".playing").removeClass("disabled")
  }
  onSpeakingEnd = function(){
    $(".playing").addClass("disabled");
  }

  $( "#pause" ).click(function(){
    responsiveVoice.pause();
  });

  $( "#resume" ).click(function(){
    responsiveVoice.resume();
  });

  $( "#stopSpeaking" ).click(function(){
    responsiveVoice.cancel();
    $(".playing:not(.disabled)").addClass("disabled");
  });

  $( "#clearContent" ).click(function(){
    responsiveVoice.cancel();
    $("#speakingContent").val("").focus();
    $(".playing:not(.disabled)").addClass("disabled");
  });

});