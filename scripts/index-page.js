// creating an array of the pre-made comments
const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: " 12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const renderComments = () => {
  const commentsEl = document.querySelector(".conversation__section");

  for (let i = 0; i < comments.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("conversation__item");
    commentsEl.appendChild(newDiv);

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment__avatar");
    newDiv.appendChild(commentBox);

    const commentInputBox = document.createElement("div");
    commentInputBox.classList.add("comment__input-box");
    newDiv.appendChild(commentInputBox);

    const avatar = document.createElement("div");
    avatar.classList.add("comment__avatar-img");
    commentBox.appendChild(avatar);

    const commentHeaders = document.createElement("div");
    commentHeaders.classList.add("comment__headers");
    commentInputBox.appendChild(commentHeaders);

    const nameEl = document.createElement("h5");
    nameEl.classList.add("conversation__name");
    nameEl.innerText = comments[i].name;
    commentHeaders.appendChild(nameEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("conversation__date");
    dateEl.innerText = comments[i].date;
    commentHeaders.appendChild(dateEl);

    const commentEl = document.createElement("p");
    commentEl.classList.add("conversation__comment");
    commentEl.innerText = comments[i].comment;
    commentInputBox.appendChild(commentEl);
  }
};

renderComments();

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

  // Remove all the comments from the page (to prevent any dupes)
  commentList.innerHTML = "";

  // Now that we've pushed the new comment Obj to the comments arr
  // Re-run the renderComments function, which will render the comments on the page
  // With the updated comments array
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
