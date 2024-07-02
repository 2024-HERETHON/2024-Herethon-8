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
                        <div class="writingscontentsHeart"></div>
                        <div class="writingscontentsComments"></div>
                        <div class="writingscontentsSaved"></div>
                    </div>
                </div>
            </button>`;

        writingsContentsDiv.innerHTML += contentHtml;
    });
}

function goBack() {
    window.history.back();
}
