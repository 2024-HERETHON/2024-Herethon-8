
// 오늘 날짜를 설정하는 함수
function setTodayDate() {
    const todayDateElement = document.getElementById("todayDate");
    const today = new Date();
    const options = { month: "long", day: "numeric" }; // 월과 일 형식 설정
    const formattedDate = today.toLocaleDateString("ko-KR", options);
    todayDateElement.textContent = formattedDate;
}

// 남은 시간을 계산하고 표시하는 함수
function updateTimeLeft() {
    const timeLeftElement = document.getElementById("timeLeft");
    const now = new Date();
    const tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    ); // 다음 날 자정
    const timeDifference = tomorrow - now; // 밀리초 단위의 시간 차이

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // 두 자리 숫자로 포맷팅
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timeLeftElement.textContent = formattedTime;
}

// 초기 설정
setTodayDate();
updateTimeLeft();

// 1초마다 updateTimeLeft 함수 호출
setInterval(updateTimeLeft, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".moveimgadv div");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // 초기 이미지 표시
    showImage(currentIndex);

    // 3초마다 이미지 변경
    setInterval(nextImage, 3000);
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".moveimgadv > div");
    const buttons = document.querySelectorAll(".img-btn");
    let currentIndex = 0;
    let interval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
            buttons[i].classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function startInterval() {
        interval = setInterval(nextImage, 3000);
    }

    function stopInterval() {
        clearInterval(interval);
    }

    // 초기 이미지 표시
    showImage(currentIndex);
    startInterval();

    // 버튼 클릭 시 해당 이미지 표시 및 자동 전환 재설정
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            stopInterval();
            showImage(index);
            currentIndex = index;
            startInterval();
        });
    });
});

/*랜덤 변경*/
let changeCount = 0;
const contents = [
    {
        first: {
            intro: "기묘한 우물 속으로 나를 찾아 떠나는 여정",
            title: "무라카미 하루키가 전하는 이데아",
            author: "책쟁이",
            imgSrc: "./img/실시간인기도서1.png",
            link: "movie.html",
        },
        second: {
            intro: "다른 세상으로의 문이 열리다",
            title: "해리 포터와 마법의 돌",
            author: "조앤 K. 롤링",
            imgSrc: "./img/실시간인기도서2.png",
            link: "magic.html",
        },
    },
    {
        first: {
            intro: "모험이 가득한 이야기",
            title: "호빗: 뜻밖의 여정",
            author: "J.R.R. 톨킨",
            imgSrc: "./img/실시간인기도서3.png",
            link: "adventure.html",
        },
        second: {
            intro: "다른 세계로의 초대",
            title: "나니아 연대기",
            author: "C.S. 루이스",
            imgSrc: "./img/실시간인기도서4.png",
            link: "narnia.html",
        },
    },
    {
        first: {
            intro: "평범한 삶 속의 비범한 이야기",
            title: "작가가 전하는 삶의 의미",
            author: "김작가",
            imgSrc: "./img/실시간인기도서5.png",
            link: "life.html",
        },
        second: {
            intro: "영혼의 울림을 찾다",
            title: "영혼을 울리는 책",
            author: "박작가",
            imgSrc: "./img/실시간인기도서6.png",
            link: "soul.html",
        },
    },
];

function changeContentR() {
    const content = contents[changeCount % contents.length];

    // Update the first content
    document.getElementById("imgFirstR").src = content.first.imgSrc;
    document.getElementById("titleFirstR").innerText = content.first.title;
    document.getElementById("authorFirstR").innerText = content.first.author;
    document.getElementById("introFirstR").innerText = content.first.intro;

    // Update the second content
    document.getElementById("imgSecondR").src = content.second.imgSrc;
    document.getElementById("titleSecondR").innerText = content.second.title;
    document.getElementById("authorSecondR").innerText = content.second.author;
    document.getElementById("introSecondR").innerText = content.second.intro;

    changeCount++;
}

let writerChangeCount = 0;
const writerContents = [
    {
        first: {
            imgSrc: "./img/작가프로필3.png",
            name: "김문학",
            category: "#문학 #역사",
            intro: "문학과 역사에 깊은 관심을 가지고 연구 중입니다. 수많은 작품을...",
        },
        second: {
            imgSrc: "./img/작가프로필4.png",
            name: "이기술",
            category: "#기술 #혁신",
            intro: "기술 혁신을 통해 세상을 바꾸고자 합니다. 다양한 프로젝트를...",
        },
    },
    {
        first: {
            imgSrc: "./img/작가프로필5.png",
            name: "박철학",
            category: "#철학 #예술",
            intro: "철학적 사유와 예술적 감성을 결합한 작품을 창작합니다. 독자들과...",
        },
        second: {
            imgSrc: "./img/작가프로필6.png",
            name: "최문학",
            category: "#문학 #과학",
            intro: "문학과 과학의 융합을 추구하는 작가입니다. 새로운 시도를...",
        },
    },
    {
        first: {
            imgSrc: "./img/작가프로필7.png",
            name: "정예술",
            category: "#예술 #디자인",
            intro: "예술과 디자인의 경계를 넘나들며 창의적인 작품을 만듭니다. 삶의...",
        },
        second: {
            imgSrc: "./img/작가프로필8.png",
            name: "한기술",
            category: "#기술 #환경",
            intro: "환경 친화적인 기술 개발에 매진하고 있습니다. 지속 가능한 미래를...",
        },
    },
];

function changeWriterContentW() {
    const writerContent =
        writerContents[writerChangeCount % writerContents.length];

    // Update the first writer content
    document.getElementById("imgFirstW").src = writerContent.first.imgSrc;
    document.getElementById("nameFirstW").innerText = writerContent.first.name;
    document.getElementById("categoryFirstW").innerText =
        writerContent.first.category;
    document.getElementById("introFirstW").innerText =
        writerContent.first.intro;

    // Update the second writer content
    document.getElementById("imgSecondW").src = writerContent.second.imgSrc;
    document.getElementById("nameSecondW").innerText =
        writerContent.second.name;
    document.getElementById("categorySecondW").innerText =
        writerContent.second.category;
    document.getElementById("introSecondW").innerText =
        writerContent.second.intro;

    writerChangeCount++;
}
