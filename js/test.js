document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll("#page_position_svg circle");
  const totalPages = circles.length;
  let currentPage = 0;

  function updateCircles(page) {
    circles.forEach((circle, index) => {
      if (index === page) {
        circle.setAttribute("r", 4);
        circle.setAttribute("fill", "#5E6F52");
      } else {
        const size = 4 - Math.min(3, Math.abs(index - page));
        circle.setAttribute("r", size);
        circle.setAttribute("fill", size === 4 ? "#5E6F52" : "#EEEEEE");
      }
    });
  }

  document
    .getElementById("recent_before_page")
    .addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        updateCircles(currentPage);
      }
    });

  document.getElementById("recent_next_page").addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCircles(currentPage);
    }
  });

  updateCircles(currentPage);
});
