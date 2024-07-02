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
            text: "이것은 미리 등록된 댓글입니다.",
            id: "선호자",
            date: "2024년 6월 20일",
            time: "12:00",
        },
        {
            text: "또 다른 미리 등록된 댓글입니다.",
            id: "서포터",
            date: "2024년 6월 21일",
            time: "14:30",
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
                            <div class="heartCnt" class="commentHeartCount">1</div>
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
