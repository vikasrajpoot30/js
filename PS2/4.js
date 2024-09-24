function getViews(blog){
    return blog.views>1000;
}
const blog1={
    title:'how to learn javascript',
    author:'john doe',
    views:1430,
}
const blog2 = {
    title: '10 Reasons to Start a Blog',
    author: 'Jane Smith',
    views: 500,
   }
   console.log(getViews(blog1)) // true
   console.log(getViews(blog2)) // false   
