
  const addPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      }
  };

  document
  .querySelector('.createform')
  .addEventListener('submit', addPost);

