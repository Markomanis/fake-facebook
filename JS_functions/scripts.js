
var database = [{
    username: "Anton",
    pass: "crackit123",
}];

var newsFeed = [{
    username: "first_user",
    timeline: "Random line number one"
}, 
{
    username_2: "second_user",
    password_2: "Random line number two"
},
{
    username_3: "third_user",
    password_3: "Random line number three"
}]

var userNamePrompt = prompt("What's your username?: ");
var passwordPrompt = prompt("What's your password?: ");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].pass){
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password.");
    }
}

signIn(userNamePrompt, passwordPrompt);