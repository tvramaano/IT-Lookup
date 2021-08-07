function setupFooter(footer_id){
    let dir = "../../";
    if(footer_id === "index_footer_id"){
       dir = "";
    }
    //"+goToPage(page_index.programming_concepts,dir)+"
    document.getElementById(footer_id).innerHTML = "<div class = 'footer_container'>"+
                                                     "<div class = 'footer_container_tabs'>"+
                                                        "<div class = 'footer_section'>"+
                                                            "<h3>Menu</h3>"+
                                                            "<div class = 'footer_container_tabs_link'><a href = '"+dir+page_setup_parameters[page_index.programming_concepts].page_url+"'>"+page_setup_parameters[page_index.programming_concepts].page_name+"</a></div>"+
                                                            "<div class = 'footer_container_tabs_link'><a href = '"+dir+page_setup_parameters[page_index.code_compare].page_url+"'>"+page_setup_parameters[page_index.code_compare].page_name+"</a></div>"+
                                                            "<div class = 'footer_container_tabs_link'><a href = '"+dir+page_setup_parameters[page_index.frequently_asked_questions].page_url+"'>"+page_setup_parameters[page_index.frequently_asked_questions].page_name+"</a></div>"+
                                                            "<div class = 'footer_container_tabs_link'><a href = '"+dir+page_setup_parameters[page_index.prepare_my_career].page_url+"'>"+page_setup_parameters[page_index.prepare_my_career].page_name+"</a></div>"+
                                                            
                                                         "</div>"+
                                                         "<div class = 'footer_section'>"+
                                                            "<h3>Quick links</h3>"+
                                                            "<div class = 'footer_container_tabs_link'><a href = '"+dir+page_setup_parameters[page_index.about].page_url+"'>"+page_setup_parameters[page_index.about].page_name+"</a></div>"+
                                                            "<div class = 'footer_container_tabs_link'><a href = '"+dir+page_setup_parameters[page_index.terms_and_conditions].page_url+"'>"+page_setup_parameters[page_index.terms_and_conditions].page_name+"</a></div>"+
                                                            "<div class = 'footer_container_tabs_link'><a href = '"+dir+page_setup_parameters[page_index.privacy_policy].page_url+"'>"+page_setup_parameters[page_index.privacy_policy].page_name+"</a></div>"+
                                                            
                                                         "</div>"+
                                                         "<div class = 'footer_section'>"+
                                                            "<div class = 'subscription_box'>"+
                                                               "<h3>Subscribe for updates</h3>"+
                                                               "<input type = 'text' placeholder = 'Email address' />"+
                                                               "<button>Subscribe</button>"+
                                                            "</div>"+
                                                         "</div>"+
                                                      "</div>"+
                                                      "<div class = 'footer_container_company_name'><img src = '"+getImageDir(dir)+image_sources.website_icon+"'</div>"+
                                                      "<div class = 'footer_container_company_name'>companyname@domain.com</div>"+
                                                      "<div class = 'footer_container_company_name'>&copy; 2021 Company Name</div>"+
                                                   "</div>";
}