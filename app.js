var arr=[
  {
    dp: "https://images.unsplash.com/photo-1692659071201-4a368a8a61c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
  },{
    dp:'https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    dp:'https://images.unsplash.com/photo-1692555052035-1a3116e30ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    dp:'https://plus.unsplash.com/premium_photo-1674332001678-ddf674fbf7df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    dp:'https://images.unsplash.com/photo-1692729624048-3d3a7296fbf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },{
    dp:'https://plus.unsplash.com/premium_photo-1691622500412-151f9c315b4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }
];
const storiyan = document.querySelector('.storiyan')
var c = "";
arr.forEach(function(e,idx){
    c+= `<div class="story">
    <img id="${idx}" src="${e.dp}" alt="">
</div> `
    // console.log(c)
})
storiyan.innerHTML=c;

storiyan.addEventListener('click',function(e){
    document.querySelector('.fullScreen').style.display='block';
    document.querySelector('.fullScreen').style.backgroundImage=`url(${arr[e.target.id].dp})`;
    setTimeout(function(){
        document.querySelector('.fullScreen').style.display='none';
    },2000)
})
var p =` `;
arr.forEach(function(e){
    p+= `<div class="post">
    <img  src="${e.dp}" alt="">
    <i class="ri-heart-3-fill like"></i>
</div> `
    // console.log(p)
})
document.querySelector('.posts').innerHTML=p;
const posts = document.querySelectorAll('.post');
// const likes = document.querySelectorAll('i.like');
posts.forEach(function(post){
  post.addEventListener("click",function(){
    const like = post.querySelector('i.like')
    like.classList.add('active');
    setTimeout(() => like.classList.remove('active'),1500);
    // console.log(like)
    // like.style.transform =  'translate(-50%) scale(3.5)';
    // likes.forEach(function(like,idx){
    //   console.log(like.style.transform)
    // })
  })
})

