const page_index = {
                     index_page: 0,
                     random_definition:1,
                     pronounciation_settings_modal: 2
                   };

const showStatus = {
                     show: "block",
                     hide:"none"
                   };

const page_setup_parameters = [
    {
        page_name: "Browse Information Technology definitions",
        page_id: "home_page_id"
    },
  
    {
        page_name: "View random definition",
        page_id: "random_definition_id"
    },
   
    {
        page_name: "Set your pronunciation settings",
        page_id: "pronounciation_settings_id"
    },
]

const tab = "&nbsp;";
const opening_double_quote = "“";
const closing_double_quote = "”";

const opening_single_quote = "‘";
const closing_single_quote = "’";

const opening_angle_bracket = "<text><</text>";
const opening_angle_bracket_1 = "<text>&lt;</text><text>&#0047;</text>";
const closing_angle_bracket_1 = "<text>></text>";
const closing_angle_bracket = "<text>/></text>";

const opening_php_tag = "<text><</text><text>?</text><text>php</text></br></br>";
const closing_php_tag = "<text></br></br>?></text>";

function wrapText(strText,opening_char,closing_char){
	return opening_char + ""+ strText + ""+ closing_char;
}

function indent(num_spaces){
	let indentations = "";
	for(let i = 0 ; i < num_spaces;i++){
		indentations += tab;
	}
	return indentations;
}

function setupPage(page_index){
    // setup the page icon
    try{
        
        document.getElementById("web_icon_id").href = image_sources.website_icon;
        document.getElementById("page_title_id").innerHTML = page_setup_parameters[page_index].page_name;
        document.getElementById(page_setup_parameters[page_index].page_id).style.display = showStatus.show;
        document.getElementById(page_setup_parameters[page_index].page_id).style.display = showStatus.show;
       
      
    }
    catch(error){
    }
}

function showExitIcon(shownStatus){
    document.getElementById("exit_img_id").style.display = shownStatus;
}

function show_modal(showStatus_id,modal_id){
   
    switch(showStatus_id){
        case showStatus.show:{
            document.getElementById(modal_id).style.display = showStatus.show;

        }break;

        case showStatus.hide:{
            document.getElementById(modal_id).style.display = showStatus.hide;
            // document.getElementById("body").style.overflowY = "hidden";	
            switch(modal_id){
                case page_setup_parameters[page_index.pronounciation_settings_modal].page_id:{
                    pronounciation_settings_values[settings_index.volume].value = document.getElementById("slider_voice_volume").value;
                    pronounciation_settings_values[settings_index.speed].value = document.getElementById("slider_voice_speed").value;
                    pronounciation_settings_values[settings_index.tone].value = document.getElementById("slider_voice_tone").value;
                }break;

               
            }
            // if(modal_id === page_setup_parameters[page_index.pronounciation_settings_modal].page_id){
            //     pronounciation_settings_values[settings_index.volume].value = document.getElementById("slider_voice_volume").value;
            //     pronounciation_settings_values[settings_index.speed].value = document.getElementById("slider_voice_speed").value;
            //     pronounciation_settings_values[settings_index.tone].value = document.getElementById("slider_voice_tone").value;
            // }
            
        }break;
    }
}

function generate_random_defintion(){
    let random_index = Math.floor(Math.random() * (programming_concepts.length-1));
    display_modal("open_status_id",
				  "<h1>"+programming_concepts[random_index].programming_concept_name+"</h1>",
				  "[ "+ programming_concepts[random_index].programming_concept_date+" ]",
				  "<h2>[ "+programming_concepts[random_index].programming_concept_category+" ]</h2>",
				  programming_concepts[random_index].programming_concept_definition,
				  "<h2>Syntax/Example</h2><p>"+programming_concepts[random_index].programming_concept_example+"</p>"
                  )
}






