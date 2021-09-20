const settings_index = {
                            volume: 0,
                            speed: 1,
                            tone: 2
                     }
var pronounciation_settings_values = [
                                        {
                                            minimum: 0,
                                            maximum: 1,
                                            step: 0.1,
                                            value: 0.9,
                                            make_into_percentage: 100
                                        },

                                        {
                                            minimum: 0.1,
                                            maximum: 10,
                                            step: 0.1,
                                            value: 1,
                                            make_into_percentage: 10
                                        },

                                        {
                                            minimum: 0,
                                            maximum: 2,
                                            step: 0.1,
                                            value: 0.5,
                                            make_into_percentage: 50
                                        }
                                     

                                    ]
function createPronounciationSettings(pronounciation_settings_id){
      
    const pronunciation_settings_content = "<div class = 'pronounciation_settings_overlay'>"+
                                                    "<div class = 'pronounciation_settings_container'>"+

                                                        "<div class = 'pronounciation_settings_header'><h2>Pronunciation Settings</h2></div>"+

                                                        "<div class = 'pronounciation_settings_img'>"+
                                                            "<img class = 'logo_img' src = '"+image_sources.volume_icon+"'/>"+
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section'>"+
                                                            "Voice Volume"+
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section'>"+
                                                            "<input id = 'slider_voice_volume' "+ 
                                                                   "type='range' "+ 
                                                                   "min='"+pronounciation_settings_values[settings_index.volume].minimum+"' "+
                                                                   "max='"+pronounciation_settings_values[settings_index.volume].maximum+"' "+
                                                                   "step='"+pronounciation_settings_values[settings_index.volume].step+"' "+
                                                                   "value='"+pronounciation_settings_values[settings_index.volume].value+"' "+
                                                             ">"+
                                                           
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section_text'>"+
                                                            "<input id = 'slider_voice_volume_text' "+ 
                                                                "type='text' "+ 
                                                                "value='"+(pronounciation_settings_values[settings_index.volume].value * pronounciation_settings_values[settings_index.volume].make_into_percentage)+"' "+
                                                            ">"+
                                                       
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section'>"+
                                                            "Voice Speed"+
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section'>"+
                                                            "<input id = 'slider_voice_speed' "+ 
                                                                "type='range' "+ 
                                                                "min='"+pronounciation_settings_values[settings_index.speed].minimum+"' "+
                                                                "max='"+pronounciation_settings_values[settings_index.speed].maximum+"' "+
                                                                "step='"+pronounciation_settings_values[settings_index.speed].step+"' "+
                                                                "value='"+pronounciation_settings_values[settings_index.speed].value+"' "+
                                                            ">"+
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section_text'>"+
                                                            "<input id = 'slider_voice_speed_text' "+ 
                                                                "type='text' "+ 
                                                                "value='"+(pronounciation_settings_values[settings_index.speed].value * pronounciation_settings_values[settings_index.speed].make_into_percentage)+"' "+
                                                            ">"+
                                                   
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section'>"+
                                                            "Voice tone"+
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section'>"+
                                                            "<input id = 'slider_voice_tone' "+ 
                                                                "type='range' "+ 
                                                                "min='"+pronounciation_settings_values[settings_index.tone].minimum+"' "+
                                                                "max='"+pronounciation_settings_values[settings_index.tone].maximum+"' "+
                                                                "step='"+pronounciation_settings_values[settings_index.tone].step+"' "+
                                                                "value='"+pronounciation_settings_values[settings_index.tone].value+"' "+
                                                            ">"+
                                                        "</div>"+

                                                        "<div class = 'pronounciation_settings_section_text'>"+
                                                            "<input id = 'slider_voice_tone_text' "+ 
                                                                "type='text' "+ 
                                                                "value='"+(pronounciation_settings_values[settings_index.tone].value * pronounciation_settings_values[settings_index.tone].make_into_percentage)+"' "+
                                                            ">"+
                                                   
                                                        "</div>"+

                                                        

                                                        "<div class = 'pronounciation_settings_footer'>"+
                                                            "<button onclick = 'show_modal(\""+
                                                                                showStatus.hide+"\","+
                                                                                "\""+page_setup_parameters[page_index.pronounciation_settings_modal].page_id+"\")'>"+
                                                                    "Save "+
                                                            "</buton>"+     
                                                        "</div>"+

                                                    "</div>";

                                            "</div>";
                        
document.getElementById(pronounciation_settings_id).innerHTML = pronunciation_settings_content;
    

}

window.onload = function () {
    let slider_voice_volume_id = document.getElementById("slider_voice_volume");
    let slider_voice_speed_id = document.getElementById("slider_voice_speed");
    let slider_voice_tone_id = document.getElementById("slider_voice_tone");

    slider_voice_volume_id.addEventListener("input", function () {
        document.getElementById("slider_voice_volume_text").value = (this.value * pronounciation_settings_values[settings_index.volume].make_into_percentage);
    });

    slider_voice_speed_id.addEventListener("input", function () {
        document.getElementById("slider_voice_speed_text").value = (this.value * pronounciation_settings_values[settings_index.speed].make_into_percentage);
    });

    slider_voice_tone_id.addEventListener("input", function () {
       document.getElementById("slider_voice_tone_text").value = (this.value * pronounciation_settings_values[settings_index.tone].make_into_percentage);
    });
}

