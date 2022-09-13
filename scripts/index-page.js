// creating an array of the pre-made comments

let madeComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    pictureClass: "comments-pre__circle",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    pictureClass: "comments-pre__circle",
  },
  {
    name: "Miles Acosta",
    date: " 12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
console.log(madeComments);

let comments = document.querySelector(".conversation__section");
let div = document.querySelector(".div");

for (let i = 0; i < madeComments.length; i++) {
  console.log(i);

  let newDiv = document.createElement("div");
  newDiv.classList.add("comment__item");
  comments.appendChild(newDiv);
  let nameEl = document.createElement("h5");
  nameEl.classList.add("nameMade");
  nameEl.innerText = madeComments[i].name;
  newDiv.appendChild(nameEl);

  let dateEl = document.createElement("p");
  dateEl.classList.add("dateMade");
  dateEl.innerText = madeComments[i].date;
  newDiv.appendChild(dateEl);

  let commentEl = document.createElement("p");
  commentEl.classList.add("commentMade");
  commentEl.innerText = madeComments[i].comment;
  newDiv.appendChild(commentEl);
}
