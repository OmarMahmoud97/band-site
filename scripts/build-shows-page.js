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

let ticketSection = document.querySelector(".tickets");

let ticketWrapper = document.createElement("div");
ticketWrapper.classList.add("tickets__wrapper");
ticketSection.appendChild(ticketWrapper);

let ticketHeader = document.createElement("div");
ticketHeader.classList.add("tickets__header");
ticketWrapper.appendChild(ticketHeader);

let ticketHead = document.createElement("h3");
ticketHead.classList.add("tickets__head");
ticketHead.innerText = "Shows";
ticketHeader.appendChild(ticketHead);

let ticketBooking = document.createElement("div");
ticketBooking.classList.add("tickets__bookings");
ticketWrapper.appendChild(ticketBooking);

// Desktop labels
const buildDesktopLabels = () => {
  // wrapper
  const desktopLabelWrapper = document.createElement("div");
  desktopLabelWrapper.classList.add("tickets__labels");
  ticketBooking.appendChild(desktopLabelWrapper);

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
  emptyDiv.classList.add("tickets__empty-header-desktop");
  emptyDiv.innerText = "";
  desktopLabelWrapper.appendChild(emptyDiv);
};

buildDesktopLabels();

for (let i = 0; i < showsObject.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tickets__item");
  ticketBooking.appendChild(newDiv);

  let dateHeader = document.createElement("h4");
  dateHeader.classList.add("tickets__date-header");
  dateHeader.innerText = "Date";
  newDiv.appendChild(dateHeader);

  let ticketDate = document.createElement("p");
  ticketDate.classList.add("tickets__date");
  ticketDate.innerText = showsObject[i].date;
  newDiv.appendChild(ticketDate);

  let dateWrapper = document.createElement("div");
  dateWrapper.classList.add("tickets__date-wrapper");
  newDiv.appendChild(dateWrapper);

  let ticketDateTablet = document.createElement("p");
  ticketDateTablet.classList.add("tickets__date-tablet");
  ticketDateTablet.innerText = showsObject[i].date;
  dateWrapper.appendChild(ticketDateTablet);

  let venueHeader = document.createElement("h4");
  venueHeader.classList.add("tickets__venue-header");
  venueHeader.innerText = "Venue";
  newDiv.appendChild(venueHeader);

  let ticketVenue = document.createElement("p");
  ticketVenue.classList.add("tickets__venue");
  ticketVenue.innerText = showsObject[i].venue;
  newDiv.appendChild(ticketVenue);

  let venueWrapper = document.createElement("div");
  venueWrapper.classList.add("tickets__venue-wrapper");
  newDiv.appendChild(venueWrapper);

  let venueTablet = document.createElement("p");
  venueTablet.classList.add("tickets__venue-tablet");
  venueTablet.innerText = showsObject[i].venue;
  venueWrapper.appendChild(venueTablet);

  let locationHeader = document.createElement("h4");
  locationHeader.classList.add("tickets__location-header");
  locationHeader.innerText = "Location";
  newDiv.appendChild(locationHeader);

  let ticketLocation = document.createElement("p");
  ticketLocation.classList.add("tickets__location");
  ticketLocation.innerText = showsObject[i].location;
  newDiv.appendChild(ticketLocation);

  let locationWrapper = document.createElement("div");
  locationWrapper.classList.add("tickets__location-wrapper");
  newDiv.appendChild(locationWrapper);

  let locationTablet = document.createElement("p");
  locationTablet.classList.add("tickets__venue-tablet");
  locationTablet.innerText = showsObject[i].location;
  locationWrapper.appendChild(locationTablet);

  let btnWrapper = document.createElement("div");
  btnWrapper.classList.add("tickets__btn-wrapper");
  newDiv.appendChild(btnWrapper);

  let ticketBtn = document.createElement("a");
  ticketBtn.classList.add("tickets__btn");
  ticketBtn.setAttribute("href", "https://youtu.be/dQw4w9WgXcQ");
  ticketBtn.target = "_blank";
  ticketBtn.innerText = "BUY TICKETS";
  btnWrapper.appendChild(ticketBtn);
}
