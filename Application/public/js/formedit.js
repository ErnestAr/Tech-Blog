

  const updatePost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const currentId = document.querySelector(".form-group").getAttribute("id")

    console.log(document.querySelector(".btn-primary"));
      const response = await fetch(`/api/posts/${currentId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      }
  };


  const deletePost = async (event) => {
    event.preventDefault();
    const currentId = document.querySelector(".form-group").getAttribute("id")
      const response = await fetch(`/api/posts/${currentId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      }
  };

    document
    .querySelector('.updatebtn')
    .addEventListener('click', updatePost);

    document
    .querySelector('.deletebtn')
    .addEventListener('click', deletePost);


