const config = {
apiKey: "AIzaSyAEhtBZz8ux-LmPgtjE54rakTn7Msey_L0",
authDomain: "project-u-aa4f5.firebaseapp.com",
projectId: "project-u-aa4f5",
databaseURL: "https://project-u-aa4f5-default-rtdb.firebaseio.com/",
storageBucket: "project-u-aa4f5.appspot.com",
messagingSenderId: "584614740910",
appId: "1:584614740910:web:1cc729ba268d5ce76d3e3f"
};

firebase.initializeApp(config);
var messagesRef = firebase.database().ref('message');
document.getElementById('form').addEventListener('submit', submitform);

function submitform(e){
    e.preventDefault();

    // console.log(123);
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var phone = getInputVal('phone');
    var email = getInputVal('email');
    var message = getInputVal('message');

    saveMessage(firstname, lastname, phone, email, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000)

    document.getElementById('form').requestFullscreen();
}

function getInputVal(id){
    return document.getElementById(id).Value;
}

function saveMessage(firstname, lastname, phone, email, message){
    var newMessageref = messagesRef.push();
    newMessageref.set({
        firstname:firstname,
        lastname:lastname,
        phone:phone,
        email:email,
        message:message,
    });
}

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});