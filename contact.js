// Add your code here

const body = document.getElementById('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';


const center = document.getElementById('center');
center.style.marginTop = "2rem";
center.style.border =  "1px solid gray";
center.style.borderRadius =  "5px";
center.style.paddingBottom = '35px';
center.style.paddingTop = '20px';

const area = document.getElementById('area');
area.style.display= 'block';
area.style.backgroundColor = 'white';
area.style.marginRight = '300px';
area.style.marginLeft = '300px';
area.style.padding = '20px';
area.style.marginTop = '100px';


const heading = document.getElementById('title');
heading.style.width = 'min-content';
heading.style.textTransform = 'uppercase';
heading.style.marginLeft = '90px';
heading.style.textAlign = 'center';
heading.style.color = 'black';

//username label
const user_label = document.getElementById("name");
user_label.style.marginLeft = '20px';
user_label.style.marginBottom = '20px';
user_label.style.fontWeight = 'bold';
user_label.style.fontSize = '20px';
user_label.style.color = 'black';


//username textbox
const username = document.getElementById('username');
username.style.width = '190px';
username.style.float = 'right';
username.style.marginRight =  '20px';
username.style.marginLeft = '15px';

//email label
const email_label = document.getElementById("mail");
email_label.style.marginLeft = '20px';
email_label.style.fontWeight = 'bold';
email_label.style.fontSize = '20px';
email_label.style.color = 'black';

//email textbox
const email = document.getElementById('email');
email.style.width = '190px';
email.style.float = 'right';
email.style.marginRight =  '20px';

//phone label
const phone_label = document.getElementById("phn");
phone_label.style.marginLeft = '20px';
phone_label.style.fontWeight = 'bold';
phone_label.style.fontSize = '20px';
phone_label.style.marginBottom = '20px';
phone_label.style.marginTop = '20px';
phone_label.style.color = 'black';


//phone textbox
const phone = document.getElementById('phone');
phone.style.width = '190px';
phone.style.float = 'right';
phone.style.marginRight =  '20px';
phone.style.marginLeft = '15px';

//address label
const addr_label = document.getElementById("addr");
addr_label.style.marginLeft = '20px';
addr_label.style.marginTop = '20px';
addr_label.style.marginBottom = '30px';
addr_label.style.fontWeight = 'bold';
addr_label.style.fontSize = '20px';
addr_label.style.color = 'black';

//address textbox
const address = document.getElementById('address');
address.style.width = '190px';
address.style.float = 'right';
address.style.marginRight =  '20px';


//message label
const text_label = document.getElementById("text");
text_label.style.marginLeft = '20px';
text_label.style.marginTop = '50px';
text_label.style.marginBottom = '60px';
text_label.style.fontWeight = 'bold';
text_label.style.fontSize = '20px';
text_label.style.color = 'black';

//message textbox
const textarea = document.getElementById('textarea');
textarea.style.width = '190px';
textarea.style.float = 'right';
textarea.style.marginRight =  '20px';



//date label
const date_label = document.getElementById("date_label");
date_label.style.marginLeft = '20px';
date_label.style.fontWeight = 'bold';
date_label.style.fontSize = '20px';
date_label.style.color = 'black';


//date textbox
const date = document.getElementById("date");
date.style.width = '190px';
date.style.float = 'right';
date.style.marginRight = '20px';



//buttons
const button = document.getElementById("btn")
button.style.marginTop = '20px';

//send button
const send = document.getElementById("btn_primary");
send.style.backgroundColor = "green";
send.style.border = '2px solid green';
send.style.borderRadius = '2px';
send.style.color = 'white';
send.style.marginLeft = '20px';
send.style.padding = '7px 53px';
send.style.fontWeight = 'bold';

//reset button
const reset = document.getElementById("btn_secondary");
reset.style.backgroundColor = "white";
reset.style.border = '2px solid green';
reset.style.borderRadius = '2px';
reset.style.color = 'green';
reset.style.marginLeft = '2px';
reset.style.padding = '7px 53px';
reset.style.fontWeight = 'bold';


const form = document.getElementById('form');
form.addEventListener('send', (send_message) => {    
    send_message.preventDefault();
    const display_username = form.elements.username.value;
    const display_email = form.elements.email.value;
    const display_phone = form.elements.phone.value;
    const display_address = form.elements.address.value;
    const display_message = form.elements.textarea.value;
    let display_date = form.elements.date.value;

    //warning if no details are filled
    if(display_username === "" && display_email === "" && display_phone === "" && display_address === "" && display_message === "" && display_date === "")
    {
        console.warn("You must enter some data to send information")
    }
    else{
    console.group("==========Send Message===========");
      
    //for username    
    console.log("Username: ", display_username);

    //for email    
    console.log("Email: ", display_email);

     //for phone    
    console.log("Phone: ", display_phone);

     //for address    
    console.log("Address: ", display_address);

     //for message    
    console.log("Message: ", display_message);

       

    //for date    
    if(display_date === "")
    {
        console.log("Date : No submission");
    }
    else{
        console.log("Date :", display_date);
    }
    console.groupEnd();
    }

});








