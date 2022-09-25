// creating an array of the pre-made comments
let comments = [];
const getCommentAPI = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=d7bef51b-651b-4a63-86e1-2327e85bd335"
    )
    .then((response) => {
      console.log(response);
      comments = response.data;
      comments.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
      renderComments();
    });
};

getCommentAPI();

const renderComments = () => {
  const commentsEl = document.querySelector(".conversation__section");

  for (let i = 0; i < comments.length; i++) {
    const newDiv = document.createElement("article");
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
    dateEl.innerText = new Date(comments[i].timestamp).toLocaleDateString(
      "en-US",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );
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

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=d7bef51b-651b-4a63-86e1-2327e85bd335",
      {
        name: event.target.fullName.value,
        comment: event.target.comment.value,
      }
    )
    .then((response) => {
      console.log(response);
      comments = response.data;
      commentList.innerHTML = null;
      getCommentAPI();
      event.target.reset();
    });

  const commentList = document.querySelector(".conversation__section");

  console.log(commentList);
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
