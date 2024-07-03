document.addEventListener("DOMContentLoaded", (event) => {
  //사이드 : 페이지 이동
  const myComment = document.getElementById("my_comment");
  const myHeart = document.getElementById("my_heart");
  const myScrap = document.getElementById("my_scrap");
  const myPost = document.getElementById("my_post");

myComment.addEventListener("click", () => {
  window.location.href = "myComment"; // myComment 페이지로 이동
});
myHeart.addEventListener("click", () => {
  window.location.href = "liked_posts"; // myHeart 페이지로 이동
});
myScrap.addEventListener("click", () => {
  window.location.href = "scrap_posts"; // MyScrap 페이지로 이동
});
myPost.addEventListener("click", () => {
  window.location.href = "myPosts"; // MyPost 페이지로 이동
});
});