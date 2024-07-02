document.addEventListener("DOMContentLoaded", (event) => {
  // 댓글수 태그 버튼
  const lengthButtons = document.querySelectorAll(".length_select");

  lengthButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 모든 버튼의 selected 클래스를 제거
      lengthButtons.forEach((btn) => btn.classList.remove("selected"));

      // 클릭된 버튼에 selected 클래스 추가
      button.classList.add("selected");
    });
  });

  // 메뉴 버튼
  const attendanceButton = document.getElementById("attendance");
  const pointStoreButton = document.getElementById("point_store");
  const lineAttendance = document.getElementById("line_attendance");
  const linePoint = document.getElementById("line_point");
  const attendanceDetail = document.getElementById("attendance_detail");
  const pointStoreDetail = document.getElementById("point_store_detail");

  //기본 설정 : 출석체크 버튼이 눌린 상태
  attendanceButton.classList.add("selected");
  lineAttendance.classList.add("selected");
  attendanceDetail.style.display = "flex";
  pointStoreDetail.style.display = "none";

  //출석체크 눌렀을 때
  attendanceButton.addEventListener("click", () => {
    attendanceButton.classList.add("selected");
    lineAttendance.classList.add("selected");
    pointStoreButton.classList.remove("selected");
    linePoint.classList.remove("selected");
    attendanceDetail.style.display = "flex";
    pointStoreDetail.style.display = "none";
  });

  //포인트스토어 눌렀을 때
  pointStoreButton.addEventListener("click", () => {
    pointStoreButton.classList.add("selected");
    linePoint.classList.add("selected");
    attendanceButton.classList.remove("selected");
    lineAttendance.classList.remove("selected");
    pointStoreDetail.style.display = "flex";
    attendanceDetail.style.display = "none";
  });

  //사이드 : 페이지 이동
  const myComment = document.getElementById("my_comment");
  const myHeart = document.getElementById("my_heart");
  const myScrap = document.getElementById("my_scrap");
  const myPost = document.getElementById("my_post");

  myComment.addEventListener("click", () => {
    window.location.href = "myComment.html"; // myComment 페이지로 이동
  });
  myHeart.addEventListener("click", () => {
    window.location.href = "myHeart.html"; // myHeart 페이지로 이동
  });
  myScrap.addEventListener("click", () => {
    window.location.href = "myScrap.html"; // MyScrap 페이지로 이동
  });
  myPost.addEventListener("click", () => {
    window.location.href = "myPost.html"; // MyPost 페이지로 이동
  });

  // 달력 구현
  const calendar = {
    currentDate: new Date(),
    presentDates: [], // 7월 기준으로 출석된 날짜들
    generatePresentDates() {
      const today = this.currentDate.getDate();
      const currentMonth = this.currentDate.getMonth();
      const currentYear = this.currentDate.getFullYear();
    },
    render() {
      const monthYear = document.getElementById("month-year");
      const calendarBody = document.getElementById("calendar-body");

      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const today = new Date();

      const monthNames = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ];

      monthYear.textContent = `${year}. ${monthNames[month]} 출석`;

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      calendarBody.innerHTML = "";

      let date = 1;
      for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
          const cell = document.createElement("td");

          if (i === 0 && j < firstDay) {
            cell.classList.add("empty");
          } else if (date > lastDate) {
            cell.classList.add("empty");
          } else {
            cell.textContent = date;

            if (this.presentDates.includes(date)) {
              cell.classList.add("present");
            }
            if (
              year === today.getFullYear() &&
              month === today.getMonth() &&
              date === today.getDate()
            ) {
              cell.classList.add("today");
              cell.addEventListener("click", () => {
                if (!cell.classList.contains("present")) {
                  cell.classList.add("present");
                  this.presentDates.push(date);
                }
              });
            }
            date++;
          }

          row.appendChild(cell);
        }

        calendarBody.appendChild(row);
      }
    },
    init() {
      this.generatePresentDates();
      document.getElementById("prev").addEventListener("click", () => {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.presentDates = [];
        this.generatePresentDates();
        this.render();
      });

      document.getElementById("next").addEventListener("click", () => {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.presentDates = [];
        this.generatePresentDates();
        this.render();
      });

      this.render();
    },
  };

  calendar.init();
});
