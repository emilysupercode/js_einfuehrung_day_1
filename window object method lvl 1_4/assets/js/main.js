// window.alert("Hallo Welt")
// pop up greets on refresh or first visit

/* let z = window.prompt("Bitte geben Sie Ihren Namen ein.")
console.log(z) */
// results in pop up with text box for text entry, empty

/* let z = window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel")
console.log(z) */
// same as above, prefills textbox with "Cancel"

/* let z = window.confirm("Stimmen Sie meiner Meinung zu?")
console.log(z)
 */
// pop up with "ok" or "cancel" as input options. console.log returns true for ok and false for cancel

/* // let alter = prompt("Gib mir bitte dein Alter:")
// console.log(alter) */
// pop up with input box, input recorded in console

/* let b = 5
let a = b * 5 - 3
alert(a) */
// alert pop up shows number 22

/* let mann = "Robert Wadlow ist der größte Mann der Welt : "
let grosse = "2,72m"
alert(mann + grosse) */
// alert shows "Robert Wadlow ist der größte Mann der Welt : 2,72m"

// alert(message) displays message to user who must click OK before they can navigate to site. takes focus from site. use sparingly.

/* let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
} */
// works ONLY if there's an html element with the id "demo" with which to correspond. If that's the case then any input + Ok will result in the text being written into HTML where the id'ed element is. Cancel results in no change to html.

// confirm("Press a button!\nEither OK or Cancel.");
// confirm pop up with instructions above with line break indicated by \n
// 

let text = "Press a button!\nEither OK or Cancel.";
if (confirm(text) == true) {
    text = "You pressed OK!";
} else {
    text = "You canceled!";
}
document.getElementById("demo").innerHTML = text;
// confirm pop up with instructions as above. when Ok is clicked the OK message is displayed. When cancel is clicked the cancel message displays. as before, the id "demo" must be present in the HTML in order for the messages to be shown in the html. 