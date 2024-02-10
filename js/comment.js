document.getElementById("post-comment").addEventListener("click", function () {
  const textArea = document.getElementById("new-comment");
  const textValue = textArea.value;

  const commentsSection = document.getElementById("comment-container");
  //   const div = commentsSection.createElement("div");
  const div = document.createElement("div");
  const paragraph = document.createElement("p");
  paragraph.innerText = textValue;
  div.appendChild(paragraph);
  commentsSection.appendChild(div);
  textArea.value = "";
});
