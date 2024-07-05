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




function goBack() {
    window.history.back();
}