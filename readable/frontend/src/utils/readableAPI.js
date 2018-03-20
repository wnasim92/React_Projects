const API_HEADER = process.env.READABLE_HEADER;

//GETTING POSTS
export function getPosts (){
   fetch('http://localhost:3001/posts', { headers: { 'Authorization': API_HEADER}})
   .then((posts) => {
      return posts.json()
   })
   .then(response => {
      console.log("Post Response", response)
   })
}

export function getCategories() {
  fetch('http://localhost:3001/categories', {headers: {'Authorization' :API_HEADER}})
  .then(function(categories) {
    return categories.json()
  })
  .then(response => {
    console.log("Category Response", response)
  })
}
