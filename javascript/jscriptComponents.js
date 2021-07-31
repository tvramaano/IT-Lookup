const const_switch_status = {open_status: "open_status_id",close_status: "close_status_id"}; 
const element_status = {hide_section: "none",show_section: "block"};
const html_elements = {div_element: "DIV",input_element: "input",id_element: "id", class_element: "class",bold_element: "<b>",click_action: "click"};


const star_symbol = "&#10031;";
var star_rating = "";


function createModal(modal_id,header_info,button_label,content_info,onclick_function){
	document.getElementById(modal_id).innerHTML = "<section class = 'cart_information_modal'>"+
												  "<div class = 'cart_information_modal_header'><h2>"+header_info+"</h2><span onclick = \" pop_up_modal('"+const_switch_status.close_status+"','"+modal_id+"')\">X</span></div>"+	
												  "<div class = 'cart_information_modal_info'>"+content_info+"</div>"+
												  "<div class = 'confirm_button'><button onclick = '"+onclick_function+"'>"+button_label+"</button></div>"+
												  "</section>";
}



// generate star rating 
function generate_star_rating(number_of_stars,active_stars,heading,element_id){
	star_rating = "<div class = 'stars_rating_container'><h4>"+heading+"</h4>";
	star_rating += "<div class = 'stars_rating'>";
	
	for(let i = 0; i < active_stars;i++){
		star_rating += star_symbol + " "; 
	}
    star_rating += "</div>";
	
	star_rating += "<div class = 'stars_unrated'>";
	for(let j = 0; j < (number_of_stars - active_stars);j++){
		star_rating += star_symbol + " "; 
	}
    star_rating += "</div>";
	star_rating += "</div>";
	
	document.getElementById(element_id).innerHTML = star_rating;
	
	//return star_rating;
}
