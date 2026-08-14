document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const paperCards = document.querySelectorAll(".paper-card");

    // 即時關鍵字搜尋功能
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();

        paperCards.forEach((card) => {
            const searchData = card.getAttribute("data-search").toLowerCase();
            const titleText = card.querySelector(".card-title").textContent.toLowerCase();

            // 如果被設定了 hidden，搜尋時也不顯示
            if (card.classList.contains("hidden")) return;

            if (searchData.includes(query) || titleText.includes(query)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
