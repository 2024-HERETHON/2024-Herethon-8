//page2 데이터
//내용
function showContent(pageId, btn) {
    // 모든 컨텐츠 숨기기
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // 선택된 컨텐츠만 표시
    document.getElementById(pageId).classList.add("active");

    // 모든 버튼의 active 클래스 제거
    var buttons = document.getElementsByClassName("btnswitch");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // 클릭된 버튼에만 active 클래스 추가
    btn.classList.add("active");
    // Page 2가 활성화된 경우 콘텐츠 로드
    if (pageId === "page2") {
        loadContent();
    }
}

function loadContent() {
    const contents = [
        {
            intro: "영화 속 감정의 미학",
            title: "화면 너머의 진심",
            author: "이영영",
            imgSrc: "./img/이영영 (4).png",
            link: "movie.html",
            heart: "30",
            comment: "58",
            bookmark: "11",
        },
        {
            intro: "영화로 풀어내는 인간의 이야기",
            title: "빛과 그림자",
            author: "이영영",
            imgSrc: "./img/이영영 (3).png",
            link: "movie.html",
            heart: "21",
            comment: "31",
            bookmark: "7",
        },
        {
            intro: "영화를 통해 본 감동의 색채",
            title: "감동의 프레임",
            author: "이영영",
            imgSrc: "./img/이영영 (2).png",
            link: "movie.html",
            heart: "33",
            comment: "45",
            bookmark: "12",
        },
        {
            intro: "영화에서 인생을 배우다",
            title: "영화를 봐야만 하는 이유",
            author: "이영영",
            imgSrc: "./img/이영영 (1).png",
            link: "movie.html",
            heart: "45",
            comment: "67",
            bookmark: "18",
        },
    ];

    // Update the writingscontents div
    const writingsContentsDiv = document.querySelector(".writingscontents");
    writingsContentsDiv.innerHTML = ""; // 기존 내용 제거

    contents.forEach((content) => {
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

function goBack() {
    window.history.back();
}
