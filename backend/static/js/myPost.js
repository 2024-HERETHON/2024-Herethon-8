document.addEventListener("DOMContentLoaded", (event) => {
    //사이드 : 페이지 이동
    const myComment = document.getElementById("my_comment");
    const myHeart = document.getElementById("my_heart");
    const myScrap = document.getElementById("my_scrap");
    const myPost = document.getElementById("my_post");
  
    myComment.addEventListener("click", () => {
        window.location.href = "comments"; // myComment 페이지로 이동
      });
      myHeart.addEventListener("click", () => {
        window.location.href = "hearts"; // myHeart 페이지로 이동
      });
      myScrap.addEventListener("click", () => {
        window.location.href = "scraps"; // MyScrap 페이지로 이동
      });
      myPost.addEventListener("click", () => {
        window.location.href = "posts"; // MyPost 페이지로 이동
      });
    });