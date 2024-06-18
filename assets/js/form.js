//I need both id's; inputs and sumbit button to save to local storage
const blogForm = document.querySelector('#blogForm');
const submit = document.querySelector('#submit');


//all fields in my form to save
submit.addEventListener('click', function(event) {
    event.preventDefault();
    const username = blogForm.querySelector('#username').value;
    const title = blogForm.querySelector('#title').value;
    const comment= blogForm.querySelector('#comment').value;

    console.log('Username:', username);
    console.log('Title:', title);
    console.log('Comment:', comment);

//if field is empty alert
    if (username === '' || title === '' || comment === '') {
                alert('Please fill fields.'); 
                return;
    };

//array from my form
    const formData = {
        username: username,
        title: title,
        comment: comment,
    };
    
    const formDataString = JSON.stringify(formData);

    localStorage.setItem('formData', formDataString);
    console.log('saved to local storage.');

//save it to blogpage
    var url = "./blog.html"
    window.location = url;

});
