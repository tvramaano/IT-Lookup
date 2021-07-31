/* Create constants here */
const content_elements = {programming_concepts_navigation:'programming_concepts_navigation_id',tutorials: "tutorials_id",about_us: "about_us_id",definition_modal: "definition_modal_id"};

const definition_modal_property = {display_definition_modal: "display_definition_modal_id",display_definition_modal_nav: "display_definition_modal_nav_id",display_definition_modal_header: "display_definition_modal_header_id",display_definition_modal_date: "display_definition_modal_date_id",display_definition_modal_category:"display_definition_modal_category_id",display_definition_modal_definition:"display_definition_modal_definition_id",display_definition_modal_related:"display_definition_modal_related_id"};

const tab_select_icon = {x_icon: "X",tick_icon: "&#10003"};
const tabs = [{tab_name: "programming_concepts_active_id"},{tab_name: "tutorials_and_templates_active_id"},{tab_name : "about_active_id"}]


var view_category_array = [];

const search_flags = {search_all: "search_all_id",search_specific: "search_specific_id"};

const BLUE_COLOR = "rgb(0,0,250)";
const UNAVAILBLE = -1;
const POPULATE_OPTIONS_CLASS = "populate_options_class";
const POPULATE_VALUES_ID = "populated_values_id";
const PROGRAMMING_CONCEPT_INPUT_ID = "programming_concept_input";
const PROGRAMMING_CONTENT_ID = "programming_content_id";

const DATA_TYPES_ATTACHMENT = "";
const ACCESS_MODIFIERS_ATTACHMENT = "";
const CLASSES_ATTACHMENT = "";
const FUNCTIONS_ATTACHMENT = "";

function startup(search_flag,sort_criteria){
	// default modal pop up
	get_list_of_concepts(document.getElementById(PROGRAMMING_CONCEPT_INPUT_ID), programming_concepts);
	populate_categories_dropdown_list();
	populate_programming_concepts(search_flag,sort_criteria);
	count_web_items();
	tab_navigation("");
	
}

function pop_up_modal(modal_status,modal_id,selected_id){
	
	switch(modal_status){
		case const_switch_status.open_status:{
			tab_navigation(selected_id);
			for(let content_info in content_elements){
				content_info = content_info + "_" + html_elements.id_element; 
				if(content_info !== modal_id){
					document.getElementById(content_info).style.display = element_status.hide_section;
				}
			} 
			document.getElementById(modal_id).style.display = element_status.show_section;
			
		}break;
		
		case const_switch_status.close_status:{
			tab_navigation("");
			document.getElementById(modal_id).style.display = element_status.hide_section;
		}break;
	
	}
}

function pop_up_modal_definitions(modal_status,modal_id,concept_name,definition){
	pop_up_modal(modal_status,modal_id);
	createModal(
			content_elements.definition_modal,
			concept_name,
			'Search more concepts',
			definition,
			'pop_up_modal(\"open_status_id\",\"programming_concepts_navigation_id\")'
		);
	
}


function get_list_of_concepts(search_concept_box, list_of_options) {
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
      dynamic_div_element_1.setAttribute(html_elements.id_element, this.id + POPULATE_VALUES_ID);
      dynamic_div_element_1.setAttribute(html_elements.class_element, POPULATE_OPTIONS_CLASS);
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
          });
          dynamic_div_element_1.appendChild(dynamic_div_element_2);
        }
      }
  });

  
  function collapse_options(given_option) {
     var div_element_options = document.getElementsByClassName(POPULATE_OPTIONS_CLASS);
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

/*populate programming concepts*/
function populate_programming_concepts(search_flag,sort_criteria){
	let programming_content_container = "";
	let programming_content_temp = "";
	
	switch(search_flag){
		case search_flags.search_all:{
				
			let category_name = document.getElementById("view_criteria").value;
			console.log("cat name: " + category_name);
			programming_concept_sort(programming_concepts,sort_criteria);
			if(category_name === "View all"){
				
				for(let i = 0 ; i < programming_concepts.length;i++){
					
					programming_content_temp  = "<div class = 'left_navigation_tab'>";
					programming_content_temp  += "<div class = 'full_length_width'>"+programming_concepts[i].programming_concept_name + "</div>";
					programming_content_temp  += "<section class = 'left_navigation_tab_button_group'>";
					programming_content_temp  += "<div class = 'full_length_width color_orange'>["+programming_concepts[i].programming_concept_category + "]</div>";
					
					programming_content_temp  += "<button onclick = 'display_modal(\"open_status_id\",\"<h1>"+programming_concepts[i].programming_concept_name+"</h1>\",\"["+ programming_concepts[i].programming_concept_date+" ]\",\"<h2>[ "+programming_concepts[i].programming_concept_category+" ]</h2>\",\""+programming_concepts[i].programming_concept_definition+"\",\"<h2>Syntax/Example</h2><p>"+programming_concepts[i].programming_concept_example+"</p>\")' class = 'full_length_width'>View definition</button>";
				
					programming_content_temp  += "</section>";
					programming_content_temp  += "</div>";
					
					programming_content_container += programming_content_temp;
					
					
				}
			}
			else{
				for(let i = 0 ; i < programming_concepts.length;i++){
					if(category_name === programming_concepts[i].programming_concept_category){
						programming_content_temp  = "<div class = 'left_navigation_tab'>";
						programming_content_temp  += "<div class = 'full_length_width'>"+programming_concepts[i].programming_concept_name + "</div>";
						programming_content_temp  += "<section class = 'left_navigation_tab_button_group'>";
						programming_content_temp  += "<div class = 'full_length_width color_orange'>["+programming_concepts[i].programming_concept_category + "]</div>";
						
						programming_content_temp  += "<button onclick = 'display_modal(\"open_status_id\",\"<h1>"+programming_concepts[i].programming_concept_name+"</h1>\",\"["+ programming_concepts[i].programming_concept_date+" ]\",\"<h2>[ "+programming_concepts[i].programming_concept_category+" ]</h2>\",\""+programming_concepts[i].programming_concept_definition+"\",\"<h2>Syntax/Example</h2><p>"+programming_concepts[i].programming_concept_example+"</p>\")' class = 'full_length_width'>View definition</button>";
						
						programming_content_temp  += "</section>";
						programming_content_temp  += "</div>";
						
						programming_content_container += programming_content_temp;
					}
					
				}
			}
		
			document.getElementById(PROGRAMMING_CONTENT_ID).innerHTML = programming_content_container;
		}
		break;
		
		case search_flags.search_specific:{
			let index = -1;
			let value_to_search = document.getElementById(PROGRAMMING_CONCEPT_INPUT_ID).value;
			for(let i = 0 ; i < programming_concepts.length;i++){
				if(value_to_search === programming_concepts[i].programming_concept_name){
					index = i;
					break;
				}
			}
			
			programming_content_temp  = "<div class = 'left_navigation_tab'>";
			programming_content_temp  += "<div class = 'full_length_width'>"+programming_concepts[index].programming_concept_name + "</div>";
			programming_content_temp  += "<section class = 'left_navigation_tab_button_group'>";
			programming_content_temp  += "<div class = 'full_length_width color_orange'>["+programming_concepts[index].programming_concept_category + "]</div>";
			
			programming_content_temp  += "<button onclick = 'display_modal(\"open_status_id\",\"<h1>"+programming_concepts[index].programming_concept_name+"</h1>\",\"["+ programming_concepts[index].programming_concept_date+" ]\",\"<h2>[ "+programming_concepts[index].programming_concept_category+" ]</h2>\",\""+programming_concepts[index].programming_concept_definition+"\",\"<h2>Syntax/Example</h2><p>"+programming_concepts[index].programming_concept_example+"</p>\")' class = 'full_length_width'>View definition</button>";
			
			programming_content_temp  += "</section>";
			programming_content_temp  += "</div>";
			programming_content_container += programming_content_temp;
			
			document.getElementById(PROGRAMMING_CONTENT_ID).innerHTML = programming_content_container;
			document.getElementById("view_criteria").value = programming_concepts[index].programming_concept_category;
		}
		break;
	}
}

function programming_concept_sort(arr_to_sort,sort_criteria){
	let key_value1 = ""; 
	let key_value2 = "";
	for(let i = 0 ; i < arr_to_sort.length -1 ;i++){
		for(let j = i+1 ; j < arr_to_sort.length ;j++){
			switch(sort_criteria){
				case programming_concepts_headers.concept_name:{
					key_value1 = arr_to_sort[i].programming_concept_name;
					key_value2 = arr_to_sort[j].programming_concept_name;
				}break;
				
				default:{
					key_value1 = arr_to_sort[i].programming_concept_category;
					key_value2 = arr_to_sort[j].programming_concept_category;
				}
			}
			if(key_value1 > key_value2 ){
				let temp = arr_to_sort[i];
				arr_to_sort[i] = arr_to_sort[j];
				arr_to_sort[j] = temp;
			}
		}
	}
	
	
}

function populate_categories_dropdown_list(){
	let category_list = document.getElementById("view_criteria"); 
	for(let k = 0; k < categories.length; k++){
		let option_element = document.createElement("option");
		option_element.text = categories[k].category_name + " [ " + countPerCategory(categories[k].category_name) + " ]" ;
		option_element.value = categories[k].category_name;
		category_list.add(option_element);
	}
}

function countPerCategory(chosen_category){
	let count = 0;
	if(chosen_category === "View all"){
		count = programming_concepts.length;
		
	}
	else{
		for(let i = 0; i < programming_concepts.length;i++){
			if(chosen_category === programming_concepts[i].programming_concept_category){
				count++;
			}
		}
	}
	
	return count;
}



function sort_by_selection(element_id,arr_to_sort,search_flag){
	let selected_option = document.getElementById(element_id).value;
	populate_programming_concepts(search_flag,selected_option);
}

function count_web_items(){
	document.getElementById("concepts_count").innerHTML = programming_concepts.length;
	document.getElementById("categories_count").innerHTML = categories.length;
}

function tab_navigation(tab_selected_id){
	for(let i = 0; i < tabs.length;i++){
		if(tab_selected_id !== tabs[i].tab_name){
			document.getElementById(tabs[i].tab_name).innerHTML = tab_select_icon.x_icon;
		}
	}
	if(tab_selected_id !== ""){
		document.getElementById(tab_selected_id).innerHTML = tab_select_icon.tick_icon;
	}
}

