
const para1 = document.querySelector("#p1");  //Blue

const userLists = [
    ["peter.yan@outlook.com", "Peter Yan"],
    ["david.old@outlook.com", "David Old"],
    ["bob.devon@outlook.com", "Bob Devon"],
    ["yvonne.li@outlook.com", "Yvonne Li"],
]

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeButton').addEventListener('click', subscribe);
    document.getElementById('unsubcribeButton').addEventListener('click', unsubscribe);
});

function subscribe() {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    let foundEmail = false;
    const para1 = document.querySelector("#p1"); 

    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    const newUser = [];

    //console.log('Email:', email);
   // console.log('Name:', name);
    newUser[0] = email;
    newUser[1] = name;
    //console.log(newUser.toString());


    for (let i = 0; i < userLists.length; i++) {
        //console.log(userLists[i][0])
        if (userLists[i][0] == email) {
            foundEmail = true
            //console.log("Found it.")
        }
        }

    if (foundEmail == false) {
        userLists.push(newUser)
        para1.textContent = "Thanks for subscribing to our newsletter, " + name  + "."
        console.log("User added. Updated List: " + userLists.toString())
    }
    else { para1.textContent = "Your email is already on our subscribed list. Thank so much." }
    
}

function unsubscribe() {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    let foundEmail = false;
    const para1 = document.querySelector("#p1"); 

    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    
    //console.log('Email:', email);
    //console.log('Name:', name);


    for (let i = 0; i < userLists.length; i++) {
        //console.log(userLists[i][0])
        if (userLists[i][0] == email) {
            foundEmail = true
            userLists.splice(i, 1); // Remove the subscribe list
            //console.log("Found it.")
        }
        }

    if (foundEmail == true) {
        para1.textContent = "We are sorry to let you go,  " + name + ". Hope to see you in the near future."
        console.log("User removed. Updated list:" + userLists.toString())
    }
    else { para1.textContent = "Your email is not on our subscribe list." }
    
}
