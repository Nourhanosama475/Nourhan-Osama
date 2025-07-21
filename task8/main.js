const container = document.getElementById("posts-container");
const modal = document.getElementById("post-details");
const detailTitle = document.getElementById("detail-title");
const detailBody = document.getElementById("detail-body");
const closeBtn = document.getElementById("close-btn");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then(posts => {
    posts.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body.substring(0, 80)}...</p>
      `;

      div.addEventListener("click", () => {
        detailTitle.textContent = post.title;
        detailBody.textContent = post.body;
        modal.classList.remove("hidden");
      });

      container.appendChild(div);
    });
  })
  .catch(error => {
    container.innerHTML = `<p style="color:red;">فشل في تحميل البيانات: ${error.message}</p>`;
  });

// إغلاق المودال
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});