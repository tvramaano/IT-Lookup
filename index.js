const page_index = {
                    index: 0,
                    terms_and_conditions: 1, 
                    privacy_policy: 2, 
                    about: 3,
                    programming_concepts: 4, 
                    review_my_code: 5,
                    review_my_cv: 6,  
                    code_templates: 7,
                    faq: 8,
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
        page_name: "Terms and Conditions",
        page_description: "Familiarise yourself with our terms and conditions.",
        tab_id: "terms_and_conditions_id",
        page_url: "pages/termsAndConditions/termsAndConditions.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Privacy Policy",
        page_description: "Familiarise yourself with our privacy policy.",
        tab_id: 'privacy_policy_id',
        page_url: "pages/privacyPolicy/privacyPolicy.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Know more about us",
        page_description: "Get to know what Hello World Code is all about.",
        tab_id: "about_page_id",
        tab_id: "about_id",
        page_url: "pages/about/about.html"
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
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Review my code",
        page_description: "The best way to learn programming is to dive head first into solving problems. Send us your code so that we can review and give you feedback. ",
        tab_id: "review_my_code_id",
        page_url: "pages/reviewMyCode/reviewMyCode.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Review my CV in order to be job ready",
        page_description: "We will help you prepare your CV so as to kick start your tech career.",
        tab_id: "review_my_cv_id",
        page_url: "pages/reviewMyCV/reviewMyCV.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Hello World Code templates",
        page_description: "Access Hello World Code templates for different programming languages to get you started on your dev.",
        tab_id: "code_templates_tab_id",
        page_url: "pages/codeTemplates/codeTemplates.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "FAQ's",
        page_description: "A list of questions you might have about programming",
        tab_id: "faq_tab_id",
        page_url: "pages/faq/faq.html"
    }






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


