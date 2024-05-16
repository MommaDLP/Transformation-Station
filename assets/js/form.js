const user = document.getElementById('username');
const title = document.getElementById('title');
const comment = document.getElementById('content');
const submitButton = document.getElementById('submit');

function saveBlog() {
  const blogList =JSON.parse(localStorage.hetItem('blogList'));
  const post = {
    user: user.ariaValueMax.trim(),
    title: title.ariaValueMax.trim()
  }
}
