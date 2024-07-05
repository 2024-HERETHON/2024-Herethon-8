//내용
document.addEventListener("DOMContentLoaded", function () {
  // 초기 선택 설정
  const defaultOption = document.getElementById("01");
  selectOption(defaultOption);
});

function selectOption(selectedElement) {
  // 모든 옵션에서 'selected' 클래스 제거
  var options = document.querySelectorAll(".nav-bar div");
  options.forEach(function (option) {
    option.classList.remove("selected");
  });
  // 클릭된 요소에 'selected' 클래스 추가
  selectedElement.classList.add("selected");

  // writercategolry의 텍스트를 선택된 요소의 텍스트로 변경
  var writerCategory = document.querySelector(".writercategolry");
  writerCategory.textContent = selectedElement.textContent;

  // 선택된 카테고리에 따라 writingscontents 업데이트
  updateWritingsContent(selectedElement.id);
  updateWriterContent(selectedElement.id);
}

function updateWritingsContent(categoryId) {
  const contents = {
    "01": [
      {
        intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
        title: "무라카미 하루키가 전하는 이데아",
        author: "책쟁이",
        imgSrc: "./img/실시간인기도서1.png",
        link: "movie.html",
      },
      {
        intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
        title: "무라카미 하루키가 전하는 이데아",
        author: "책쟁이",
        imgSrc: "./img/실시간인기도서1.png",
        link: "movie.html",
      },
      {
        intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
        title: "무라카미 하루키가 전하는 이데아",
        author: "책쟁이",
        imgSrc: "./img/실시간인기도서1.png",
        link: "movie.html",
      },
    ],
    "02": [
      {
        intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
        title: "무라카미 하루키가 전하는 이데아",
        author: "책쟁이",
        imgSrc: "./img/실시간인기도서1.png",
        link: "movie.html",
      },
      // Add more objects for additional items
    ],
    //과학
    "05": [
      {
        intro: "우주의 비밀을 풀어내는 놀라운 여정",
        title: "스티븐 호킹이 전하는 블랙홀 이야기",
        author: "지평좌표계",
        imgSrc: "./img/실시간인기도서_과학1.png",
        link: "movie.html",
        heart: "1,222",
        comment: "124",
        bookmark: "1,242",
      },
      {
        intro: "시간과 공간의 경계를 넘나드는 모험",
        title: "칼 세이건이 들려주는 코스모스",
        author: "궤도",
        imgSrc: "./img/실시간인기도서_과학2.png",
        link: "movie.html",
        heart: "315",
        comment: "59",
        bookmark: "309",
      },
      {
        intro: "인간의 몸 속 신비를 탐구하는 여행",
        title: "리처드 도킨스가 전하는 유전자 이야기",
        author: "침착하게",
        imgSrc: "./img/실시간인기도서_과학3.png",
        link: "movie.html",
        heart: "431",
        comment: "79",
        bookmark: "76",
      },
    ],
    //사회
    "06": [
      {
        intro: "현대 사회의 구조와 변화를 이해하는 여정",
        title: "제레미 리프킨이 전하는 제3차 산업혁명",
        author: "구조학자",
        imgSrc: "./img/실시간인기도서_사회1.png",
        link: "movie.html",
        heart: "82",
        comment: "5",
        bookmark: "30",
      },
      {
        intro: "경제적 불평등과 그 해결 방안을 모색하는 탐구",
        title: "토마 피케티가 들려주는 21세기 자본",
        author: "스파게티",
        imgSrc: "./img/실시간인기도서_사회2.png",
        link: "movie.html",
        heart: "486",
        comment: "120",
        bookmark: "80",
      },
      {
        intro: "미래 사회의 모습을 예측하는 혁신적 시각",
        title: "유발 하라리가 전하는 사피엔스",
        author: "보이는손",
        imgSrc: "./img/실시간인기도서_사회3.png",
        link: "movie.html",
        heart: "534",
        comment: "85",
        bookmark: "321",
      },
    ],
    //기타
    "07": [
      {
        intro: "창의력과 영감을 자극하는 여행",
        title: "엘리자베스 길버트가 전하는 빅 매직",
        author: "해리포터",
        imgSrc: "./img/실시간인기도서_기타1.png",
        link: "movie.html",
        heart: "1,022",
        comment: "532",
        bookmark: "589",
      },
      {
        intro: "자기 계발과 성공의 비결을 탐구하는 여정",
        title: "스티븐 코비가 들려주는 성공하는 사람들의 7가지 습관",
        author: "난쟁이",
        imgSrc: "./img/실시간인기도서_기타2.png",
        link: "movie.html",
        heart: "723",
        comment: "64",
        bookmark: "305",
      },
      {
        intro: "마음의 평화를 찾기 위한 명상의 세계",
        title: "틱낫한이 전하는 지금 이 순간을 살아라",
        author: "꿀벌",
        imgSrc: "./img/실시간인기도서_기타3.png",
        link: "movie.html",
        heart: "1,120",
        comment: "923",
        bookmark: "930",
      },
    ],
    // Add similar arrays for other categories
  };

  // Update the writingscontents div
  const writingsContentsDiv = document.querySelector(".writingscontents");
  writingsContentsDiv.innerHTML = ""; // Clear existing content

  const writingContentsDivA = document.querySelector(".writerShow");
  writingContentsDivA.innerHTML = "";

  contents[categoryId].forEach((content) => {
    const contentHtml = `
            <button type="button" onclick="location.href='${content.link}'" class="writingscontentsbox">
                <div class="writingscontentselements">
                    <div class="writingscontentsIntro">${content.intro}</div>
                    <div class="writingscontentsMain">
                        <div class="writingscontentstext">
                            <div class="writingscontentsTitle">${content.title}</div>
                            <div class="writingscontentsWho">
                                <div class="writingscontentsWhoby">by</div>
                                <div class="writingscontentsWhoname">${content.author}</div>
                            </div>
                        </div>
                        <div class="writingscontentsImg">
                            <img src="${content.imgSrc}" class="writingscontentsImgclass" />
                        </div>
                    </div>
                    <div class="writingscontentsMore">
                        <div class="writingscontentsHeart"></div>
                        <div class="writingscontentsComments"></div>
                        <div class="writingscontentsSaved"></div>
                    </div>
                </div>
            </button>`;

    writingsContentsDiv.innerHTML += contentHtml;
  });
}

function updateWriterContent(categoryId) {
  const contentAuthors = {
    "01": [
      {
        img: "./img/작가인기프로필.png",
        author: "책쟁이",
        link: "movie.html",
      },
    ],
    "02": [
      {
        img: "./img/작가인기프로필.png",
        author: "책쟁이2",
        link: "movie.html",
      },
      {
        img: "./img/작가인기프로필.png",
        author: "책쟁이2",
        link: "movie.html",
      },
    ],
    // 과학
    "05": [
      {
        img: "./img/작가인기프로필_과학1.png",
        author: "지평좌표계",
        link: "",
      },
      {
        img: "./img/작가인기프로필_과학2.png",
        author: "궤도",
        link: "",
      },
      {
        img: "./img/작가인기프로필_과학3.png",
        author: "50분과학",
        link: "",
      },
      {
        img: "./img/작가인기프로필_과학4.png",
        author: "침착하게",
        link: "",
      },
      {
        img: "./img/작가인기프로필_과학5.png",
        author: "물리의세계로",
        link: "",
      },
    ], // 사회
    "06": [
      {
        img: "./img/작가인기프로필_사회1.png",
        author: "보이는손",
        link: "",
      },
      {
        img: "./img/작가인기프로필_사회2.png",
        author: "굶주리지마",
        link: "",
      },
      {
        img: "./img/작가인기프로필_사회3.png",
        author: "회색",
        link: "",
      },
      {
        img: "./img/작가인기프로필_사회4.png",
        author: "침착하게",
        link: "",
      },
      {
        img: "./img/작가인기프로필_사회5.png",
        author: "당근",
        link: "",
      },
    ], //기타
    "07": [
      {
        img: "./img/작가인기프로필_기타1.png",
        author: "한교동",
        link: "",
      },
      {
        img: "./img/작가인기프로필_기타2.png",
        author: "바라카피",
        link: "",
      },
      {
        img: "./img/작가인기프로필_기타3.png",
        author: "고양이발",
        link: "",
      },
      {
        img: "./img/작가인기프로필_기타4.png",
        author: "티라미수케잌",
        link: "",
      },
      {
        img: "./img/작가인기프로필_기타5.png",
        author: "배고픔",
        link: "",
      },
    ],
    // Add similar arrays for other categories
  };

  // Update the writerShow div
  const writerShowDiv = document.querySelector(".writerShow");
  writerShowDiv.innerHTML = ""; // Clear existing content

  contentAuthors[categoryId].forEach((author) => {
    const authorHtml = `
        <div class="writerShowelements">
            <div class="writerimg">
                <img src="${author.img}" class="writerimgclass" />
            </div>
            <div class="writername">
              <a href="${author.link}" class="writerlink">${author.author} </a>
            </div></div>`;
    writerShowDiv.innerHTML += authorHtml;
  });
}

// 인기 게시물 스크롤
function scrollToLeft() {
  const container = document.querySelector(".realtimehotwritings");
  const childWidth = container.firstElementChild.clientWidth;

  container.scrollBy({
    left: -childWidth,
    behavior: "smooth",
  });
}

function scrollToRight() {
  const container = document.querySelector(".realtimehotwritings");
  const childWidth = container.firstElementChild.clientWidth;

  container.scrollBy({
    left: childWidth,
    behavior: "smooth",
  });
}
