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