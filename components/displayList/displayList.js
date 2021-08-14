const element_status = {hide_section: "none",show_section: "block"};
const const_switch_status = {open_status: "open_status_id",close_status: "close_status_id"}; 
const html_elements = {div_element: "DIV",input_element: "input",id_element: "id", class_element: "class",bold_element: "<b>",click_action: "click"};
const search_flags = {search_all: "search_all_id",search_specific: "search_specific_id"};

const definition_modal_property = {display_definition_modal: "display_definition_modal_id",
                                   display_definition_modal_nav: "display_definition_modal_nav_id",
                                   display_definition_modal_header: "display_definition_modal_header_id",
                                   display_definition_modal_date: "display_definition_modal_date_id",
                                   display_definition_modal_category:"display_definition_modal_category_id",
                                   display_definition_modal_definition:"display_definition_modal_definition_id",
                                   display_definition_modal_related:"display_definition_modal_related_id"};


/*display modal*/
function display_modal(open_status,header_info,date_info,category_info,definition_info,related_info){
	
	switch(open_status){
		case const_switch_status.open_status:{
			document.getElementById("body").style.overflowY = "hidden";	
			document.getElementById(definition_modal_property.display_definition_modal).style.display = element_status.show_section;
			
			document.getElementById(definition_modal_property.display_definition_modal_header).innerHTML = header_info;
			document.getElementById(definition_modal_property.display_definition_modal_date).innerHTML = date_info;
			document.getElementById(definition_modal_property.display_definition_modal_category).innerHTML = category_info;
			document.getElementById(definition_modal_property.display_definition_modal_definition).innerHTML = definition_info;
			document.getElementById(definition_modal_property.display_definition_modal_related).innerHTML = related_info;
		}break;
		case const_switch_status.close_status:{
			document.getElementById("body").style.overflowY = "scroll";	
			document.getElementById(definition_modal_property.display_definition_modal).style.display = element_status.hide_section;
		}break;
	}
}

function definitionVault(page_id){
    document.getElementById(page_id).innerHTML = "<section id = 'display_definition_modal_id'>"+
                                                        "<section class = 'top_fixed'>"+
                                                        
                                                            "<section class = 'display_definition_modal_empty'></section>"+
                                                            "<section class = 'display_definition_modal_section' id = 'display_definition_modal_nav_id'>"+
                                                                "<section class = 'display_definition_modal_section_header'>"+
                                                                    "<section class = 'display_definition_modal_section_header_inner'>"+
                                                                        "<h2>Definition vault</h2>"+
                                                                        "<span onclick = 'display_modal(\"close_status_id\")'>Close</span>"+
                                                                    "</section>"+
                                                                "</section>"+
                                                            "</section>"+
                                                        "</section>"+
                                                        "<section class = 'definition_area'>"+
                                                        "<section class = 'display_definition_modal_section' id = 'display_definition_modal_header_id'><h1>Header</h1></section>"+
                                                        "<section class = 'display_definition_modal_section' id = 'display_definition_modal_date_id'>[date]</section>"+
                                                        "<section class = 'display_definition_modal_section' id = 'display_definition_modal_category_id'><h2>[category]</h2></section>"+
                                                        "<section class = 'display_definition_modal_section' id = 'display_definition_modal_definition_id'>Definition</section>"+
                                                        "<section class = 'display_definition_modal_section' id = 'display_definition_modal_related_id'>Related Content</section>"+
                                                    "</section>"+
                                                "</section>";
}

function get_list_of_concepts(search_concept_box, list_of_options,popValues,popOptions) {
    search_concept_box.addEventListener(html_elements.input_element, function(e) {
        
        // define variables
        let dynamic_div_element_1
        let dynamic_div_element_2
        let available_option = this.value;
        
        // collapse elements
        collapse_options();
        
        if (!available_option){ 
          return false;
        }
        
        // dynamically create di element
        dynamic_div_element_1 = document.createElement(html_elements.div_element);
        dynamic_div_element_1.setAttribute(html_elements.id_element, this.id + popValues);
        dynamic_div_element_1.setAttribute(html_elements.class_element, popOptions);
        this.parentNode.appendChild(dynamic_div_element_1);
        
        
        for ( let i = 0; i < list_of_options.length; i++) {
          if (list_of_options[i].programming_concept_name.substr(0, available_option.length).toUpperCase() == available_option.toUpperCase()) {
             dynamic_div_element_2 = document.createElement(html_elements.div_element);
            dynamic_div_element_2.innerHTML = html_elements.bold_element + list_of_options[i].programming_concept_name.substr(0, available_option.length) + html_elements.bold_element;
            dynamic_div_element_2.innerHTML += list_of_options[i].programming_concept_name.substr(available_option.length);
            dynamic_div_element_2.innerHTML += "<input type='hidden' value='" + list_of_options[i].programming_concept_name + "'>";
            dynamic_div_element_2.addEventListener(html_elements.click_action, function(e) {
                search_concept_box.value = this.getElementsByTagName(html_elements.input_element)[0].value;
                collapse_options();
                populate_programming_concepts(search_flags.search_specific,search_concept_box.value);

            });
            dynamic_div_element_1.appendChild(dynamic_div_element_2);
          }
        }
    });
  
    
    function collapse_options(given_option) {
       var div_element_options = document.getElementsByClassName(popOptions);
      for (let i = 0; i < div_element_options.length; i++) {
       
           if ((given_option != div_element_options[i]) && (given_option != search_concept_box)) {
              div_element_options[i].parentNode.removeChild(div_element_options[i]);
            }
  
      }
    }
    
    
    document.addEventListener(html_elements.click_action, function (e) {
        collapse_options(e.target);
    });
    
  
}
