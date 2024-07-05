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
                intro: "우리의 뜨거운 여름 밤은 떠오르고",
                title: "청량한 여름이 떠오르는 그 영화",
                author: "영평가",
                imgSrc: "./img/영화글1.png",
                link: "movie.html",
                heart: "1,130",
                comment: "1,831",
                bookmark: "987",
            },
            {
                intro: "달과 6펜스 그리고 고갱",
                title: "용기와 이상 그리고 열정",
                author: "박대장",
                imgSrc: "./img/영화글2.png",
                link: "movie.html",
                heart: "993",
                comment: "1,008",
                bookmark: "687",
            },
            {
                intro: "설원과 잘 지내셨나요 그 메아리",
                title: "지난 겨울의 입김이 녹인 것은 봄날의 추억",
                author: "영시네마",
                imgSrc: "./img/영화글3.png",
                link: "contentdetail.html",
                heart: "1,071",
                comment: "1,540",
                bookmark: "896",
            },
        ],
        "02": [
            {
                intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
                title: "무라카미 하루키가 전하는 이데아",
                author: "책쟁이",
                imgSrc: "./img/실시간인기도서1.png",
                link: "movie.html",
                heart: "1,134",
                comment: "1,211",
                bookmark: "987",
            },
            {
                intro: "새는 알을 깨고 나온다",
                title: "헤세와 칼 융 그리고 데미안",
                author: "아카이브",
                imgSrc: "./img/도서글2.png",
                link: "movie.html",
                heart: "930",
                comment: "1,211",
                bookmark: "957",
            },
            {
                intro: "더운 날 에어컨 앞에서 읽기 좋은 책 목록",
                title: "장마철에는 시원한 수박과 한 더미의 책",
                author: "오래된책장",
                imgSrc: "./img/도서글3.png",
                link: "movie.html",
                heart: "1,110",
                comment: "1,431",
                bookmark: "943",
            },
        ],
        "03": [
            {
                intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
                title: "무라카미 하루키가 전하는 이데아",
                author: "책쟁이",
                imgSrc: "./img/실시간인기도서1.png",
                link: "movie.html",
                heart: "1,130",
                comment: "1,831",
                bookmark: "987",
            },
            // Add more objects for additional items
        ],
        "04": [
            {
                intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
                title: "무라카미 하루키가 전하는 이데아",
                author: "책쟁이",
                imgSrc: "./img/실시간인기도서1.png",
                link: "movie.html",
                heart: "1,130",
                comment: "1,831",
                bookmark: "987",
            },
            // Add more objects for additional items
        ],
        "05": [
            {
                intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
                title: "무라카미 하루키가 전하는 이데아",
                author: "책쟁이",
                imgSrc: "./img/실시간인기도서1.png",
                link: "movie.html",
                heart: "1,130",
                comment: "1,831",
                bookmark: "987",
            },
            // Add more objects for additional items
        ],
        "06": [
            {
                intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
                title: "무라카미 하루키가 전하는 이데아",
                author: "책쟁이",
                imgSrc: "./img/실시간인기도서1.png",
                link: "movie.html",
                heart: "1,130",
                comment: "1,831",
                bookmark: "987",
            },
            // Add more objects for additional items
        ],
        "07": [
            {
                intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
                title: "무라카미 하루키가 전하는 이데아",
                author: "책쟁이",
                imgSrc: "./img/실시간인기도서1.png",
                link: "movie.html",
                heart: "1,130",
                comment: "1,831",
                bookmark: "987",
            },
            // Add more objects for additional items
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
                          <div
                                        class="popluarWritingShowMoreSelectHeart"
                                    >
                                        <div class="heartImg">
                                        
                                            <img src="./img/heart.png" />
                                        </div>
                                        <div class="heartCnt">${content.heart}</div>
                                    </div>
                                    <div
                                        class="popluarWritingShowMoreSelectComments"
                                    >
                                        <div class="commentImg">
                                            <img src="./img/comments.png" />
                                        </div>
                                        <div class="commentCnt">${content.comment}</div>
                                    </div>
                                    <div
                                        class="popluarWritingShowMoreSelectScrap"
                                    >
                                        <div class="ScrapImg">
                                            <img src="./img/bookmark.png" />
                                        </div>
                                        <div class="ScrapCnt">${content.bookmark}</div>
                                    </div>
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
                img: "./img/영화작가3.png",
                author: "영평가",
                link: "movie.html",
            },
            {
                img: "./img/영화작가1.png",
                author: "이영영",
                link: "writerpage.html",
            },
            {
                img: "./img/영화작가2.png",
                author: "박대장",
                link: "movie.html",
            },
            {
                img: "./img/영화작가4.png",
                author: "테드창",
                link: "movie.html",
            },
            {
                img: "./img/영화작가5.png",
                author: "영시네마",
                link: "movie.html",
            },
        ],
        "02": [
            {
                img: "./img/도서작가 (1).png",
                author: "책쟁이",
                link: "movie.html",
            },
            {
                img: "./img/도서작가 (2).png",
                author: "김식",
                link: "movie.html",
            },
            {
                img: "./img/도서작가 (3).png",
                author: "아카이브",
                link: "movie.html",
            },
            {
                img: "./img/도서작가 (4).png",
                author: "국선생",
                link: "movie.html",
            },
            {
                img: "./img/도서작가 (5).png",
                author: "오래된책장",
                link: "movie.html",
            },
        ],
        "03": [
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
        "04": [
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
        "05": [
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
        "06": [
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
        "07": [
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
