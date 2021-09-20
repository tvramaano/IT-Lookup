const categories = [{category_name: "View all"},{category_name: "Data type"},{category_name: "Variable identifier"},{category_name: "Access modifier"},{category_name: "Conditions"},{category_name: "Loops"},{category_name: "Web development"},{category_name: "HTML tags"},{category_name: "CSS"},{category_name: "Functions"},{category_name: "Programming Languages"},{category_name: "Object orientation"}];
const type = {template: "template", defintion: "definition"};
const programming_concepts_headers = {concept_name: "Sort by: name", concept_category: "Sort by: default"};
const updated_dates = {updated_date_1: "Latest update: 25 July 2021"}

var programming_concepts = [
{programming_concept_name: "byte", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing both negative and positive numerical non-decimal values [stored as 1 byte].",
programming_concept_example: "<code>"+
								indent(1)+"byte byte_variable = 10;"+
							 "</code>"
},
{programming_concept_name: "integer", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing both negative and positive numerical non-decimal values [stored as 2 bytes].",
programming_concept_example: "<code>"+
								indent(1)+"int value = 2;"+
							 "</code>"
},
{programming_concept_name: "double", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing both negative and positive numerical decimal values [stored as 8 bytes].",
programming_concept_example: "<code>"+
								indent(1)+"double average = 22.5;"+
							 "</code>"
},
{programming_concept_name: "float", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing both negative and positive numerical decimal values [stored as 4 bytes].",
programming_concept_example: "<code>"+
								indent(1)+"float price = 14.30;"+
							 "</code>"
},
{programming_concept_name: "boolean", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing either true or false.",
programming_concept_example: "<code>"+
								indent(1)+"boolean isValid = true;"+
							 "</code>"
},
{programming_concept_name: "short", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing both negative and positive numerical non-decimal values [stored as 2 bytes].",
programming_concept_example: "<code>"+
								indent(1)+"short value = 3;"+
							 "</code>"
},
{programming_concept_name: "long", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing both negative and positive numerical decimal values [stored as 4 bytes].",
programming_concept_example: "<code>"+
								indent(1)+"long average = 33.2;"+
							 "</code>"
},

{programming_concept_name: "string", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing a collection of characters.",
programming_concept_example: "<code>"+
								indent(1)+"String stringVariable = "+ wrapText("This is a string",opening_double_quote,closing_double_quote)+
							 "</code>"
},

{programming_concept_name: "char", 
programming_concept_category: categories[1].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Data type used for storing a single character.",
programming_concept_example: "<code>"+
								indent(1)+"char singleCharacter = "+ wrapText("a",opening_single_quote,closing_single_quote)+
							 "</code>"
},

{programming_concept_name: "variable", 
programming_concept_category: categories[2].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "A small memory box that can store a value",
programming_concept_example: "int variable_name = value_of_variable;"
},
{programming_concept_name: "constant", 
programming_concept_category: categories[2].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Once the value is set, it can no longer be changed",
programming_concept_example: "<code>"+
								indent(1)+"constant_identifier CONSTANT_VARIABLE = CONSTANT_VALUE;"+
							 "</code>"
},
{programming_concept_name: "static variable", 
programming_concept_category: categories[2].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "A class variable belonging to the class and not the instance of the class. Exists for the entire duration of the program.",
programming_concept_example: "<code>"+
							 "public class myClassName(){</br></br>"+
								indent(1)+"static data_type static_variable_name = static variable value;</br></br>"+
							 "}</br></br>"+
							 "<u>In main class</u></br></br>"+
								indent(1)+"data_type access_static_variable = myClassName.static_variable_name;"+
							 "</code>"
},
{programming_concept_name: "global variable", 
programming_concept_category: categories[2].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "A variable that is declared and/or initialised at the beginning of your program/file. The scope of the variable is the entire program/file.",
programming_concept_example: "<code>"+
							 "globalVariabe = 20;<br>"+
							 "</code>"
},
{programming_concept_name: "local variable", 
programming_concept_category: categories[2].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "A variable that is declared within a block of code in the program/file. The scope of the variable is limited only within the block of code where it was declared.",
programming_concept_example: "<code>"+
							 "for(i = 0; i < length;i++){<br>"+
							 indent(2)+"localVariable = 20;</br>"+
							 "}</br>"+
							 "</code>"
},

{programming_concept_name: "public", 
programming_concept_category: categories[3].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Members can be accessed throughout the entire project",
programming_concept_example: "<code>"+
								"public className(){</br></br>"+
								indent(1)+"public return_type functionName(){</br>"+
								indent(2)+"...</br>"+
								indent(1)+"}</br></br>"+
								"}"+
							 "</code>"
},
{programming_concept_name: "private", 
programming_concept_category: categories[3].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Members can be accessed only within the class",
programming_concept_example: "<code>"+
								"public className(){</br></br>"+
								indent(1)+"private return_type functionName(){</br>"+
								indent(2)+"...</br>"+
								indent(1)+"}</br></br>"+
								"}"+
							 "</code>"
},
{programming_concept_name: "protected", 
programming_concept_category: categories[3].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Members can be accessed only within the same package/namespace",
programming_concept_example: "<code>"+
								"public className(){</br></br>"+
								indent(1)+"protected return_type functionName(){</br>"+
								indent(2)+"...</br>"+
								indent(1)+"}</br></br>"+
								"}"+
							 "</code>"
},

{programming_concept_name: "if-else statement", 
programming_concept_category: categories[4].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Used to execute an operation only when a condition evaluates to true. When the condition evaluates to false, then the operation stated on the else statment is executed.",
programming_concept_example: "<code>"+
								"int a = 6;</br></br>"+
								"if(a > 10){</br>"+
								indent(1)+"a = a + 2;</br>"+
								"}</br></br>"+
								"else {</br>"+
								indent(1)+"a = a + 5;</br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "if statement", 
programming_concept_category: categories[4].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Used to execute an operation only when a condition evaluates to true",
programming_concept_example: "<code>"+
								"int a = 6;</br></br>"+
								"if(a > 10){</br>"+
								indent(1)+"a = a + 2;</br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "else if statement", 
programming_concept_category: categories[4].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Used to execute an operation only when the condition evaluates to true. Specified after an if statement and before a (single) else statment (if it exists). There can exist more than one else if statement but there can only be one else statement.",
programming_concept_example: "<code>"+
								"int a = 6;</br></br>"+
								"if(a > 10){</br>"+
								indent(1)+"a = a + 2;</br>"+
								"}</br></br>"+
								"else if(a < 10 && a > 5){</br>"+
								indent(1)+"a = a + 5;</br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "tenary operator (? :)", 
programming_concept_category: categories[4].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is the short hand for an if else statement using ? and : On the left of ?, we specify the condition to be evaluated.On the right of ?, we specify the operation to be executed when the condition evaluates to true. On the right of :, we specify the condition to be executed when the condition evaluates to false.",
programming_concept_example: "<code>"+
								"(a == 6) ? a = a + 2 : a = a + 5;"+
							 "</code>"
},
{programming_concept_name: "switch-case statement", 
programming_concept_category: categories[4].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is the equivalent of having a lot of else if statements. We start with the switch statment in which has the parameter to be evaluated. After the switch statment, we have a bunch of case statements which represents different values that the parameter can evaluate to. If the parameter does not equal any of the values stated in the case statements then we execute the default statement which is specified after the last case statement.",
programming_concept_example: "<code>"+
							 "int a = 6;"+
							 "switch(a){</br></br>"+
								indent(1)+"case 6:{</br>"+
								indent(2)+"...</br>"+
								indent(2)+"}break;</br></br>"+
								indent(1)+"case 2:{</br>"+
								indent(2)+"...</br>"+
								indent(2)+"}break;</br></br>"+
								"...</br></br>"+
								indent(1)+"default:{</br>"+
								indent(2)+"...</br>"+
								indent(2)+"}</br>"+
								"}"+
							 "</code>"
},

{programming_concept_name: "while loop", 
programming_concept_category: categories[5].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Execute an operation as long as the condition stated in the while evaluates to true. With while loops, it is a good idea to place a stop value so that the operation is executed up until the stop value is reached otherwise the while loop will execute infinitely causing the program to crash.",
programming_concept_example: "<code>"+
								"int a = 6;</br></br>"+
								"while(a < 10){</br>"+
									indent(1)+"a = a + 1;</br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "do while", 
programming_concept_category: categories[5].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Execute the operation specified in the do block as long as the condition stated in the while evaluates to true. Unlike in a normal while loop, the first iteration of the do statement will always be executed no matter the condition stated in the while",
programming_concept_example: "<code>"+
								"int a = 6;</br></br>"+
								"do{</br>"+
									indent(1)+"a = a + 1;</br>"+
								"}</br>"+
								"while(a < 10);"+
							 "</code>"
},
{programming_concept_name: "for loop", 
programming_concept_category: categories[5].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Execute an operation a certain number of times.",
programming_concept_example: "<code>"+
								"int a = 6;</br></br>"+
								"for(int i = 0; i < 10; i++){</br>"+
									indent(1)+"a = a + i;</br>"+
								"}</br>"+
							 "</code>"
},

{programming_concept_name: "nested for loop", 
programming_concept_category: categories[5].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Having a number of for loops contained inside one for loop. This is used mainly when executing operations on multi-dimensional objects.",
programming_concept_example: "<code>"+
								"int a[][] = new int[10][10];</br></br>"+
								"for(int i = 0; i < 10; i++){</br>"+
									indent(1)+"for(int j = 0; j < 10; j++){</br>"+
									indent(2)+"a[i][j] = (i+j)</br>"+
									indent(1)+"}</br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "for each loop", 
programming_concept_category: categories[5].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Execute the operation for each item contained in a collection.",
programming_concept_example: "<code>"+
								"foreach(a in array){</br>"+
									indent(1)+"a = a + 1;</br>"+
								"}</br>"+
							 "</code>"
},

{programming_concept_name: "html", 
programming_concept_category: categories[6].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Hyper Text Markup Language. This is the standard markup language that is used to create web pages. These web pages can also be styled using CSS (Cascading Style Sheet) and can have scripting applied to it using Javascript.",
programming_concept_example: "<code>"+
								"< html ></br>"+
									indent(2)+"< head ></br>"+
										indent(4)+"< title > Website title < / title ></br>"+
									indent(2)+"< \ head ></br>"+
									indent(2)+"< body ></br></br>"+
									indent(2)+"< / body ></br>"+
								"< / html >"+
							 "</code>"
},
{programming_concept_name: "css", 
programming_concept_category: categories[6].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Cascading Style Sheet. This is used to style HTML pages.",
programming_concept_example: "<code>"+
								".change_font_size{</br></br>"+
								indent(2)+"font-size: 20px</br></br>"+
								"}</br>"+
							 "</code>"

},

{programming_concept_name: "react", 
programming_concept_category: categories[6].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Also referred to as React JS. This is an open source front end javascript library used to build web applications.",
programming_concept_example:  "<code>"+
							  "import React from "+wrapText("react",opening_single_quote,closing_single_quote)+";</br>"+
							  "import ReactDom from "+wrapText("react-Dom",opening_single_quote,closing_single_quote)+";</br></br>"+
							   "ReactDom.render(</br>"+
							   indent(2)+ wrapText("h2",opening_angle_bracket,closing_angle_bracket_1) + " Your first react app " + wrapText("h2",opening_angle_bracket_1,closing_angle_bracket_1)+",<br>"+
							   indent(2)+"document.getElementById("+wrapText("app",opening_single_quote,closing_single_quote)+")</br>"+
							   ");"+
							   "</code>"
							   
							 
},

{programming_concept_name: "angular", 
programming_concept_category: categories[6].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Also referred to as Angular JS. This is an open source javascript framework used to build front end single-page web applications.",
programming_concept_example: "<code>"+
								wrapText("h2",opening_angle_bracket,closing_angle_bracket_1)+"{{data}}"+wrapText("h2",opening_angle_bracket_1,closing_angle_bracket_1)+"</br>"+
							  "</code>"
},
{programming_concept_name: "web hosting", 
programming_concept_category: categories[6].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Storing your web pages on a server so that they can be displayed on a browser.",
programming_concept_example: "The domain codex.com is hosted by this hosting company"
},
{programming_concept_name: "domain name", 
programming_concept_category: categories[6].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is the name used when accessing a website on a web browser.",
programming_concept_example: "codex.com"
},
{programming_concept_name: "url", 
programming_concept_category: categories[6].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Uniform Resource Locator. This is the address of the website you want access to.",
programming_concept_example: "www.codex.com"
},

{programming_concept_name: "br", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "HTML tag that represents a new line.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
											indent(4) +"Properties of the head go here </br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + wrapText("p",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This text is in this line</br>"+
												indent(6) + wrapText("br",opening_angle_bracket_1,closing_angle_bracket_1)+"</br>"+
												indent(6)+ "This text is in a new line</br>"+
											indent(4) + wrapText("p",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
								
							 "</code>"
},
{programming_concept_name: "head", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "HTML tag that allows you to set the web page title; icon; links to external javascript files and links to external css files",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + wrapText("link rel="+wrapText("icon",opening_single_quote,closing_single_quote)+" type="+wrapText("image/png",opening_single_quote,closing_single_quote) +" href="+wrapText("path to icon",opening_single_quote,closing_single_quote),opening_angle_bracket,closing_angle_bracket)+"</br></br>"+
											
											indent(4) + wrapText("title",opening_angle_bracket,closing_angle_bracket_1)+
											"Title of website"+
											wrapText("title",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + wrapText("link rel="+wrapText("stylesheet",opening_single_quote,closing_single_quote)+" href="+wrapText("path to stylesheet",opening_single_quote,closing_single_quote),opening_angle_bracket,closing_angle_bracket)+"</br></br>"+
											indent(4) + wrapText("script src="+wrapText("path to javascript file",opening_double_quote,closing_double_quote)+" type="+wrapText("text/javascript",opening_single_quote,closing_single_quote),opening_angle_bracket,closing_angle_bracket)+
											wrapText("script",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2)+"...</br></br>"+
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "body", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is where you put everything that is required to design a web page",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) +"This is the body of the website</br></br>"+	
											
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "p", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag represents a paragraph",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) +wrapText("p",opening_angle_bracket,closing_angle_bracket_1)+
												"This is a paragraph"+
												wrapText("p",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+	
											
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "div", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is a division and used as a block element that wraps around images, texts and other web related content. We can apply a class or id to style the div block.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) + wrapText("div",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is a div block</br>"+
												indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+	
											
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "section", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag represents a section in which is used to wrap around web related contnent for example: headings, paragraphs, images etc.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) + wrapText("section",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is a section that wraps web related content</br>"+
												indent(4) + wrapText("section",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+	
											
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "code", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used for any code snippets that you would like to add into your website.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) + wrapText("code",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "System.out.println("+wrapText("This is a representation of java code",opening_double_quote,closing_double_quote)+");</br>"+
												indent(4) + wrapText("code",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+	
											
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "heading (h1,h2,h3,h4,h5,h6)", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to add a heading into your website. Each heading level (h1.h2,h3,h4,h5,h6) represents the size of the heading from largest (h1) to smallest (h6).",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) + wrapText("h1",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is the largest heading size</br>"+
												indent(4) + wrapText("h1",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
												
												indent(4) + wrapText("h2",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is the second largest heading size</br>"+
												indent(4) + wrapText("h2",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

												indent(4) + wrapText("h3",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is the third largest heading size</br>"+
												indent(4) + wrapText("h3",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

												indent(4) + wrapText("h4",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is the fouth largest heading size</br>"+
												indent(4) + wrapText("h4",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

												indent(4) + wrapText("h5",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is the fifth largest heading size</br>"+
												indent(4) + wrapText("h5",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

												indent(4) + wrapText("h6",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
												indent(6) + "This is the smallest heading size</br>"+
												indent(4) + wrapText("h6",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "nav", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent that a navigation is to be created.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) + wrapText("nav",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
														
														indent(6) + wrapText("a href ="+wrapText("path to navigation tab 1",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
														"Navigation tab 1"+
													    wrapText("a",opening_angle_bracket_1,closing_angle_bracket_1)+"</br>"+
														indent(6) + wrapText("a href ="+wrapText("path to navigation tab 2",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
														"Navigation tab 2"+
														wrapText("a",opening_angle_bracket_1,closing_angle_bracket_1)+"</br>"+
														indent(6) + wrapText("a href ="+wrapText("path to navigation tab 3",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
														"Navigation tab 3"+
														wrapText("a",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
												indent(4) + wrapText("nav",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "header", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent that a header is to be created at the top of the website.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											
												indent(4) + wrapText("header",opening_angle_bracket,closing_angle_bracket_1)+
													"This is the header for this website"+
												wrapText("header",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

												indent(4)+"...</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "footer", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent that a footer is to be created at the bottom of the website.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

												indent(4)+"...</br></br>"+

												indent(4) + wrapText("footer",opening_angle_bracket,closing_angle_bracket_1)+
													"This is the footer for this website"+
												wrapText("footer",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "aside", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent that a side navigation is to be created on either the left or right side of a web page.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

												indent(4) + wrapText("aside",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
													indent(6) + wrapText("a href ="+wrapText("path to side navigation tab 1",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Side navigation tab 1"+
													wrapText("a",opening_angle_bracket_1,closing_angle_bracket_1)+"</br>"+
													indent(6) + wrapText("a href ="+wrapText("path to side navigation tab 2",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Side navigation tab 2"+
													wrapText("a",opening_angle_bracket_1,closing_angle_bracket_1)+"</br>"+
													indent(6) + wrapText("a href ="+wrapText("path to side navigation tab 3",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Side navigation tab 3"+
													wrapText("a",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
												indent(4) + wrapText("aside",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "span", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used as an inline element. We can use it to style section of text within a paragraph.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + wrapText("p",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6) + "This is an "+
												wrapText("span",opening_angle_bracket,closing_angle_bracket_1)+
														"inline text that has styling"+
												wrapText("span",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + wrapText("p",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+			
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "style", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to implement styling within the html file rather than using an external scc file. We use this html tag in the head.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + wrapText("style",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6) + ".className1{</br>"+
													indent(8) + "color: red;</br>"+
												indent(6) + "}</br>"+
												indent(6) + ".className2{</br>"+
													indent(8) + "color: blue;</br>"+
												indent(6) + "}</br>"+
												indent(6) + "#idName1{</br>"+
													indent(8) + "display: block;</br>"+
												indent(6) + "}</br></br>"+
											indent(4) + wrapText("style",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + "...</br></br>"+			
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "script", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to embed javascript in an html file rather than using an external javascript file.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4) + wrapText("script",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6) + "function functionName(){</br>"+
													indent(8) + "console.log("+wrapText("This is javascript code embedded in an html file",opening_double_quote,closing_double_quote)+");</br>"+
												indent(6) + "}</br></br>"+
											indent(4) + wrapText("script",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+			
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "a", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent a link to another page/url",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("a href ="+wrapText("link to another page",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Another page"+
											wrapText("a",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "img", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent an image",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("img src ="+wrapText("path to the image",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "video", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent a video",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("video src ="+wrapText("path to the video",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},
{programming_concept_name: "iframe", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This HTML tag is used to represent an area where one is able to view documents and images on a web page.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("iframe width = "+wrapText("600",opening_double_quote,closing_double_quote)+" height = " + wrapText("600",opening_double_quote,closing_double_quote)+" src ="+wrapText("path to the document/image",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket)+
											wrapText("iframe",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+
							
							 "</code>"
},

{programming_concept_name: "class", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "We can set a class to each HTML tag so as to apply styling to the content contained by the HTML tag and also apply scripting to the content. You can apply the same class name to different HTML tags.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("className",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Content contained in a div with a class name"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("className",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Content contained in a div with the same class name as above"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								"<u>CSS File</u></br></br>"+

								".className{</br>"+
								indent(2)+ "color: red;</br>"+
								"}</br>"+
							
							 "</code>"
},
{programming_concept_name: "id", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "We can set an id to each HTML tag so as to apply styling to the content contained by the HTML tag and also apply scripting to the content. Important to note with ids as compared to a class is that ids are unique to each element.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div id ="+wrapText("id_unique_name_1",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Content contained in a div with unique id"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div id ="+wrapText("id_unique_name_2",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Content contained in a div with unique id"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								"<u>CSS File</u></br></br>"+

								"#id_unique_name_1{</br>"+
								indent(2)+ "color: red;</br>"+
								"}</br></br>"+

								"#id_unique_name_2{</br>"+
								indent(2)+ "color: blue;</br>"+
								"}</br>"+
							
							 "</code>"
},
{programming_concept_name: "color", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set the color of your text. You can set the color by stating the name of the color as follows: orange, red, blue, yellow etc. You can also set the color using rgb(value1,value2,value3) format. You can also set the color using the hexadecimal format (#FFF).",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyTextColor",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Text to apply color"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										"<u>CSS File</u></br></br>"+

										".applyTextColor{</br>"+
										indent(2)+ "color: red;</br>"+
										"}</br>"+
										
							
							
							 "</code>"
},
{programming_concept_name: "background-color", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set the background color of a container",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyBackgroundColor",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply a background color to this div container"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										"<u>CSS File</u></br></br>"+

										".applyBackgroundColor{</br>"+
										indent(2)+ "width: 200px;</br>"+
										indent(2)+ "height: 200px;</br>"+
										indent(2)+ "background-color: red;</br>"+
										"}</br>"+
										
							
							
							 "</code>"
},
{programming_concept_name: "width", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set how wide a container should be. You can set the width using px,vw and %.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyWidth",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply a width to this div container"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
									
										wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										"<u>CSS File</u></br></br>"+

										".applyWidth{</br>"+
										indent(2)+ "width: 200px;</br>"+
										indent(2)+ "height: 200px;</br>"+
										"}</br>"+
										
								
							
							 "</code>"
},
{programming_concept_name: "height", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set how high a container should be. You can set the height using px,vh and %.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyHeight",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply a height to this div container"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
									
										wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										"<u>CSS File</u></br></br>"+

										".applyHeight{</br>"+
										indent(2)+ "width: 200px;</br>"+
										indent(2)+ "height: 30%;</br>"+
										"}</br>"+
										
								
							
							 "</code>"
},
{programming_concept_name: "font-size", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set the size of the text in pixels (px)",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyFontSize",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply a font size to this text"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										"<u>CSS File</u></br></br>"+

										".applyFontSize{</br>"+
										indent(2)+ "font-size: 20px;</br>"+
										"}</br>"+
										
								
							
							 "</code>"
},
{programming_concept_name: "font-weight", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set a bold property to the text",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyFontWeight",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply a font weight to this text"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										"<u>CSS File</u></br></br>"+

										".applyFontWeight{</br>"+
										indent(2)+ "font-weight: 600;</br>"+
										"}</br>"+
										
								
							
							 "</code>"
},
{programming_concept_name: "font-family", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set the font theme name of the text. You can set more than one font theme name where if your first choice font theme name is not supported by the browser, then it will move to apply the next font theme that you specified.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyFontFamily",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply a font family to this text"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										"<u>CSS File</u></br></br>"+

										".applyFontFamily{</br>"+
										indent(2)+ "font-family: "+wrapText("Times New Roman",opening_single_quote,closing_single_quote)+", Arial, Stencil;</br>"+
										"}</br>"+
										
							
							
							 "</code>"
},
{programming_concept_name: "font-style", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to set the text as italics, normal etc. ",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyFontStyle",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply a font style of italics to this text"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										"<u>CSS File</u></br></br>"+

										".applyFontStyle{</br>"+
										indent(2)+ "font-style: italics;</br>"+
										"}</br>"+
										
								
							
							 "</code>"
},
{programming_concept_name: "margin", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to apply spacing around a container (div element, images, text etc.) ",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyMargin",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply margin around this div element"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyMarginInADifferentWay_1",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Apply margin around this div element in a different way"+
											 wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											 indent(6) + wrapText("div class ="+wrapText("applyMarginInADifferentWay_2",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Apply margin around this div element in a different way"+
											 wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								"/*Applying margin in this way means that the div container will have a space of 20px on the left, right, top and bottom of the div container*/</br>"+
								".applyMargin{</br>"+
								indent(2)+ "margin: 20px</br>"+
								"}</br></br>"+

								"/*Applying margin in this way has the same result as above*/</br>"+
								".applyMarginInADifferentWay_1{</br>"+
								indent(2)+ "margin-left: 20px</br>"+
								indent(2)+ "margin-right: 20px</br>"+
								indent(2)+ "margin-top: 20px</br>"+
								indent(2)+ "margin-bottom: 20px</br>"+
								"}</br></br>"+

								"/*Applying margin in this way has the same result as the 2 classes above*/</br>"+
								".applyMarginInADifferentWay_2{</br>"+
								indent(2)+ "margin: 20px 20px 20px 20px</br>"+
								"}</br>"+

							
							 "</code>"
},
{programming_concept_name: "padding", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to apply spacing within a container (div element, images, text etc.) ",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyPadding",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply padding around this div element"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyPaddingInADifferentWay_1",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Apply padding around this div element in a different way"+
											 wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											 indent(6) + wrapText("div class ="+wrapText("applyPaddingInADifferentWay_2",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Apply padding around this div element in a different way"+
											 wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
													
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								"/*Applying padding in this way means that the div container will have a space of 20px on the left, right, top and bottom of the div container*/</br>"+
								".applyPadding{</br>"+
								indent(2)+ "padding: 20px</br>"+
								"}</br></br>"+

								"/*Applying padding in this way has the same result as above*/</br>"+
								".applyPaddingInADifferentWay_1{</br>"+
								indent(2)+ "padding-left: 20px</br>"+
								indent(2)+ "padding-right: 20px</br>"+
								indent(2)+ "padding-top: 20px</br>"+
								indent(2)+ "padding-bottom: 20px</br>"+
								"}</br></br>"+

								"/*Applying padding in this way has the same result as the 2 classes above*/</br>"+
								".applyPaddingInADifferentWay_2{</br>"+
								indent(2)+ "padding: 20px 20px 20px 20px</br>"+
								"}</br>"+

							
							 "</code>"
},
{programming_concept_name: "position: fixed", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to place a div container at a specific place in the web page that will stick at that same place when you scroll the web page. The container is placed reative to the browser window.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("nav class ="+wrapText("applyPositionFixed",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply position fixed on the top of the web page"+
											wrapText("nav",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".applyPositionFixed{</br>"+
								indent(2)+ "position: fixed;</br>"+
								indent(2)+ "top: 0;</br>"+
								indent(2)+ "width: 100%</br>"+
								"}</br></br>"+

								
							
							 "</code>"
},
{programming_concept_name: "position: absolute", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to place a div container at a specific place in the web page but will not stick at that same place when you scroll the web page. The container is placed relative to its ancestor element that has been positioned.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyPositionAbsolute",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply position absolute on the left side the web page"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".applyPositionAbsolute{</br>"+
								indent(2)+ "position: absolute;</br>"+
								indent(2)+ "left: 0;</br>"+
								indent(2)+ "width: 300px</br>"+
								"}</br></br>"+

								
							
							 "</code>"
},
{programming_concept_name: "position: relative", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used to place a div container at a specific place in the web page that is relative to its current poisition.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyPositionRelative",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply position relative on the left side the web page"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".applyPositionRelative{</br>"+
								indent(2)+ "position: relative;</br>"+
								indent(2)+ "left: 50px;</br>"+
								indent(2)+ "width: 300px</br>"+
								"}</br></br>"+

								
							
							 "</code>"
},
{programming_concept_name: "position: static", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style is used as the default placement of a container. The container is placed in the order that it has been set.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("applyPositionStatic",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply position static on this container"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".applyPositionStatic{</br>"+
								indent(2)+ "position: static;</br>"+
								indent(2)+ "width: 300px</br>"+
								indent(2)+ "height: 300px</br>"+
								"}</br></br>"+

								
							
							 "</code>"
},
{programming_concept_name: "position: inherit", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style inherits allows a container to inherit the property the its parent container.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("parentContainer",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												indent(6) + wrapText("div class ="+wrapText("childContainer",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
													"Apply position inherit on this container"+
												wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".parentContainer{</br>"+
								indent(2)+ "position: relative;</br>"+
								indent(2)+ "width: 300px</br>"+
								indent(2)+ "height: 300px</br>"+
								"}</br></br>"+

								".childContainer{</br>"+
								indent(2)+ "position: inherit;</br>"+
								indent(2)+ "width: 50px</br>"+
								indent(2)+ "height: 50px</br>"+
								"}</br></br>"+

								
							
							 "</code>"
},
{programming_concept_name: "position: unset", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style property removes the position property of the container that was previously set.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("unsetPosition",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Unset the position of this container"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".unsetPosition{</br>"+
								indent(2)+ "position: unset;</br>"+
								"}</br></br>"+

								
							
							 "</code>"
},
{programming_concept_name: "text align", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style sets the position of a text in a container.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("textAlignLeft",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Position this text to the left"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("textAlignRight",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Position this text to the right"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("textAlignCenter",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Position this text to the center"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".textAlignLeft{</br>"+
								indent(2)+ "text align: left;</br>"+
								"}</br>"+

								".textAlignCenter{</br>"+
								indent(2)+ "text align: center;</br>"+
								"}</br>"+

								".textAlignRight{</br>"+
								indent(2)+ "text align: right;</br>"+
								"}</br></br>"+

							 "</code>"
},
{programming_concept_name: "float (css)", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style drags a container eithr towards the right or left of a web page.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("floatLeft",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Drag this container towards the left of the web page"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(6) + wrapText("div class ="+wrapText("floatRight",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+
												"Drag this container towards the right of the web page"+
											wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
										
								".floatLeft{</br>"+
								indent(2)+ "float: left;</br>"+
								indent(2)+ "width: 30%;</br>"+
								"}</br>"+

								".floatRight{</br>"+
								indent(2)+ "float: right;</br>"+
								indent(2)+ "width: 30%;</br>"+
								"}</br>"+

								
							 "</code>"
},
{programming_concept_name: "media screen", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is used to specify css for a specific screen width size. We can choose to use max-width or min-width depending on your intention.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4)+"...</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								"/*Apply this CSS to all screen width size up to 769 pixels*/</br></br>"+
								"@media screen and (max-width: 769px){</br>"+
									indent(2)+"body{</br>"+
										indent(4)+"...</br>"+
									indent(2)+"}</br>"+
								
								"}</br></br>"+

								"/*Apply this CSS to all screen width sizes from 769 pixels upwards*/</br></br>"+
								"@media screen and (min-width: 769px){</br>"+
									indent(2)+"body{</br>"+
										indent(4)+"...</br>"+
									indent(2)+"}</br>"+
								
								"}</br>"+

								
							 "</code>"
},

{programming_concept_name: "border-radius", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style allow one to alter the curvature of the border edges. If the value is 0, then the border egdes become sharp corners.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Alter the curvature of this box</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								"div{</br>"+
									
									indent(2)+"height: 100px;</br>"+
									indent(2)+"weight: 100px;</br>"+
									indent(2)+"border-radius: 10px;</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "border", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style allow one to alter the border properties including: thckness, color and style of an element.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Alter the border properies of this element</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								"div{</br>"+
									
									indent(2)+"height: 100px;</br>"+
									indent(2)+"weight: 100px;</br>"+
									indent(2)+"border-radius: 10px;</br>"+
									indent(2)+"border: 1px solid yellow;</br>"+

								"}</br></br>"+

								"/*The following below is the same as above*/</br></br>"+
								"div{</br>"+
									
									indent(2)+"height: 100px;</br>"+
									indent(2)+"weight: 100px;</br>"+
									indent(2)+"border-radius: 10px;</br>"+
									indent(2)+"border-left: 1px solid yellow;</br>"+
									indent(2)+"border-right: 1px solid yellow;</br>"+
									indent(2)+"border-bottom: 1px solid yellow;</br>"+
									indent(2)+"border-top: 1px solid yellow;</br>"+

								"}</br></br>"+



								
							 "</code>"
},
{programming_concept_name: "display", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style describes the way an element is displayed. Some property values of display include block, flex, inline, inline-block, inline-flex, inherit, none and grid.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("display_block",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"This element is displayed as a block element.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("display_none",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"This element is not shown.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("display_flex",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"This element is displayed as flex.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("display_inline",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"This element is displayed as inline. It does not have width and height properties.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".display_block{</br>"+
									
									indent(2)+"display: block;</br>"+

								"}</br></br>"+

								".display_none{</br>"+
									
									indent(2)+"display: none;</br>"+

								"}</br></br>"+

								".display_flex{</br>"+
									
									indent(2)+"display: flex;</br>"+

								"}</br></br>"+

								".display_inline{</br>"+
									
									indent(2)+"display: inline;</br>"+

								"}</br></br>"+



								
							 "</code>"
},

{programming_concept_name: "background-image", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style allows one to set the background image of a container",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + "...</br></br>"+
											
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								"body{</br>"+
									
									indent(2)+"background-image: url(/*path to image file*/);</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "z-index", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This value from this css style determines whether an element is displayed in front or behind of another element. Elements with a higher z-index are in front of elements with a lower index.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("display_in_front",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"This element is displayed in front.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("display_behind",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"This element is displayed behind.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
											
										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".display_in_front{</br>"+
									
									indent(2)+"position: absolute;</br>"+
									indent(2)+"width: 200px</br>"+
									indent(2)+"height: 200px</br>"+
									indent(2)+"z-index: 1</br>"+

								"}</br></br>"+

								".display_behind{</br>"+
									
									indent(2)+"position: absolute;</br>"+
									indent(2)+"width: 500px</br>"+
									indent(2)+"height: 500px</br>"+
									indent(2)+"z-index: -1</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "opacity", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style has values between 0 and 1 where values close to 1 means that the element is less transparent whereas values close to 0 means that the element is more transparent.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("set_opacity",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set opacity for this element.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".set_opacity{</br>"+
									
									indent(2)+"width: 200px</br>"+
									indent(2)+"height: 200px</br>"+
									indent(2)+"opacity: 0.5</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "cursor", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style allows one to set the cursor pointer. Some propery values for cursor include: pointer, progress, default, zoom-in, zoom-out, none, copy, etc.",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("cursor_pointer",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set the cursor to pointer which is the hand ponting icon</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("cursor_copy",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set the cursor to copy icon</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("cursor_progress",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set the cursor to progress icon</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("cursor_zoom_in",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set the cursor to zoom-in icon</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("cursor_zoom_out",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set the cursor to zoom-out icon</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+


										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".cursor_pointer{</br>"+
									
									indent(2)+"cursor: pointer</br>"+

								"}</br></br>"+

								".cursor_copy{</br>"+
									
									indent(2)+"cursor: copy</br>"+

								"}</br></br>"+

								".cursor_progress{</br>"+
									
									indent(2)+"cursor: progress</br>"+

								"}</br></br>"+

								".cursor_zoom_in{</br>"+
									
									indent(2)+"cursor: zoom-in</br>"+

								"}</br></br>"+

								".cursor_zoom_out{</br>"+
									
									indent(2)+"cursor: zoom-out</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "top", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style positions the element at the top of a web page",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("top",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set element to the top.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".top{</br>"+
									
									indent(2)+"top: 0;</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "bottom", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style positions the element at the bottom of a web page",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("bottom",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set element to the bottom.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".bottom{</br>"+
									
									indent(2)+"bottom: 0;</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "left", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style positions the element at the left of a web page",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("left",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set element to the left.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".left{</br>"+
									
									indent(2)+"left: 0;</br>"+

								"}</br></br>"+


								
							 "</code>"
},

{programming_concept_name: "right", 
programming_concept_category: categories[8].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This css style positions the element at the right of a web page",
programming_concept_example: "<code>"+
								wrapText("html",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
									
										indent(2) + wrapText("head",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
											indent(4)+"...</br></br>"+
										indent(2) + wrapText("head",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+

											indent(4) + wrapText("div class = "+wrapText("right",opening_double_quote,closing_double_quote),opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
												indent(6)+"Set element to the right.</br></br>"+
											indent(4) + wrapText("div",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

										indent(2) + wrapText("body",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+
										
										
										
								wrapText("html",opening_angle_bracket_1,closing_angle_bracket_1)+"</br></br>"+

								
								"<u>CSS File</u></br></br>"+
								
								".right{</br>"+
									
									indent(2)+"right: 0;</br>"+

								"}</br></br>"+


								
							 "</code>"
},



{programming_concept_name: "typed function", 
programming_concept_category: categories[9].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "A function that returns a value.",
programming_concept_example: "<code>"+
								"public return_type functionName() {</br></br>"+
								indent(2)+"return returnValue;</br></br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "void function", 
programming_concept_category: categories[9].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "A function that does not return a value.",
programming_concept_example: "<code>"+
								"public void functionName() {</br></br>"+
								indent(2)+"...</br></br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "async function", 
programming_concept_category: categories[9].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "A function that does not return a value.",
programming_concept_example: "<code>"+
								"public int async functionName() {</br></br>"+
								indent(2)+"int a = await request();</br></br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "function", 
programming_concept_category: categories[9].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "Defines a specific action that can be performed. Can have arguments passed to it in order to make it more interactive",
programming_concept_example: "<code>"+
								"public int functionName(/*You can choose to have parameters */) {</br></br>"+
								indent(2)+"//define the action here;</br></br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "recursive function", 
programming_concept_category: categories[9].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This type of function calls itself continuously until it reaches a base case. The base case is the value that allows for the function to stop calling itself.",
programming_concept_example: "<code>"+
								"recursiveFunctionName(/* parameters here */) {</br></br>"+
									indent(2)+"if(base case is reached){</br>"+
										indent(4)+"stop recursive function</br>"+
									indent(2)+"}</br></br>"+
									indent(2)+"recursiveFunctionName(/* parameters here */);</br>"+
								"}</br>"+
							 "</code>"
},

{programming_concept_name: "java", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This ia a statically-typed; object-oriented; general purpose programming language that you can use to create mobile, desktop and web applications. Java can be run on any device that has the Java Virtual Machine (JVM). The good thing with Java is that you can write the code once and then run anywhere. ",
programming_concept_example: "<code>"+
								"System.out.println("+wrapText("Welcome to java",opening_double_quote,closing_double_quote)+");"+
							 "</code>"
},
{programming_concept_name: "c++", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This statically-typed; general purpose programming language is an extension of the C programming language. It is a powerful language that can be used to create desktop applications, games and many more high performance applications.",
programming_concept_example: "<code>"+
								"public int async functionName() {</br></br>"+
								indent(2)+"int a = await request();</br></br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "c", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is a powerful, procedural and imperative programming language that was initially created to implement the UNIX Operating System. This powerful language is still very popular amongst software developers and can be used to create high performance applications.",
programming_concept_example: "<code>"+
								"public int async functionName() {</br></br>"+
								indent(2)+"int a = await request();</br></br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "c#", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is a statically-typed; object-oriented; general purpose programming language that can be used to create web applications; mobile applications; desktop applications and more. It is a powerful language that is used with the .NET framework.",
programming_concept_example: "<code>"+
								"public int async functionName() {</br></br>"+
								indent(2)+"int a = await request();</br></br>"+
								"}</br>"+
							 "</code>"
},
{programming_concept_name: "javascript", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is a general purpose; client side scripting language that is used to add functionality to html pages.",
programming_concept_example: "<code>"+
							  wrapText("script",opening_angle_bracket,closing_angle_bracket_1)+"</br>"+
							  indent(2)+"...</br>"+
							   wrapText("script",opening_angle_bracket_1,closing_angle_bracket)+"</br>"+
							  "</code>"
},
{programming_concept_name: "php", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "PHP Hypertext Preprocessor. This general purpose server-side scripting language is open source and can be used to run web applications. In order to get started with php, you will need a server in order to execute the scripts.",
programming_concept_example: "<code>"+
							  ""+opening_php_tag+"</br>"+
							  indent(2)+"echo "+ wrapText("This is php code",opening_double_quote,closing_double_quote)+";"+"</br>"+
							  closing_php_tag+"</br>"+
							  "</code>"
},
{programming_concept_name: "python", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is a great programming language for beginners as it it very easy to learn compared to the other programming languages. This general purpose programming language can be used in the data science field as well as creating web applications and many more software applications.",
programming_concept_example: "<code>"+
							  "def printFunction():</br>"+
							  indent(2)+"print("+wrapText("This is a python function",opening_double_quote,closing_double_quote)+")</br>"+
							  "</code>"
},

{programming_concept_name: "r language", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This programming language can be used for statistical analysis including: representation of graphs and tables, statistical calculations and many more statistical operations.",
programming_concept_example: "<code>"+
							 "> print("+wrapText("Welcome to R language",opening_double_quote,closing_double_quote)+")</br>"+
							 indent(1)+"[1] Welcome to R language</br>"+
							  "</code>"
},
{programming_concept_name: "visual basic", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is a weakly-typed; object-oriented programming language. It is good for beginners who want to learn to program as it is easy to learn.",
programming_concept_example: "<code>"+
							  "Sub Main()</br>"+
							  indent(2)+"Console.WriteLine("+wrapText("This is a visual basic project",opening_single_quote,closing_single_quote)+");</br>"+
							  "End Sub</br>"+
							  "</code>"
},

{programming_concept_name: "class", 
programming_concept_category: categories[11].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This defines the properties of an object. If we use a house as an example, we can say the house is a class and the house has a different properties.",
programming_concept_example: "<code>"+
							  "class ClassName(){</br>"+
							  indent(2)+"..."+"</br>"+
							  "}</br>"+
							  "</code>"
},
{programming_concept_name: "object", 
programming_concept_category: categories[11].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "An object is an instance of a class. The object contains the properties as defined by the associated class.",
programming_concept_example: "<code>"+
							  "class ClassName(){</br>"+
							  indent(2)+"..."+"</br>"+
							  "}</br></br>"+
							  "<u>Main class</u></br></br>"+
							  indent(2)+"ClassName classNameObject = new ClassName();</br>"+
							  "</code>"
},
{programming_concept_name: "default constructor", 
programming_concept_category: categories[11].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is used in the creation of an object by performing the necessary initialisations. The default constructor contains no parameters. Note that the constructor has the same name as the class name.",
programming_concept_example: "<code>"+
							  "class ClassName{</br>"+
								indent(2)+"public className(){"+"</br>"+
									indent(4)+"<i>perform initialisations here</i></br>"+
								indent(2)+"}</br>"+
							  "}</br>"+
							  "</code>"
},
{programming_concept_name: "parameterised constructor", 
programming_concept_category: categories[11].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is used in the creation of an object by performing the necessary initialisations. The parameterised constructor contains parameters used for the initialisations. Note that the constructor has the same name as the class name.",
programming_concept_example: "<code>"+
							  "class ClassName{</br>"+
								indent(2)+"public className(variable_1,variable_2,...){"+"</br>"+
									indent(4)+"<i>perform initialisations here</i></br>"+
								indent(2)+"}</br>"+
							  "}</br>"+
							  "</code>"
},
{programming_concept_name: "accessor", 
programming_concept_category: categories[11].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is used to get a value from a variable that was initially set to private.",
programming_concept_example: "<code>"+
							  "class ClassName{</br></br>"+
								indent(2)+"private String privateVariable = "+wrapText("This is a private variable",opening_double_quote,closing_double_quote)+";</br></br>"+
								indent(2)+"public className(variable_1,variable_2,...){"+"</br>"+
									indent(4)+"<i>perform initialisations here</i></br>"+
								indent(2)+"}</br></br>"+
								indent(2)+"public String getPrivateVariable(){</br>"+
								indent(4)+"return privateVariable;</br>"+
								indent(2)+"}</br>"+
							  "}</br>"+
							  "</code>"
},
{programming_concept_name: "mutator", 
programming_concept_category: categories[11].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is used to set/change the value of a variable that was initially set to private.",
programming_concept_example: "<code>"+
							  "class ClassName{</br></br>"+
								indent(2)+"private String privateVariable = "+wrapText("This is a private variable",opening_double_quote,closing_double_quote)+";</br></br>"+
								indent(2)+"public className(variable_1,variable_2,...){"+"</br>"+
									indent(4)+"<i>perform initialisations here</i></br>"+
								indent(2)+"}</br></br>"+
								indent(2)+"public void getPrivateVariable(String newValue){</br>"+
								indent(4)+"privateVariable = newValue;</br>"+
								indent(2)+"}</br>"+
							  "}</br>"+
							  "</code>"
},
{programming_concept_name: "inheritance", 
programming_concept_category: categories[11].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This is an object orientation principle where we have a base class that represents the generic features of an object. From that, we can specialise the object by inheriting the generic features from the base class and adding specialised features to the object. For example, we can have a generic shape class that contains the dimensions of a generic shape. We can then create sub classes that inherit the base shape class feature (dimensions) and specialise the shape.",
programming_concept_example: "<code>"+
							  "class specialisedClass inheritsFrom baseClass {</br></br>"+
							  indent(2)+"<i>Note that different languages have a different word for "+wrapText("inheritsFrom",opening_double_quote,closing_double_quote) +" for how we inherit from a base class</i></br>"+
								"}</br></br>"+
							  "</code>"
},




];
