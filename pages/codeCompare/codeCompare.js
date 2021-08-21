const setModeList = [getImageDir("../../")+image_sources.lightMode_icon,
                     getImageDir("../../")+image_sources.darkMode_icon];
colours = {light_colour: "rgb(250,250,250)",
           dark_blue_colour: "rgb(0,0,200)",
           dark_colour: "rgb(40,40,40)",}

let mode = 1;

const programming_languages = [
                            "Python",
                             "PHP",
                             "Java",
                             "C++",
                             "Javascript"
                            ];

const code_comparison_parameters = [
                                    {
                                        code_comparison_concept: "Output",
                                        python_code:      "print("+wrapText("Hello World in Python",opening_double_quote,closing_double_quote)+");",
                                        php_code:         wrapText(indent(4)+"echo "+ wrapText("Hello World in PHP",opening_double_quote,closing_double_quote)+";",
                                                                    opening_php_tag,
                                                                    closing_php_tag),
                                                             
                                                          
                                        java_code:        "public static void main(String[][] args){</br></br>"+
                                                              indent(2)+"System.out.println("+wrapText("Hello World in Java",opening_double_quote,closing_double_quote)+");</br></br>"+
                                                          "}",
                                        c_plus_plus_code: "#include "+wrapText("iostream",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "#include "+wrapText("string",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "using namespace std;</br></br>"+
                                                           "int main(){</br></br>"+ 
                                                                indent(2)+"cout << " + wrapText("Hello World in C++",opening_double_quote,closing_double_quote)+" << endl;</br>"+
                                                                indent(2)+"return 0;</br></br>"+
                                                           "}",
                                        javascript_code: "console.log("+wrapText("Hello World in Javascript",opening_double_quote,closing_double_quote)+");",
                                        output: "Hello World ",
                                    },
                                    {
                                        code_comparison_concept: "Variable declaration and initialisation",
                                        python_code:      "newVariable = " + wrapText("Variable declaration and intialisation in Python",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                          "print(newVariable);",
                                        php_code:         wrapText(indent(4)+"$newVariable = " + wrapText("Variable declaration and intialisation in php",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                                   "echo newVariable;",
                                                                   opening_php_tag,
                                                                   closing_php_tag),
                                        java_code:        "public static void main(String[][] args){</br></br>"+
                                                               indent(2)+"String newVariable = " + wrapText("Variable declaration and intialisation in Java",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                               indent(2)+"System.out.println(newVariable);</br></br>"+
                                                          "}",
                                        c_plus_plus_code: "#include "+wrapText("iostream",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "#include "+wrapText("string",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "using namespace std;</br></br>"+
                                                          "int main(){</br></br>"+ 
                                                            indent(2)+"string newVariable = "+wrapText("Variable declaration and intialisation in C++",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                            indent(2)+"cout << newVariable << endl;</br>"+
                                                            indent(2)+"return 0;</br></br>"+
                                                         "}",
                                        javascript_code:  "var newVariable = " + wrapText("Variable declaration and intialisation in Javascript",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                          "console.log(newVariable);",
                                        output: "Variable declaration and intialisation ",
                                    },
                                    {
                                        code_comparison_concept: "Constants",
                                        python_code:      "CONSTANT_VARIABLE = " + wrapText("Constant value in Python",opening_double_quote,closing_double_quote)+";"+
                                                          "print(CONSTANT_VARIABLE);",
                                        php_code:         wrapText(indent(4)+"define ("+ wrapText("CONSTANTVARIABLE",opening_double_quote,closing_double_quote)+","+ wrapText("Constant value in PHP",opening_double_quote,closing_double_quote)+");</br></br>"+
                                                                   indent(4)+"echo constant("+wrapText("CONSTANTVARIABLE",opening_double_quote,closing_double_quote)+");",
                                                                   opening_php_tag,
                                                                   closing_php_tag),
                                                          
                                        java_code:        "public final CONSTANT_VARIABLE = "+wrapText("Constant value in Java",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                          "public static void main(String[][] args){</br></br>"+
                                                               indent(2)+"System.out.println(CONSTANT_VARIABLE);</br></br>"+
                                                          "}",
                                        c_plus_plus_code: "#include "+wrapText("iostream",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "#include "+wrapText("string",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "using namespace std;</br></br>"+
                                                          "int main(){</br></br>"+
                                                               indent(2)+"const string CONSTANT_VARIABLE = " + wrapText("Constant value in C++",opening_double_quote,closing_double_quote)+"<br></br>"+ 
                                                               indent(2)+"cout << CONSTANT_VARIABLE << endl;</br>"+
                                                               indent(2)+"return 0;</br></br>"+
                                                           "}",
                                        javascript_code:  "const CONSTANT_VARIABLE = " + wrapText("Constant value in Javascript",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                           "console.log(CONSTANT_VARIABLE);",
                                        output: "Constant value " 
                                    },
                                    {
                                        code_comparison_concept: "function",
                                        python_code:      "def newFunction():</br></br>"+
                                                          indent(2)+"print("+wrapText("Function creation in Python",opening_double_quote,closing_double_quote)+");</br></br>"+
                                                          "newFunction();",
                                        php_code:         wrapText("function newFunction(){</br></br>"+
                                                                   indent(2)+"echo "+wrapText("Function creation in PHP",opening_double_quote,closing_double_quote)+";</br></br>"+
                                                                   "}</br></br>"+
                                                                   "newFunction();",
                                                                   opening_php_tag,
                                                                   closing_php_tag),
                                                          
                                        java_code:        "public void newFunction(){</br></br>"+
                                                           indent(2) + "System.out.println("+ wrapText("Function creation in Java",opening_double_quote,closing_double_quote)+");</br></br>"+
                                                           "}</br></br>"+

                                                          "public static void main(String[][] args){</br></br>"+
                                                               indent(2)+"newFunction();</br></br>"+
                                                          "}",
                                        c_plus_plus_code: "#include "+wrapText("iostream",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "#include "+wrapText("string",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "using namespace std;</br></br>"+
                                                          "void newFunction(){</br></br>"+
                                                          indent(2)+"cout << " +wrapText("Function creation in C++",opening_double_quote,closing_double_quote) + " << endl;</br></br>"+
                                                          "}</br></br>"+
                                                          "int main(){</br></br>"+
                                                               indent(2)+ "newFunction()</br>"+
                                                               indent(2)+"return 0;</br></br>"+
                                                           "}",
                                        javascript_code:   "function newFunction(){</br></br>"+
                                                           indent(2) + "console.log(" + wrapText("Function creation in Javascript",opening_double_quote,closing_double_quote)+");</br></br>"+
                                                           "}</br></br>"+
                                                           "newFunction();",
                                        output: "Constant value " 
                                    },
                                    {
                                        code_comparison_concept: "imports",
                                        python_code:      "import math",
                                        php_code:         wrapText("include "+ wrapText("filename",opening_single_quote,closing_single_quote)+"</br></br>"+
                                                                   "require "+ wrapText("filename",opening_single_quote,closing_single_quote),
                                                                   opening_php_tag,
                                                                   closing_php_tag),
                                                          
                                        java_code:        "import <i>file path name</i>",
                                        c_plus_plus_code: "#include "+wrapText("iostream",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "#include "+wrapText("string",opening_angle_bracket,closing_angle_bracket_1)+"</br></br>"+
                                                          "using namespace std;</br></br>",
                                                         
                                        javascript_code:   "import {newFileName} from <i>File path name</i>{</br>",
                                                           
                                        output: "" 
                                    }
                                ]
function startupCodeCompare(){
    setupPage(page_index.code_compare);
    populate_dropdown_list("code_compare_language_id",programming_languages,"A");
    populate_dropdown_list("code_compare_id",code_comparison_parameters,"B");
    toggleMode();
    toggleCodeComparison();
}

function populate_dropdown_list(dropdown_id,listArr,arrType){
    let dropdownlist = document.getElementById(dropdown_id); 
    
    switch(arrType){
        case "A":{
            for(let k = 0; k < listArr.length; k++){
                let option_element = document.createElement("option");
                option_element.text = listArr[k];
                option_element.value = listArr[k];
                dropdownlist.add(option_element);
        }
        }break;
        case "B":{
            for(let k = 0; k < listArr.length; k++){
                let option_element = document.createElement("option");
                option_element.text = listArr[k].code_comparison_concept;
                option_element.value = listArr[k].code_comparison_concept;
                dropdownlist.add(option_element);
        }
        }break;
        
    }
}

function toggleMode(){
    let setImageMode = document.getElementById("code_compare_mode_img_id");
    let codeArea = document.getElementById("code_compare_container_body");
    let codeOutput = document.getElementById("code_compare_container_output");
    
    switch(mode){
        case 0:{
           setImageMode.src = setModeList[mode];

           codeArea.style.backgroundColor = colours.dark_colour;
           codeArea.style.color = colours.light_colour;

           codeOutput.style.backgroundColor = colours.dark_colour;
           codeOutput.style.color = colours.light_colour;

           mode = 1;
        }break;

        case 1:{
           setImageMode.src = setModeList[mode];

           codeArea.style.backgroundColor = colours.light_colour;
           codeArea.style.color = colours.dark_blue_colour;
        
           codeOutput.style.backgroundColor = colours.light_colour;
           codeOutput.style.color = colours.dark_blue_colour;

           mode = 0;
        }break;
    }

    
}

function toggleCodeComparison(){
    let code_to_compare = document.getElementById("code_compare_id");
    let code_language = document.getElementById("code_compare_language_id").value;
    let codeArea = document.getElementById("code_compare_container_body");
    let codeOutput = document.getElementById("code_compare_container_output");
   
    // find index
    let index_to_find = 0;
    for(let i = 0 ; i < code_comparison_parameters.length;i++){
        if(code_comparison_parameters[i].code_comparison_concept === code_to_compare.value){
            index_to_find = i;
            break;
        }
       
    }
    codeOutput.innerHTML = "<code><u>Console Output</u></code></br></br>";
    switch(code_language){
        case programming_languages[0]:{
            codeArea.innerHTML = "<code>"+code_comparison_parameters[index_to_find].python_code + "</code>";
            if(code_comparison_parameters[index_to_find].output != "")
                codeOutput.innerHTML += "<code>> "+code_comparison_parameters[index_to_find].output + " in Python</code>";
           
        }break;

        
        case programming_languages[1]:{
            codeArea.innerHTML = "<code>"+code_comparison_parameters[index_to_find].php_code + "</code>";
            if(code_comparison_parameters[index_to_find].output != "")
                codeOutput.innerHTML += "<code>> "+code_comparison_parameters[index_to_find].output + " in PHP</code>";
        }break;

        
        case programming_languages[2]:{
            codeArea.innerHTML = "<code>"+code_comparison_parameters[index_to_find].java_code + "</code>";
            if(code_comparison_parameters[index_to_find].output != "")
                codeOutput.innerHTML += "<code>> "+code_comparison_parameters[index_to_find].output + " in Java</code>";
        }break;

        
        case programming_languages[3]:{
            codeArea.innerHTML = "<code>"+code_comparison_parameters[index_to_find].c_plus_plus_code + "</code>";
            if(code_comparison_parameters[index_to_find].output != "")
                codeOutput.innerHTML += "<code>> "+code_comparison_parameters[index_to_find].output + " in C++</code>";
        }break;

        
        case programming_languages[4]:{
            codeArea.innerHTML = "<code>"+code_comparison_parameters[index_to_find].javascript_code + "</code>";
            if(code_comparison_parameters[index_to_find].output != "")
                codeOutput.innerHTML += "<code> >"+code_comparison_parameters[index_to_find].output + " in Javascript</code>";
        }break;
    }
}
