document.addEventListener("DOMContentLoaded", (event) => {
    //사이드 : 페이지 이동
    
  
    //메뉴 이동 : 글 / 댓글
    const postBtn = document.getElementById("post");
    const commentBtn = document.getElementById("comment");
    const postBoxs = document.getElementById("main_boxs_post");
    const commentBoxs = document.getElementById("main_boxs_comment");
    const postLine = document.getElementById("post_button_line");
    const commentLine = document.getElementById("comment_button_line");
  
    //기본 설정 : 글 메뉴가 눌린 상태
    postBoxs.style.display = "flex"; // 좋아요한 글 보임
    postBtn.classList.add("selected");
    postLine.classList.add("selected");
    commentBoxs.style.display = "none"; // 좋아요한 댓글 안 보임
    commentBtn.classList.remove("selected");
    commentLine.classList.remove("selected");
  
    // 글 메뉴가 눌렸을 때
    postBtn.addEventListener("click", () => {
      postBoxs.style.display = "flex"; // 좋아요한 글 보임
      postBtn.classList.add("selected");
      postLine.classList.add("selected");
      commentBoxs.style.display = "none"; // 좋아요한 댓글 안 보임
      commentBtn.classList.remove("selected");
      commentLine.classList.remove("selected");
    });
    // 댓글 메뉴가 눌렸을 때
    commentBtn.addEventListener("click", () => {
        
        postBoxs.style.display = "none"; // 좋아요한 글 안 보임
        postBtn.classList.remove("selected");
        postLine.classList.remove("selected");
        commentBoxs.style.display = "flex"; // 좋아요한 댓글 보임
        commentBtn.classList.add("selected");
        commentLine.classList.add("selected");
        
      });
  });