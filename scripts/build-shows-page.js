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

// Desktop labels
const buildDesktopLabels = () => {
  // wrapper
  const desktopLabelWrapper = document.createElement("div");
  desktopLabelWrapper.classList.add("tickets__labels");
  tickets.appendChild(desktopLabelWrapper);

  // label 1
  let dateHeader = document.createElement("h4");
  dateHeader.classList.add("tickets__date-header-desktop");
  dateHeader.innerText = "Date";
  desktopLabelWrapper.appendChild(dateHeader);

  let venueHeader = document.createElement("h4");
  venueHeader.classList.add("tickets__venue-header-desktop");
  venueHeader.innerText = "Venue";
  desktopLabelWrapper.appendChild(venueHeader);

  let locationHeader = document.createElement("h4");
  locationHeader.classList.add("tickets__location-header-desktop");
  locationHeader.innerText = "Location";
  desktopLabelWrapper.appendChild(locationHeader);

  let emptyDiv = document.createElement("h4");
  emptyDiv.classList.add("tickets__location-header-desktop");
  emptyDiv.innerText = "";
  desktopLabelWrapper.appendChild(emptyDiv);
};

buildDesktopLabels();

for (let i = 0; i < showsObject.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tickets__item");
  tickets.appendChild(newDiv);

  let dateHeader = document.createElement("h4");
  dateHeader.classList.add("tickets__date-header-mobile");
  dateHeader.innerText = "Date";
  newDiv.appendChild(dateHeader);

  let ticketDate = document.createElement("p");
  ticketDate.classList.add("tickets__date");
  ticketDate.innerText = showsObject[i].date;
  newDiv.appendChild(ticketDate);

  let venueHeader = document.createElement("h4");
  venueHeader.classList.add("tickets__venue-header");
  venueHeader.innerText = "Venue";
  newDiv.appendChild(venueHeader);

  let ticketVenue = document.createElement("p");
  ticketVenue.classList.add("tickets__venue");
  ticketVenue.innerText = showsObject[i].venue;
  newDiv.appendChild(ticketVenue);

  let locationHeader = document.createElement("h4");
  locationHeader.classList.add("tickets__location-header");
  locationHeader.innerText = "Location";
  newDiv.appendChild(locationHeader);

  let ticketLocation = document.createElement("p");
  ticketLocation.classList.add("tickets__location");
  ticketLocation.innerText = showsObject[i].location;
  newDiv.appendChild(ticketLocation);

  let ticketBtn = document.createElement("a");
  ticketBtn.classList.add("tickets__btn");
  ticketBtn.setAttribute("href", "https://youtu.be/dQw4w9WgXcQ");
  ticketBtn.target = "_blank";
  ticketBtn.innerText = "BUY TICKETS";
  newDiv.appendChild(ticketBtn);
}
