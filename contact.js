// Add your code here

const heading = document.getElementById("title");
heading.style.width = "min-content";
heading.style.textTransform = "uppercase";
heading.style.margin = "auto";
heading.style.textAlign = "center";
heading.style.color = "var(--black)";
heading.style.fontWeight = "bold";

//name label
const user_label = document.getElementById("name");
user_label.style.marginBottom = "20px";
user_label.style.fontWeight = "bold";
user_label.style.fontSize = "25px";
user_label.style.color = "var(--black)";
user_label.style.fontFamily = "'Times New Roman', Times, serif";

//name textbox
const username = document.getElementById("username");
username.style.width = "190px";
username.style.float = "right";
username.style.marginRight = "20px";
username.style.marginLeft = "55px";

//email label
const email_label = document.getElementById("mail");
email_label.style.marginLeft = "30px";
email_label.style.fontSize = "25px";
email_label.style.color = "var(--black)";
email_label.style.fontFamily = "'Times New Roman', Times, serif";
email_label.style.fontWeight = "bold";

//email textbox
const email = document.getElementById("email");
email.style.width = "190px";
email.style.float = "right";
email.style.marginRight = "20px";

//phone label
const phone_label = document.getElementById("phn");
phone_label.style.marginLeft = "30px";
phone_label.style.fontWeight = "bold";
phone_label.style.fontSize = "25px";
phone_label.style.marginBottom = "20px";
phone_label.style.marginTop = "20px";
phone_label.style.color = "var(--black)";
phone_label.style.fontFamily = "'Times New Roman', Times, serif";
phone_label.style.fontWeight = "bold";

//phone textbox
const phone = document.getElementById("phone");
phone.style.width = "190px";
phone.style.float = "right";
phone.style.marginRight = "20px";
phone.style.marginLeft = "15px";

//message label
const text_label = document.getElementById("text");
text_label.style.marginLeft = "30px";
text_label.style.marginTop = "10px";
text_label.style.marginBottom = "60px";
text_label.style.fontWeight = "bold";
text_label.style.fontSize = "25px";
text_label.style.color = "var(--black)";
text_label.style.fontFamily = "'Times New Roman', Times, serif";
text_label.style.fontWeight = "bold";

//message textbox
const textarea = document.getElementById("textarea");
textarea.style.width = "190px";
textarea.style.float = "right";
textarea.style.marginRight = "20px";

//buttons
const button = document.getElementById("btn");
button.style.marginTop = "20px";

//send button
const send = document.getElementById("btn_primary");
send.style.backgroundColor = "var(--black)";
send.style.border = "2px solid var(--black)";
send.style.borderRadius = "2px";
send.style.color = "var(--white)";
send.style.marginLeft = "20px";
send.style.padding = "6px 64px";
send.style.fontWeight = "bold";

// Add hover styles using CSS
send.style.transition = "background-color 0.3s ease";
send.style.cursor = "pointer";

send.addEventListener("mouseover", function () {
	send.style.backgroundColor = "var(--white)";
	send.style.color = "var(--black)";
});

send.addEventListener("mouseout", function () {
	send.style.backgroundColor = "var(--black)";
	send.style.color = "var(--white)";
});

//reset button
const reset = document.getElementById("btn_secondary");
reset.style.backgroundColor = "var(--black)";
reset.style.border = "2px solid var(--black)";
reset.style.borderRadius = "2px";
reset.style.color = "var(--white)";
reset.style.marginLeft = "2px";
reset.style.padding = "6px 64px";
reset.style.fontWeight = "bold";

// Add hover styles using CSS
reset.style.transition = "background-color 0.3s ease";
reset.style.cursor = "pointer";

reset.addEventListener("mouseover", function () {
	reset.style.backgroundColor = "var(--white)";
	reset.style.color = "var(--black)";
});

reset.addEventListener("mouseout", function () {
	reset.style.backgroundColor = "var(--black)";
	reset.style.color = "var(--white)";
});

const form = document.getElementById("form");
form.style.width = "400px";
form.style.margin = "50px auto";
form.style.backgroundColor = "var(--gray3)";

form.addEventListener("submit", (send_message) => {
	send_message.preventDefault();

	const display_name = form.elements.username.value;
	const display_email = form.elements.email.value;
	const display_phone = form.elements.phone.value;
	const display_message = form.elements.textarea.value.trim();

	if (
		display_name === "" &&
		display_email === "" &&
		display_phone === "" &&
		display_message === ""
	) {
		console.warn("You must enter some data to submit this form");
	} else {
		console.group("==========Send Message===========");

		//for username
		console.log("Username: ", display_name);

		//for email
		console.log("Email: ", display_email);

		//for phone
		console.log("Phone: ", display_phone);

		//for address
		console.log("Address: ", display_address);

		//for message
		console.log("Message: ", display_message);

		console.groupEnd();
	}
});
