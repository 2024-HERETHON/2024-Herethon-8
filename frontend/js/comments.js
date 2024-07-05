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
            text: "러브레터는 정말 마음을 울리는 작품이었어요. 이와이 슌지 감독의 섬세한 연출과 나카야마 미호의 탁월한 연기가 어우러져 잊을 수 없는 감동을 주었어요. 특히 눈 덮인 하코다테의 풍경은 아름다움 그 자체였습니다.",
            id: "슈슈리릴",
            date: "2024년 6월 26일",
            time: "16:03",
            heart: "29",
        },
        {
            text: "러브레터 평론 잘 읽었습니다. 이와이 슌지 감독의 작품에 대한 깊이 있는 분석이 인상적이었습니다. 나카야마 미호의 감정 연기와 함께 영화의 주제와 상징을 설명한 부분이 특히 눈에 띄었습니다. 눈 덮인 하코다테의 풍경이 캐릭터들의 감정선과 맞물린다는 해석은 참신하고 설득력 있었습니다. 또한, 음악과 영상이 시처럼 어우러진다는 표현이 와닿았습니다. 사랑과 그리움의 본질을 탐구하는 영화라는 점에서 많은 공감을 느꼈습니다. 이 평론을 통해 러브레터를 다시 보고 싶은 마음이 생겼습니다. 영화가 주는 감동과 메시지를 재발견하게 해 주셔서 감사합니다. 덕분에 이 작품을 더 깊이 이해하게 되었습니다. 훌륭한 평론 감사합니다.",
            date: "2024년 6월 29일",
            time: "16:12",
            heart: "6",
        },
        {
            text: "이와이 슌지 감독의 영화 러브레터는 정말 감동적이에요. 섬세한 감성과 깊이 있는 서사가 마음을 사로잡습니다. 특히 눈 덮인 하코다테의 풍경이 주는 시적 영상미는 정말 인상적입니다. 영화 전반에 걸쳐 중요한 역할을 하죠.",
            date: "2024년 6월 28일",
            time: "15:59",
            heart: "15",
        },
        {
            text: "나카야마 미호가 히로코와 여성 이츠키 두 역할을 모두 소화한 게 대단했어요. 그녀의 섬세한 감정 표현 덕분에 두 인물의 내면을 깊이 이해할 수 있었어요. 덕분에 더욱 몰입해서 볼 수 있었습니다. 그녀의 연기는 정말 극에 생동감을 더해줍니다.",
            date: "2024년 7월 02일",
            time: "16:11",
            heart: "8",
        },
        {
            text: "러브레터는 단순한 로맨스 영화가 아니라고 생각해요. 사랑과 그리움의 본질을 탐구하면서, 보는 사람으로 하여금 자신의 사랑과 삶을 되돌아보게 만드는 힘이 있는 영화입니다. 사랑의 기억을 통해 인간의 깊은 감정을 섬세하게 표현하는 점이 정말 좋았습니다",
            date: "2024년 6월 26일",
            time: "16:10",
            heart: "11",
        },
        {
            text: "쿠라사와 히로카즈의 음악은 영화의 감성을 더 돋보이게 해줍니다. 음악과 영상이 함께 어우러져서 마치 한 편의 시를 읽는 듯한 느낌을 줍니다. 잔잔하면서도 감성적인 음악이 말로 표현할 수 없는 감정을 전달하는 데 큰 역할을 했어요.",
            date: "2024년 7월 03일",
            time: "18:33",
            heart: "21",
        },
        {
            text: "러브레터는 시간을 초월한 사랑의 기억을 탐구하는 작품입니다. 이와이 슌지 감독의 뛰어난 연출력과 예술적 감각이 돋보이는 영화라고 생각해요. 오랫동안 기억에 남을 명작으로 평가받을 만하며, 관객에게 깊은 감동을 선사하는 작품입니다.",
            date: "2024년 7월 01일",
            time: "16:32",
            heart: "7",
        },
        {
            text: "이 영화를 보고 나니 첫사랑에 대한 기억이 떠올랐어요. 사랑과 그리움, 상실의 감정을 이렇게 깊이 있게 표현할 수 있다니 감탄했습니다. 음악과 영상미가 어우러져 한 편의 시를 읽는 듯한 느낌을 주었어요.",
            date: "2024년 7월 02일",
            time: "16:52",
            heart: "5",
        },
        {
            text: "러브레터는 단순한 로맨스 영화가 아닌, 사랑의 깊이를 탐구하는 예술 작품이라고 생각해요. 히로코와 여성 이츠키 두 인물을 완벽히 소화한 나카야마 미호의 연기가 정말 인상적이었어요. 감동과 여운이 오래 남습니다.",
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

        if (commentText.length < 50) {
            alert("댓글은 50자 이상이어야 합니다.");
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
