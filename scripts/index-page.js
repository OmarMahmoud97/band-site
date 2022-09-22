// creating an array of the pre-made comments
let comments = [];

axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=d7bef51b-651b-4a63-86e1-2327e85bd335"
  )
  .then((response) => {
    console.log(response);
    comments = response.data;
    renderComments();
  });

const renderComments = () => {
  const commentsEl = document.querySelector(".conversation__section");

  for (let i = 0; i < comments.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("conversation__item");
    commentsEl.appendChild(newDiv);

    const commentBox = document.createElement("div");
    commentBox.classList.add("conversation__avatar");
    newDiv.appendChild(commentBox);

    const commentInputBox = document.createElement("div");
    commentInputBox.classList.add("conversation__input-box");
    newDiv.appendChild(commentInputBox);

    const avatar = document.createElement("div");
    avatar.classList.add("conversation__avatar-img");
    commentBox.appendChild(avatar);

    const commentHeaders = document.createElement("div");
    commentHeaders.classList.add("conversation__headers");
    commentInputBox.appendChild(commentHeaders);

    const nameEl = document.createElement("h5");
    nameEl.classList.add("conversation__name");
    nameEl.innerText = comments[i].name;
    commentHeaders.appendChild(nameEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("conversation__date");
    dateEl.innerText = comments[i].timestamp;
    commentHeaders.appendChild(dateEl);

    const commentEl = document.createElement("p");
    commentEl.classList.add("conversation__comment");
    commentEl.innerText = comments[i].comment;
    commentInputBox.appendChild(commentEl);
  }
};

// renderComments();

let now = new Date();
console.log(now);

// form handling
const handleForm = (event) => {
  event.preventDefault();

  const formData = {
    name: event.target.fullName.value,
    date: new Date().toLocaleDateString(),
    comment: event.target.comment.value,
  };

  comments.unshift(formData);

  const commentList = document.querySelector(".conversation__section");

  console.log(commentList);

  commentList.innerHTML = "";

  renderComments();

  event.target.fullName.value = "";
  event.target.comment.value = "";
};

// create comment div
const createNewComment = () => {
  const commentImg = document.createElement();

  const commentItem = document.createElement("div");
  commentItem.classList.add("form__input");

  const commentName = document.createElement("h5");
  commentName.classList.add("name__input");
  commentName.appendChild(commentItem);

  const commentInput = document.createElement("p");
  commentInput.classList.add("comment__input");
  commentInput.appendChild(commentItem);

  return commentItem;
};

// handle the submit
const registerSubmitHandler = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleForm);
};

registerSubmitHandler();
