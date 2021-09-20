let check_box_icon =  {
                        tick_icon: "&#10003;",
                        empty_icon: "",
                        isChecked: false
                     };
function createRequestNewWord(request_new_word_id){
    document.getElementById(request_new_word_id).innerHTML = "<div class = 'request_word_container'>"+

                                                                    "<div>"+
                                                                            createHeader(isReturned =false)+
                                                                    "</div>"+

                                                                    "<div class = 'request_word_header'>"+
                                                                        "<p>"+
                                                                            "I was not able to find this IT-related word and request that "+ 
                                                                            "it be added to the list of IT definitions. The requested word "+ 
                                                                            "will only be accepted after a thorough review of the word has been "+
                                                                            "done. Once the review of the word has been done, we will notify you of "+
                                                                            "this. The word should be added within five days of notification. You have "+
                                                                            "the option to be credited for the requested word."+
                                                                        "</p>"+
                                                                    "</div>"+
                                                                        
                                                                        "<div class = 'request_word_form'>"+
                                                                            "<div class = 'request_word_form_img'>"+
                                                                                "<img src = '"+image_sources.form_icon+"'/>"+
                                                                            "</div>"+
                                                                            "<div class = 'request_word_form_section'>"+
                                                                                "<label>Enter the requested word:<span> *</span></label>"+
                                                                                "<input type = 'text' placeholder = 'Enter the requested word here...'/>"+
                                                                            "</div>"+

                                                                            "<div class = 'request_word_form_section'>"+
                                                                                "<label>Enter your email address:<span> *</span></label>"+
                                                                                "<input type = 'text' placeholder = 'Enter your email address here...'/>"+
                                                                            "</div>"+
                                                                            
                                                                            "<div class = 'request_word_form_section'>"+
                                                                                "<label>Enter your name (only if you want to be credited):</label>"+
                                                                                "<input type = 'text' placeholder = 'Enter your name here...'/>"+
                                                                            "</div>"+

                                                                            "<div class = 'request_word_form_section'>"+
                                                                                "<label>Do you want to be credited for the request?</label>"+
                                                                                "<select>"+
                                                                                    "<option>No</option>"+
                                                                                    "<option>Yes</option>"+
                                                                                "</select>"+
                                                                            "</div>"+

                                                                            "<div class = 'request_word_form_section'>"+
                                                                                
                                                                                "<p>"+
                                                                                    "<button "+ 
                                                                                        "id = 'check_box_id' "+
                                                                                        "onclick = 'checkBox()'> "+
                                                                                    "</button>"+
                                                                                        "<text>I have read and understood the <a href = ''>terms and conditions</a></text>"+
                                                                                "</p>"+
                                                                            "</div>"+

                                                                            "<div class = 'request_word_form_section'>"+
                                                                                "<button "+ 
                                                                                    "class = 'footer_buttons' "+
                                                                                    "onclick = ''"+
                                                                                 "> "+
                                                                                    "Submit"+
                                                                                "</button>"+

                                                                                "<button "+
                                                                                    "class = 'footer_buttons' "+ 
                                                                                    "onclick = 'show_modal(\""+showStatus.hide+"\",\""+page_setup_parameters[page_index.request_a_word].page_id+"\")'"+
                                                                                 ">"+
                                                                                    "Close"+
                                                                                "</button>"+
                                                                            "</div>"+

                                                                            "<p><span>*</span> These fields are required</p>"+
                                                                        "</div>"+
                                                                   
                                                     

                                                             "</div>"
}

function checkBox(){
    switch(check_box_icon.isChecked){
        case true:{
            document.getElementById("check_box_id").innerHTML = check_box_icon.empty_icon;
            check_box_icon.isChecked = false;
        }break;

        case false:{
            document.getElementById("check_box_id").innerHTML = check_box_icon.tick_icon;
            check_box_icon.isChecked = true;
        }break;
    }
}
