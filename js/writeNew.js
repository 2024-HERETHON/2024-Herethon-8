document.addEventListener("DOMContentLoaded", () => {
  // 라디오버튼 체크 확인
  const radio_checked = document.querySelectorAll('input[type="radio"]');

  // 1. textarea, 대표이미지 추가 찾기
  const post_title = document.getElementById("post_title");
  const post_content_input = document.getElementById("post_content_input");
  const add_img_button = document.getElementById("add_img_button");
  // 1. 스타일 찾기
  const write_title = document.getElementById("write_post_title");
  const write_post = document.getElementById("write_post");
  const add_img_text = document.getElementById("add_img_text");
  const add_img = document.getElementById("add_img");
  const summary_title = document.getElementById("check_summary_title");
  const summary_post = document.getElementById("write_summary");
  const deletBtn = document.getElementById("deletBtn");
  const uploadBtn = document.getElementById("uploadBtn");

  // 2. textarea 찾기
  const post_textarea = document.getElementById("post_content_input");
  const summary_textarea = document.getElementById("summary_content");
  const post_charcount = document.getElementById("post_text_length");
  const summary_charcount = document.getElementById("summary_text_length");
  const postBottom = document.getElementById("post_length_check");
  const summaryBottom = document.getElementById("summary_lengh_check");

  //본문 300자 넘었을 때
  post_textarea.addEventListener("input", () => {
    const post_textLengh = post_textarea.value.length;
    post_charcount.textContent = post_textarea.value.length;
    post_charcount.textContent = post_textLengh;

    if (post_textLengh >= 300) {
      postBottom.classList.add("exceed");
      summary_title.style.color = "#444";
      summary_post.style.background = "#fff";
      summary_post.style.border = "1px solid #A9B388";
      summary_textarea.style.background = "#fff";
      summary_textarea.removeAttribute("disabled");
      summary_textarea.style.color = "#444";
    } else {
      postBottom.classList.remove("exceed");
      summary_title.style.color = "";
      summary_post.style.background = "";
      summary_post.style.border = "";
      summary_textarea.style.background = "";
      summary_textarea.setAttribute("disabled", "true");
    }
  });

  // 요약 50자 넘었을 때
  summary_textarea.addEventListener("input", () => {
    const summary_textLengh = summary_textarea.value.length;
    summary_charcount.textContent = summary_textarea.value.lengh;
    summary_charcount.textContent = summary_textLengh;

    const post_textLengh = post_textarea.value.length;
    post_charcount.textContent = post_textarea.value.length;
    post_charcount.textContent = post_textLengh;

    if (summary_textLengh >= 50 && post_textLengh >= 300) {
      summaryBottom.classList.add("exceed");
      deletBtn.removeAttribute("disabled");
      deletBtn.style.background = "#fff";
      deletBtn.style.border = "1px solid #A9B388";
      deletBtn.style.color = "#444";

      uploadBtn.removeAttribute("disabled");
      uploadBtn.style.background = "#A9B388";
      uploadBtn.style.color = "#fff";
    } else {
      summaryBottom.classList.remove("exceed");
      deletBtn.setAttribute("disabled", "true");
      deletBtn.style.background = "";
      deletBtn.style.border = "";
      deletBtn.style.color = "";

      uploadBtn.setAttribute("disabled", "true");
      uploadBtn.style.background = "";
      uploadBtn.style.color = "";
    }
  });

  radio_checked.forEach(function (input) {
    input.addEventListener("change", function () {
      const checkedRadio = document.querySelector(
        'input[type="radio"]:checked'
      );

      if (checkedRadio) {
        // 텍스트 입력 가능하게
        post_title.removeAttribute("disabled");
        post_content_input.removeAttribute("disabled");
        add_img.removeAttribute("disabled");

        // 스타일 변경
        write_title.style.color = "#444"; // 검정색으로 변경
        post_title.style.color = "#444";
        post_title.style.background = "#fff";
        write_post.style.background = "#fff";
        write_post.style.border = "1px solid #A9B388";
        post_content_input.style.background = "#fff";
        add_img_button.style.background = "#fff";
        add_img_text.style.color = "#444";
        add_img.src = "./images/add_img_black.svg";
      } else {
        post_title.setAttribute("disabled", "disabled");
        post_content_input.setAttribute("disabled", "disabled");
        add_img_button.setAttribute("disabled", "disabled");

        write_title.style.color = ""; // 기본 색상으로 복원
        post_title.style.color = "";
        post_title.style.background = "";
        write_post.style.background = "";
        write_post.style.border = "";
        post_content_input.style.background = "";
      }
    });
  });
});
