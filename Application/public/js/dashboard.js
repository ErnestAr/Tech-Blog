
const editPost =  async (e) => {
    let currentPost = e.currentTarget
    console.log(currentPost);
    const currentId = currentPost.getAttribute("id")
    console.log(currentId);
    const response =  await fetch(`/dashboard/form/${currentId}`, {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json',
           },
      });
      if (response.ok) {
        console.log(response);
        document.location.replace(`/dashboard/form/${currentId}/update`)
      }
      
}



document.querySelector(".container")
.addEventListener('click', editPost);


