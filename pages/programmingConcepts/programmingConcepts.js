const PROGRAMMING_CONCEPT_INPUT_ID = "programming_concept_input";
const PROGRAMMING_CONTENT_ID = "programming_content_id";
const POPULATE_OPTIONS_CLASS = "populate_options_class";
const POPULATE_VALUES_ID = "populated_values_id";



function page_startup(){
    populate_categories_dropdown_list();
    get_list_of_concepts(document.getElementById(PROGRAMMING_CONCEPT_INPUT_ID), programming_concepts,POPULATE_VALUES_ID,POPULATE_OPTIONS_CLASS);
    populate_programming_concepts(search_flags.search_all,document.getElementById(PROGRAMMING_CONCEPT_INPUT_ID).value);
}

/* programming concepts view */

function populate_programming_concepts(search_flag,sort_criteria){
	let programming_content_container = "";
	let programming_content_temp = "";
	
	switch(search_flag){
		case search_flags.search_all:{
				
			let category_name = document.getElementById("view_criteria").value;
			
			programming_concept_sort(programming_concepts,sort_criteria);
			if(category_name === "View all"){
				
				for(let i = 0 ; i < programming_concepts.length;i++){
					
					programming_content_temp  = "<div class = 'programming_concept_tab'>";
					programming_content_temp  += "<h3>"+programming_concepts[i].programming_concept_name + "</h3>";
					programming_content_temp  += "<section class = 'left_navigation_tab_button_group'>";
					programming_content_temp  += "<h4>["+programming_concepts[i].programming_concept_category + "]</h4>";
					
					programming_content_temp  += "<button onclick = 'display_modal("+
                                                                    "\"open_status_id\","+
                                                                    "\"<h1>"+programming_concepts[i].programming_concept_name+"</h1>\","+
                                                                    "\"["+ programming_concepts[i].programming_concept_date+" ]\","+
                                                                    "\"<h2>[ "+programming_concepts[i].programming_concept_category+" ]</h2>\","+
                                                                    "\""+programming_concepts[i].programming_concept_definition+"\","+
                                                                    "\"<h2>Syntax/Example</h2><p>"+programming_concepts[i].programming_concept_example+"</p>\")'"+
                                                                    "<button>View definition</button>";
				
					programming_content_temp  += "</section>";
					programming_content_temp  += "</div>";
					
					programming_content_container += programming_content_temp;
					
					
				}
			}
			else{
				for(let i = 0 ; i < programming_concepts.length;i++){
					if(category_name === programming_concepts[i].programming_concept_category){
						programming_content_temp  = "<div class = 'programming_concept_tab'>";
						programming_content_temp  += "<h3>"+programming_concepts[i].programming_concept_name + "</h3>";
						programming_content_temp  += "<section class = 'left_navigation_tab_button_group'>";
						programming_content_temp  += "<h4>["+programming_concepts[i].programming_concept_category + "]</h4>";
						
						programming_content_temp  += "<button onclick = 'display_modal("+
													 "\"open_status_id\","+
													 "\"<h1>"+programming_concepts[i].programming_concept_name+"</h1>\","+
													 "\"["+ programming_concepts[i].programming_concept_date+" ]\","+
													 "\"<h2>[ "+programming_concepts[i].programming_concept_category+" ]</h2>\","+
													 "\""+programming_concepts[i].programming_concept_definition+"\","+
													 "\"<h2>Syntax/Example</h2><p>"+programming_concepts[i].programming_concept_example+"</p>\")'"+
													 " class = 'full_length_width'>View definition</button>";
						
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
                if(i ===  ( programming_concepts.length - 1) ){
                    programming_content_temp = "<h3 class = 'no_results'>No results found for \""+value_to_search+"\"</h3>"
                }
			}
			if(index != -1){
                programming_content_temp  = "<div class = 'programming_concept_tab'>";
                programming_content_temp  += "<h3>"+programming_concepts[index].programming_concept_name + "</h3>";
                programming_content_temp  += "<section class = 'left_navigation_tab_button_group'>";
                programming_content_temp  += "<h4>["+programming_concepts[index].programming_concept_category + "]</h4>";
                
                programming_content_temp  += "<button onclick = 'display_modal("+
																"\"open_status_id\","+
																"\"<h1>"+programming_concepts[index].programming_concept_name+"</h1>\","+
																"\"["+ programming_concepts[index].programming_concept_date+" ]\","+
																"\"<h2>[ "+programming_concepts[index].programming_concept_category+" ]</h2>\","+
																"\""+programming_concepts[index].programming_concept_definition+"\","+
																"\"<h2>Syntax/Example</h2><p>"+programming_concepts[index].programming_concept_example+"</p>\")'"+
																" class = 'full_length_width'>View definition</button>";
                
                programming_content_temp  += "</section>";
                programming_content_temp  += "</div>";
                programming_content_container += programming_content_temp;
                
                document.getElementById(PROGRAMMING_CONTENT_ID).innerHTML = programming_content_container;
                document.getElementById("view_criteria").value = programming_concepts[index].programming_concept_category;
	    	}
            else{
                document.getElementById(PROGRAMMING_CONTENT_ID).innerHTML = programming_content_temp; 
            }
			window.scrollTo({ top: 0, behavior: 'smooth' });
			document.getElementById(PROGRAMMING_CONCEPT_INPUT_ID).value = "";
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


function sort_by_selection(element_id,search_flag){
	let selected_option = document.getElementById(element_id).value;
	populate_programming_concepts(search_flag,selected_option);
}


