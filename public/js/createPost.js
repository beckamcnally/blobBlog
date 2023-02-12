const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-title').value.trim();
  const needed_funding = document.querySelector('#post-content').value.trim();
  

  if (name && needed_funding && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

document
.querySelector('.new-project-form')
.addEventListener('submit', newFormHandler);