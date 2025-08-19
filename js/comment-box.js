document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    const commentBox = document.getElementById("comment-text-box");
    const newComment = commentBox.value;

    const commentContainer = document.getElementById("comment-container");

    const commentPElemnt = document.createElement("p");
    commentPElemnt.classList.add("comment");
    commentPElemnt.innerText = newComment;

    commentContainer.appendChild(commentPElemnt);

    commentBox.value = " ";
  });
