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
});
