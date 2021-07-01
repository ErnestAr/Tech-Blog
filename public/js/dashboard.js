const contelements = document.getElementsByClassName("container");
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

for (let i = 0; i < contelements.length; i++) {
  contelements[i].addEventListener('click', editPost, false);
}



