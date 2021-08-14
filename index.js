const page_index = {
                    index: 0,
                    terms_and_conditions: 1, 
                    privacy_policy: 2, 
                    about: 3,
                    programming_concepts: 4, 
                    code_compare: 5, 
                    frequently_asked_questions: 6, 
                    prepare_my_career: 7,
                    browse_information_technology_jobs: 8,
                    IT_study_choices: 9
                };

const page_setup_parameters = [
    {
        icon_id: "web_icon_id",
        icon_source: image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Hello World",
        tab_id: "hello_world_id",
        page_url: "index.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Terms and Conditions",
        tab_id: "terms_and_conditions_id",
        page_url: "pages/termsAndConditions/termsAndConditions.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Privacy Policy",
        tab_id: 'privacy_policy_id',
        page_url: "pages/privacyPolicy/privacyPolicy.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "About",
        tab_id: "about_id",
        page_url: "pages/about/about.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Programming Concepts",
        tab_id: "programming_concepts_id",
        page_url: "pages/programmingConcepts/programmingConcepts.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Code Comparison",
        tab_id: "code_comparison_id",
        page_url: "pages/codeCompare/codeCompare.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Frequently Asked Questions",
        tab_id: "frequently_asked_questions_id",
        page_url: "pages/frequentlyAskedQuestions/frequentlyAskedQuestions.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Prepare myself for a career in Information Technology",
        tab_id: "prepare_my_career_id",
        page_url: "pages/prepareMyCareer/prepareMyCareer.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Browse Information Technology careers",
        tab_id: "browse_IT_careers_id",
        page_url: "pages/browseInformationTechnologyJobs/browseInformationTechnologyJobs.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Information Technology related study options",
        tab_id: "IT_study_choices_id",
        page_url: "pages/IT_study_choices/IT_study_choices.html"
    }


]

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
function getPageName(page_index,page_id){
   document.getElementById(page_id).innerHTML = page_setup_parameters[page_index].page_name;
}

function count_web_items(){
	document.getElementById("count_programming_concepts").innerHTML = programming_concepts.length;
}

function startup_index(){
    setupPage(page_index.index);
    count_web_items();
}

