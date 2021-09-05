function openNavigation(navigation_id,tab_id){
    document.getElementById(navigation_id).innerHTML = "<div class = 'navigation_container'>"+
                                                            "<div class = 'navigation_container_header'>"+
                                                                "<h2>Menu</h2>"+
                                                                "<span onclick = 'navigation_modal(\"close\",\""+navigation_id+"\")'>X</span>"+
                                                            "</div>"+

                                                            "<div class = 'navigation_container_header_tab_container'>"+
                                                                "<div onclick = 'goToPage(page_index.programming_concepts,\"../../\")'  class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.programming_concepts].tab_id+"'>"+page_setup_parameters[page_index.programming_concepts].page_name+"</div>"+
                                                                "<div onclick = 'goToPage(page_index.review_my_code,\"../../\")' class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.review_my_code].tab_id+"'>"+page_setup_parameters[page_index.review_my_code].page_name+"</div>"+
                                                                "<div onclick = 'goToPage(page_index.review_my_cv,\"../../\")' class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.review_my_cv].tab_id+"'>"+page_setup_parameters[page_index.review_my_cv].page_name+"</div>"+

                                                                "<div onclick = 'goToPage(page_index.code_templates,\"../../\")' class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.code_templates].tab_id+"'>"+page_setup_parameters[page_index.code_templates].page_name+"</div>"+
                                                                "<div onclick = 'goToPage(page_index.faq,\"../../\")' class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.faq].tab_id+"'>"+page_setup_parameters[page_index.faq].page_name+"</div>"+
                                                                
                                                                "<div onclick = 'goToPage(page_index.about,\"../../\")' class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.about].tab_id+"'>"+page_setup_parameters[page_index.about].page_name+"</div>"+
                                                                "<div onclick = 'goToPage(page_index.terms_and_conditions,\"../../\")' class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.terms_and_conditions].tab_id+"'>"+page_setup_parameters[page_index.terms_and_conditions].page_name+"</div>"+
                                                                "<div onclick = 'goToPage(page_index.privacy_policy,\"../../\")' class = 'navigation_container_header_tab' id = '"+page_setup_parameters[page_index.privacy_policy].tab_id+"'>"+page_setup_parameters[page_index.privacy_policy].page_name+"</div>"+
                                                            "</div>"+

                                                         "</div>"
                                                         document.getElementById(tab_id).style.color = "rgb(200,0,0)";
}   

function navigation_modal(open_status,navigation_id){
    switch(open_status){
        case "open":{
            document.getElementById(navigation_id).style.display = "block";
        }break;
        case "close":{
            document.getElementById(navigation_id).style.display = "none";
        }break;
    }
}
