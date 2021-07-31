const type = {template: "template", tutorial: "tutorial"};
const image_src = {tutorial_image_src: "images/tutorial_videos.png",template_image_src: "images/template_src.png"};

const tab = "&nbsp;";
const opening_double_quote = "“";
const closing_double_quote = "”";

const opening_single_quote = "‘";
const closing_single_quote = "’";

const opening_angle_bracket = "<text><</text>";
const opening_angle_bracket_1 = "<text>&lt;</text><text>&#0047;</text>";
const closing_angle_bracket_1 = "<text>></text>";
const closing_angle_bracket = "<text>/></text>";

const opening_php_tag = "<text><</text><text>?</text><text>php</text>";
const closing_php_tag = "<text>?></text>";

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

var tutorialsAndTemplates = [
	{
		tutorials_and_templates_name: "Tutorial name 1",
		tutorials_and_templates_type: type.tutorial,
		tutorials_and_templates_img: image_src.tutorial_image_src,
		tutorials_and_templates_link: "Link"
	},
	
	{
		tutorials_and_templates_name: "Tutorial name 2",
		tutorials_and_templates_type: type.tutorial,
		tutorials_and_templates_img: image_src.tutorial_image_src,
		tutorials_and_templates_link: "Link"
	}

];
