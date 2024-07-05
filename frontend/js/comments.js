document.addEventListener("DOMContentLoaded", () => {
    const commentRegisterButton = document.querySelector(".commentregister");
    const commentBox = document.querySelector(".commentbox");
    const commentsContainer = document.getElementById("commentsContainer");
    const commentId = document.querySelector(
        ".commentcntelementsid"
    ).textContent;

    const sortOldestButton = document.getElementById("sortOldest");
    const sortNewestButton = document.getElementById("sortNewest");

    const commentNumberElement = document.querySelector(".commentnumber");

    const comments = [
        {
            text: "러브레터에 대한 평론 잘 읽었습니다. 이와이 슌지 감독의 섬세한 연출과 나카야마 미호의 감정 연기를 깊이 있게 분석하셔서 감동적이었습니다. 특히, 눈을 중요한 서사 장치로 해석한 부분이 인상적이네요. 이 영화가 사랑과 그리움의 본질을 탐구하는 작품이라는 점에 깊이 공감합니다. 영화를 다시 보고 싶은 마음이 생겼습니다. 좋은 평론 감사합니다.",
            id: "아이디있음",
            date: "2024년 6월 30일",
            time: "15:57",
            heart: "10",
        },
        {
            text: "이 평론을 읽고 나니 러브레터가 새삼 다시 보고 싶어졌습니다. 감독의 섬세한 연출과 나카야마 미호의 감정 연기를 잘 설명해 주셔서 감사합니다. 특히, 눈 덮인 하코다테의 풍경이 단순한 배경이 아니라 캐릭터들의 감정을 반영하는 중요한 서사 장치로 기능한다는 해석이 인상 깊었습니다. 음악과 영상이 마치 한 편의 시처럼 어우러진다는 표현도 매우 와닿았어요. 사랑과 상실, 기억과 그리움이라는 주제가 영화 속에서 어떻게 펼쳐지는지에 대한 분석도 공감이 가네요. 덕분에 이 영화를 더 깊이 이해하게 되었습니다. 좋은 평론 감사합니다.",
            id: "슈슈리릴",
            date: "2024년 6월 26일",
            time: "16:03",
            heart: "29",
        },
        {
            text: "러브레터 평론 잘 읽었습니다. 이와이 슌지 감독의 작품에 대한 깊이 있는 분석이 인상적이었습니다. 나카야마 미호의 감정 연기와 함께 영화의 주제와 상징을 설명한 부분이 특히 눈에 띄었습니다. 눈 덮인 하코다테의 풍경이 캐릭터들의 감정선과 맞물린다는 해석은 참신하고 설득력 있었습니다. 또한, 음악과 영상이 시처럼 어우러진다는 표현이 와닿았습니다. 사랑과 그리움의 본질을 탐구하는 영화라는 점에서 많은 공감을 느꼈습니다. 이 평론을 통해 러브레터를 다시 보고 싶은 마음이 생겼습니다. 영화가 주는 감동과 메시지를 재발견하게 해 주셔서 감사합니다. 덕분에 이 작품을 더 깊이 이해하게 되었습니다. 훌륭한 평론 감사합니다.",
            id: "책벌레",
            date: "2024년 6월 29일",
            time: "16:12",
            heart: "6",
        },
        {
            text: "러브레터에 대한 깊이 있는 평론 잘 읽었습니다. 영화의 주제와 상징, 특히 눈 덮인 하코다테의 풍경이 캐릭터들의 감정과 맞물려 중요한 서사 장치로 기능한다는 점이 인상적이었습니다. 이와이 슌지 감독의 시적 영상미와 쿠라사와 히로카즈의 음악이 어우러져 한 편의 시처럼 느껴진다는 설명이 마음에 와 닿았습니다. 사랑과 그리움의 본질을 탐구하는 영화라는 점에서 많은 공감을 느꼈고, 이 평론을 통해 러브레터를 다시 보고 싶다는 생각이 들었습니다. 훌륭한 평론 감사합니다.",
            id: "어텐션",
            date: "2024년 6월 28일",
            time: "15:59",
            heart: "15",
        },
        {
            text: "러브레터 평론 정말 좋았습니다. 이와이 슌지 감독의 작품을 이렇게 깊이 있게 분석한 글을 읽으니 영화에 대한 이해가 한층 더 깊어진 것 같아요. 나카야마 미호의 감정 연기와 영화의 주제를 설명한 부분이 인상적이었어요. 특히 눈 덮인 하코다테의 풍경이 캐릭터들의 감정과 연결된다는 해석이 참신했습니다. 음악과 영상이 시처럼 어우러진다는 표현도 공감이 갔고요. 이 글을 읽고 나니 러브레터를 다시 보고 싶은 마음이 생겼습니다. 좋은 평론 감사합니다.",
            id: "어흥",
            date: "2024년 7월 02일",
            time: "16:11",
            heart: "8",
        },
        {
            text: "러브레터 평론 잘 읽었습니다. 이와이 슌지 감독의 작품에 대한 깊이 있는 분석이 매우 인상적이었습니다. 나카야마 미호의 감정 연기와 영화의 주제와 상징을 설명한 부분이 특히 눈에 띄었습니다. 눈 덮인 하코다테의 풍경이 캐릭터들의 감정선과 맞물린다는 해석이 참신하고 설득력 있었습니다. 음악과 영상이 시처럼 어우러진다는 표현이 와 닿았습니다. 사랑과 그리움의 본질을 탐구하는 영화라는 점에서 많은 공감을 느꼈습니다. 이 평론을 통해 러브레터를 다시 보고 싶은 마음이 생겼습니다. 영화가 주는 감동과 메시지를 재발견하게 해 주셔서 감사합니다. 훌륭한 평론 감사합니다.",
            id: "아기사자",
            date: "2024년 6월 26일",
            time: "16:10",
            heart: "11",
        },
        {
            text: "러브레터 평론 잘 읽었습니다. 이와이 슌지 감독의 연출력과 나카야마 미호의 연기에 대한 분석이 매우 인상 깊었습니다. 특히 눈 덮인 하코다테의 풍경이 캐릭터들의 감정선을 반영한다는 해석이 참신하고 설득력 있었습니다. 음악과 영상이 시처럼 어우러진다는 표현도 와 닿았습니다. 영화가 사랑과 그리움의 본질을 탐구한다는 점에서 많은 공감을 느꼈습니다. 이 평론 덕분에 러브레터를 다시 보고 싶은 마음이 생겼습니다. 영화의 감동과 메시지를 재발견하게 해 주셔서 감사합니다. 이 작품을 더 깊이 이해할 수 있게 해 준 훌륭한 평론에 감사드립니다.",
            id: "당신에게",
            date: "2024년 7월 03일",
            time: "18:33",
            heart: "21",
        },
        {
            text: "이 평론 덕분에 러브레터가 새삼 보고 싶어졌습니다. 감독의 연출과 나카야마 미호의 연기를 설명한 부분이 특히 인상 깊었습니다. 눈 덮인 하코다테의 풍경이 캐릭터들의 감정을 반영하는 중요한 서사 장치로 기능한다는 해석이 참신하고 설득력 있었습니다. 음악과 영상이 시처럼 어우러진다는 표현도 와 닿았습니다. 사랑과 상실, 기억과 그리움이라는 주제를 다루는 영화라는 점에서 많은 공감을 느꼈습니다. 이 평론 덕분에 러브레터를 더 깊이 이해하게 되었습니다. 좋은 평론 감사합니다.",
            id: "유키",
            date: "2024년 7월 01일",
            time: "16:32",
            heart: "7",
        },
        {
            text: "러브레터 평론 잘 읽었습니다. 이와이 슌지 감독의 섬세한 연출과 나카야마 미호의 감정 연기를 분석한 부분이 특히 인상적이었습니다. 눈 덮인 하코다테의 풍경이 캐릭터들의 감정을 반영하는 중요한 서사 장치로 기능한다는 해석이 참신하고 설득력 있었습니다. 음악과 영상이 시처럼 어우러진다는 표현도 와 닿았습니다. 사랑과 그리움의 본질을 탐구하는 영화라는 점에서 많은 공감을 느꼈습니다. 이 평론 덕분에 러브레터를 다시 보고 싶은 마음이 생겼습니다. 영화의 감동과 메시지를 재발견하게 해 주셔서 감사합니다. 이 작품을 더 깊이 이해할 수 있게 해 준 훌륭한 평론에 감사드립니다.",
            id: "첫사랑",
            date: "2024년 7월 02일",
            time: "16:52",
            heart: "5",
        },
        {
            text: "러브레터에 대한 평론 잘 읽었습니다. 이와이 슌지 감독의 섬세한 연출과 나카야마 미호의 감정 연기를 분석한 부분이 특히 인상적이었습니다. 눈 덮인 하코다테의 풍경이 단순한 배경이 아니라 캐릭터들의 감정을 반영하는 중요한 서사 장치로 기능한다는 해석이 매우 참신하고 설득력 있었습니다. 음악과 영상이 시처럼 어우러진다는 표현도 와 닿았습니다. 사랑과 그리움의 본질을 탐구하는 영화라는 점에서 많은 공감을 느꼈습니다. 이 평론을 통해 러브레터를 다시 보고 싶은 마음이 생겼습니다. 영화의 감동과 메시지를 재발견하게 해 주셔서 감사합니다. 훌륭한 평론 감사합니다.",
            id: "멘토스",
            date: "2024년 6월 26일",
            time: "17:02",
            heart: "3",
        },
    ];

    function updateCommentCount() {
        commentNumberElement.textContent = comments.length;
    }

    function renderComments() {
        commentsContainer.innerHTML = "";
        comments.forEach((comment) => {
            const newCommentHTML = `
                <div class="commentswrittenelements">
                    <div class="commentswrittenid">${comment.id}</div>
                    <div class="commentswrittencontents">${comment.text}</div>
                    <div class="commentswrittenmore">
                        <div class="commentswritteninfo">
                            <div class="commentswrittendate">${comment.date}</div>
                            <div class="commentswrittentime">${comment.time}</div>
                        </div>
                        <div class="heart">
                            <div class="heartImg">
                                <img src="./img/heart.png" class="commentHeartImage">
                            </div>
                            <div class="heartCnt" class="commentHeartCount">${comment.heart}</div>
                        </div>
                    </div>
                </div>
            `;
            commentsContainer.insertAdjacentHTML("beforeend", newCommentHTML);
        });
        updateCommentCount();
    }

    function addComment(text, id, date, time) {
        comments.push({ text, id, date, time });
        renderComments();
    }

    function sortComments(by) {
        if (by === "oldest") {
            comments.sort((a, b) => {
                const dateA = new Date(
                    a.date.replace(/년|월/g, "-").replace(/일/g, "") +
                        " " +
                        a.time
                );
                const dateB = new Date(
                    b.date.replace(/년|월/g, "-").replace(/일/g, "") +
                        " " +
                        b.time
                );
                return dateA - dateB;
            });
        } else if (by === "newest") {
            comments.sort((a, b) => {
                const dateA = new Date(
                    a.date.replace(/년|월/g, "-").replace(/일/g, "") +
                        " " +
                        a.time
                );
                const dateB = new Date(
                    b.date.replace(/년|월/g, "-").replace(/일/g, "") +
                        " " +
                        b.time
                );
                return dateB - dateA;
            });
        }
        renderComments();
    }

    commentRegisterButton.addEventListener("click", (event) => {
        event.preventDefault();
        const commentText = commentBox.value.trim();

        if (commentText.length < 90) {
            alert("댓글은 90자 이상이어야 합니다.");
            return;
        }

        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}년 ${
            currentDate.getMonth() + 1
        }월 ${currentDate.getDate()}일`;
        const formattedTime = `${currentDate
            .getHours()
            .toString()
            .padStart(2, "0")}:${currentDate
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;

        addComment(commentText, commentId, formattedDate, formattedTime);
        commentBox.value = "";
        sortComments("oldest"); // 기본적으로 등록순으로 정렬
    });

    sortOldestButton.addEventListener("click", () => {
        sortComments("oldest");
        sortOldestButton.classList.add("active");
        sortNewestButton.classList.remove("active");
    });

    sortNewestButton.addEventListener("click", () => {
        sortComments("newest");
        sortOldestButton.classList.remove("active");
        sortNewestButton.classList.add("active");
    });

    // 초기 정렬 설정 (등록순)
    renderComments(); // 기본 댓글 렌더링
    sortComments("oldest");
    sortOldestButton.classList.add("active");

    // 하트 및 스크랩 이미지 클릭 이벤트 추가
    const heartImages = document.querySelectorAll(
        "#heartImage, #backgroundHeartImage"
    );
    const scrapImages = document.querySelectorAll(
        "#scrapImage, #backgroundScrapImage"
    );
    const heartCounts = document.querySelectorAll(
        "#heartCount, #backgroundHeartCount"
    );
    const scrapCounts = document.querySelectorAll(
        "#scrapCount, #backgroundScrapCount"
    );

    let heartClicked = false;
    let scrapClicked = false;

    heartImages.forEach((heartImage, index) => {
        heartImage.addEventListener("click", () => {
            heartClicked = !heartClicked;
            heartImages.forEach((img) => {
                img.src = heartClicked ? "./img/heartc.png" : "./img/heart.png";
            });
            heartCounts.forEach((count) => {
                count.textContent =
                    parseInt(count.textContent) + (heartClicked ? 1 : -1);
            });
        });
    });

    scrapImages.forEach((scrapImage, index) => {
        scrapImage.addEventListener("click", () => {
            scrapClicked = !scrapClicked;
            scrapImages.forEach((img) => {
                img.src = scrapClicked
                    ? "./img/bookmarkc.png"
                    : "./img/bookmark.png";
            });
            scrapCounts.forEach((count) => {
                count.textContent =
                    parseInt(count.textContent) + (scrapClicked ? 1 : -1);
            });
        });
    });

    // 댓글 하트 클릭 이벤트 추가
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("commentHeartImage")) {
            const heartImage = event.target;
            const heartCountElement =
                heartImage.parentElement.nextElementSibling;
            let clicked = heartImage.dataset.clicked === "true";

            heartImage.src = clicked ? "./img/heart.png" : "./img/heartc.png";
            heartCountElement.textContent =
                parseInt(heartCountElement.textContent) + (clicked ? -1 : 1);
            heartImage.dataset.clicked = !clicked;
        }
    });
});
