function sendMail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(!name || !email || !message) { 
        alert("Please fill all fields"); 
        return; 
    }
    
    emailjs.send("service_b61hjqm", "template_hr81w4c", { 
        from_name: name, 
        from_email: email, 
        message: message 
    })
    .then(() => { 
        alert("Message sent successfully! We'll get back soon."); 
        document.getElementById('name').value = ''; 
        document.getElementById('email').value = ''; 
        document.getElementById('message').value = ''; 
    })
    .catch((error) => { 
        console.error("EmailJS Error:", error);
        alert("Error: " + (error.text || "Check console (F12) for details."));
    });
}
