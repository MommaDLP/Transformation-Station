const blogForm = document.querySelector('#blogForm');
const submit = document.querySelector('#submit');



submit.addEventListener('click', function(event) {
    event.preventDefault();
    const username = blogForm.querySelector('#user').value;
    const title = blogForm.querySelector('#title').value;
    const content = blogForm.querySelector('#msg').value;

    if (user === '' || title === '' || msg === '') {
                alert('Please fill fields.'); 
                return;
    };


    const formData = {
        username: username,
        title: title,
        content: content
    };
    
    const formDataString = JSON.stringify(formData);

    localStorage.setItem('formData', formDataString);
    console.log('saved to local storage.');

    var url = "./blog.html"
    window.location = url;

});
