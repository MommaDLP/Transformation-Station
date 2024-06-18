const formData = JSON.parse(localStorage.getItem('formData'));
//Info that we need to save to the blog page from the form
//so if the form displays content on that page it should display on blog page
if (formData) {
    const blogPostDiv = document.getElementById('blogPost');
    blogPostDiv.innerHTML = `
        <p>Username: ${formData.username}</p>
        <p>Title: ${formData.title}</p>
        <p>Comment: ${formData.comment}</p>
    `;
} else { //if we can find any infor it should display
    const blogPostDiv = document.getElementById('blogPost');
    blogPostDiv.innerHTML = '<p>No information found in local storage</p>';

};