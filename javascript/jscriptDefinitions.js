const categories = [{category_name: "View all"},{category_name: "Data type"},{category_name: "Variable identifier"},{category_name: "Access modifier"},{category_name: "Conditions"},{category_name: "Loops"},{category_name: "Web development"},{category_name: "HTML tags"},{category_name: "CSS"},{category_name: "Functions"},{category_name: "Programming Languages"},{category_name: "Object orientation"}];
const type = {template: "template", defintion: "definition"};
const programming_concepts_headers = {concept_name: "Sort by: name", concept_category: "Sort by: default"};
const updated_dates = {updated_date_1: "Latest update: 25 July 2021"}

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

{programming_concept_name: "< br >", 
programming_concept_category: categories[7].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "HTML tag that represents a new line."
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
								"public void functionName(); {</br></br>"+
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

{programming_concept_name: "java", 
programming_concept_category: categories[10].category_name,
programming_concept_type: type.defintion,
programming_concept_date: updated_dates.updated_date_1,
programming_concept_definition: "This ia a statically-typed; object-oriented; general purpose programming language that you can use to create mobile, desktop and web applications. Java can be run on any device that has the Java Virtual Machine (JVM). The good thing with Java is that you can write the code once and then run anywhere. ",
programming_concept_example: "<code>"+
								"public int async functionName() {</br></br>"+
								indent(2)+"int a = await request();</br></br>"+
								"}</br>"+
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
							  indent(2)+"Console.WriteLine("+wrapText("This is a visual basic project",opening_single_quote,closing_single_quote)+")</br>"+
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
{programming_concept_name: "Accessor", 
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
{programming_concept_name: "Mutator", 
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
