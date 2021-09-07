const page_index = {
                     index: 0,
                     programming_concepts: 1, 
                   };

const page_setup_parameters = [
    {
        icon_id: "web_icon_id",
        icon_source: image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Hello World Code",
        page_description: "This is the home page of Hello World Code",
        tab_id: "hello_world_id",
        page_url: "index.html"
    },
   
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Browse programming concepts",
        page_description: "Get access to a wide range of programming definitions that will supplement your learning.",
        tab_id: "programming_concepts_id",
        page_url: "pages/programmingConcepts/programmingConcepts.html"
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

function setupPage(page_name){
    // setup the page icon
    try{
        document.getElementById(page_setup_parameters[page_name].icon_id).href = page_setup_parameters[page_name].icon_source;
        
        document.getElementById(page_setup_parameters[page_name].page_id).innerHTML = page_setup_parameters[page_name].page_name
    }
    catch(error){
       
    }
}

// go to page
function goToPage(page_index,dir){
    window.location.href = dir + "" + page_setup_parameters[page_index].page_url;
}


// go to page
function getPageName(page_index){
   return page_setup_parameters[page_index].page_name;
}



setupPage(page_index.index);


