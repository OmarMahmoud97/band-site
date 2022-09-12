// creating an array of the pre-made comments

let madeComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    class: "comments-pre--topBorder",
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
    class: "comments-pre--bottomBorder",
    pictureClass: "comments-pre__circle",
  },
];
console.log(madeComments);

const comments = document.querySelector(".conversation__section");

let element = document.createElement("p");
element.innerText = madeComments[0];
comments.appendChild(element);

for (let i = 0; i < madeComments.length; i++) {
  element.innerText = madeComments[i];
  comments.appendChild(element);
  console.log(madeComments[i]);
}
