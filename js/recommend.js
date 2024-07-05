document.addEventListener("DOMContentLoaded", () => {
    const recommendWriters = ["writer1", "writer2", "writer3", "writer4"];

    recommendWriters.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("click", () => {
                window.location.href = "writerpage.html";
            });
        }
    });

    // 네비게이션바 이동 함수
    function setupPagination(buttons, circles, totalPages, currentPage) {
        function updateCircles(page) {
            circles.forEach((circle, index) => {
                if (index === page) {
                    circle.setAttribute("r", 4);
                    circle.setAttribute("fill", "#5E6F52");
                } else {
                    const size = 4 - Math.min(3, Math.abs(index - page));
                    circle.setAttribute("r", size);
                    circle.setAttribute(
                        "fill",
                        size === 4 ? "#5E6F52" : "#EEEEEE"
                    );
                }
            });
        }

        buttons.prev.addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                updateCircles(currentPage);
            }
        });

        buttons.next.addEventListener("click", () => {
            if (currentPage < totalPages - 1) {
                currentPage++;
                updateCircles(currentPage);
            }
        });

        updateCircles(currentPage);
    }

    // 최신 추천 네비게이션 설정
    setupPagination(
        {
            prev: document.getElementById("recent_before_page"),
            next: document.getElementById("recent_next_page"),
        },
        document.querySelectorAll("#recent_page_position_svg circle"),
        document.querySelectorAll("#recent_page_position_svg circle").length,
        0
    );

    // 알고리즘 추천 네비게이션 설정
    setupPagination(
        {
            prev: document.getElementById("algorithm_before_page"),
            next: document.getElementById("algorithm_next_page"),
        },
        document.querySelectorAll("#algorithm_page_position_svg circle"),
        document.querySelectorAll("#algorithm_page_position_svg circle").length,
        0
    );
});
