document.addEventListener("DOMContentLoaded", (event) => {
  //사이드 : 페이지 이동
  const myComment = document.getElementById("my_comment");
  const myHeart = document.getElementById("my_heart");
  const myScrap = document.getElementById("my_scrap");
  const myPost = document.getElementById("my_post");

  myComment.addEventListener("click", () => {
    window.location.href = "myComment.html"; // myComment 페이지로 이동
  });
  myHeart.addEventListener("click", () => {
    window.location.href = "myHeart.html"; // myHeart 페이지로 이동
  });
  myScrap.addEventListener("click", () => {
    window.location.href = "myScrap.html"; // MyScrap 페이지로 이동
  });
  myPost.addEventListener("click", () => {
    window.location.href = "myPost.html"; // MyPost 페이지로 이동
  });

  //글 내용 상세 페이지로 이동
  const post = document.getElementById("main_box_post");

  post.addEventListener("click", () => {
    window.location.href = "contentdetail.html"; //내용 상세 페이지로 이동
  });
});
