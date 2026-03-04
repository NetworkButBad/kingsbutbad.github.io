document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.hash.substring(1) || "home_page";

    fetch(`./pages/${page}`)
        .then(response => {
            if (!response.ok) throw new Error("Page is not found. :(");
            return response.text();
        })
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        })
        .catch(err => {
            document.getElementById("main-content").innerHTML = "<p>404: The current page is not found.</p>";
            console.error(err);
        });
});
