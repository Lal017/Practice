var username = document.getElementById("username");
var password = document.getElementById("password");
var switch_bttn = document.getElementById("switch_bttn");
var login_head = document.getElementById("login_head");
var sign_up_head = document.getElementById("sign_up_head");
var name_input = document.getElementById("name-input");
var p_elem = document.getElementById("p_element");
var sub_bttn = document.getElementById("submit_bttn");

function remove_text()
{
    var current_ID = this.id;
    document.getElementById(current_ID).placeholder = "";
}

function set_text()
{
    var current_ID = this.id;
    document.getElementById(current_ID).placeholder = current_ID.charAt(0).toUpperCase() + current_ID.slice(1);
}

function switch_func()
{
    if(switch_bttn.textContent == "Sign Up")
    {
        login_head.style.animation = "out-animation 1s";
        login_head.style.color = "transparent";
        sign_up_head.style.color = "white";
        sign_up_head.style.animation = "in-animation 1s ease";

        name_input.style.visibility = "visible";
        name_input.style.opacity = "1";
        name_input.style.transition = "opacity 1s, visibility 1s ease";

        switch_bttn.textContent = "Sign In";
        sub_bttn.textContent = "Sign Up";
        p_elem.textContent = "Already have an account?";
    }
    else
    {
        login_head.style.animation = "in-animation 1s";
        login_head.style.color = "white";
        sign_up_head.style.color = "transparent";
        sign_up_head.style.animation = "out-animation 1s";

        name_input.style.visibility = "hidden";
        name_input.style.opacity = "0";

        switch_bttn.textContent = "Sign Up";
        sub_bttn.textContent = "Sign In";
        p_elem.textContent = "Don't have an account?";
    }
}

username.addEventListener("focus",remove_text);
username.addEventListener("focusout",set_text);
password.addEventListener("focus",remove_text);
password.addEventListener("focusout",set_text);

switch_bttn.addEventListener("click",switch_func);