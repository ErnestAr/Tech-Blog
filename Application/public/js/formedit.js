// const addPost = async (event) => {
//     event.preventDefault();
  
//     const title = document.querySelector('#title').value.trim();
//     const content = document.querySelector('#content').value.trim();

//       const response = await fetch('/api/posts', {
//         method: 'POST',
//         body: JSON.stringify({ title, content }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in.');
//       }
//   };

//   const updatePost = async (event) => {
//     event.preventDefault();
  
//     const title = document.querySelector('#title').value.trim();
//     const content = document.querySelector('#content').value.trim();

//       const response = await fetch(`/api/posts/${}`, {
//         method: 'PUT',
//         body: JSON.stringify({ title, content }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in.');
//       }
//   };

//   document
//     .querySelector('.createform')
//     .addEventListener('submit', addPost);

//     document
//     .querySelector('.createform')
//     .addEventListener('update', updatePost);

//     document
//     .querySelector('.createform')
//     .addEventListener('delete', deletePost);


