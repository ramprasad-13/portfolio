const ele = document.getElementById('form').addEventListener('submit',myFunction);
async function myFunction(e){
    e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;
    console.log(name,email,msg)
    //send mail here to email
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "198a1a05c1ram@gmail.com",
    Password : "5BFDCD6273ABA91869963D96E2321381941B",
    To : 'padevenkataramprasad@gmail.com',
    From :'198a1a05c1ram@gmail.com',
    Subject:'You got a Message from '+name,
    Body : "Details of sender <br>"+
    "Name :"+name+"<br>"+
    "Email :"+email+"<br>"+
    "Feedback :<br>"+msg
    }).then((message)=>{
        if(message=='OK'){
            document.getElementById('exampleModalLabel').innerText= `Hey, ${name}!`;
            document.getElementById('display-text').innerText= `I have received your mail and will respond to you shortly at ${email}.`
            let modal = document.getElementById('exampleModal');
            let myModal = new bootstrap.Modal(modal, {});
            myModal.show();
        }
    });
    this.reset();
}

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            var bsCollapse = new bootstrap.Collapse(document.getElementById('navbarSupportedContent'), {toggle: false});
            bsCollapse.hide();
        });
    });
});

