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
