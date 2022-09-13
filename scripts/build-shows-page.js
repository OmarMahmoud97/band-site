let showsObject = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge ",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let tickets = document.querySelector(".tickets__bookings");
let div = document.querySelector(".div");

for (let i = 0; i < showsObject.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tickets__item");
  tickets.appendChild(newDiv);

  let ticketDate = document.createElement("h4");
  ticketDate.classList.add("tickets__date");
  ticketDate.innerText = showsObject[i].date;
  newDiv.appendChild(ticketDate);

  let ticketVenue = document.createElement("p");
  ticketVenue.classList.add("tickets__venue");
  ticketVenue.innerText = showsObject[i].venue;
  newDiv.appendChild(ticketVenue);

  let ticketLocation = document.createElement("p");
  ticketLocation.classList.add("tickets__location");
  ticketLocation.innerText = showsObject[i].location;
  newDiv.appendChild(ticketLocation);

  let ticketBtn = document.createElement("a");
  ticketBtn.classList.add("tickets__btn");
  ticketBtn.innerText = "BUY TICKETS";
  newDiv.appendChild(ticketBtn);
}
