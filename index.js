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
        page_url: "index.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Terms and Conditions",
        page_url: "pages/termsAndConditions/termsAndConditions.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Privacy Policy",
        page_url: "pages/privacyPolicy/privacyPolicy.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "About",
        page_url: "pages/about/about.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Programming Concepts",
        page_url: "pages/programmingConcepts/programmingConcepts.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Code Comparison",
        page_url: "pages/codeCompare/codeCompare.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Frequently Asked Questions",
        page_url: "pages/frequentlyAskedQuestions/frequentlyAskedQuestions.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Prepare myself for a career in Information Technology",
        page_url: "pages/prepareMyCareer/prepareMyCareer.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Browse Information Technology careers",
        page_url: "pages/browseInformationTechnologyJobs/browseInformationTechnologyJobs.html"
    },
    {
        icon_id: "web_icon_id",
        icon_source: "../../"+image_sources.website_icon,
        page_id: "page_title_id",
        page_name: "Information Technology related study options",
        page_url: "pages/browseInformationTechnologyJobs/browseInformationTechnologyJobs.html"
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

// setup page for index
setupPage(page_index.index);

// go to page
function goToPage(page_index,dir){
    window.location.href = dir + "" + page_setup_parameters[page_index].page_url;
}


// go to page
function getPageName(page_index,page_id){
   document.getElementById(page_id).innerHTML = page_setup_parameters[page_index].page_name;
}

