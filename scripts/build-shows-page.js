let showsArray = [];

axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=d7bef51b-651b-4a63-86e1-2327e85bd335"
  )
  .then((response) => {
    console.log(response.data);
    showsArray = response.data;
    buildTickets();
  });

let activeArticle;

const setActiveArticle = (articleToSet) => {
  if (activeArticle) {
    activeArticle.classList.remove("tickets__item--active");
  }
  articleToSet.classList.add("tickets__item--active");
  activeArticle = articleToSet;
};

let ticketSection = document.querySelector(".tickets");

let ticketContainer = document.createElement("div");
ticketContainer.classList.add("tickets__Container");
ticketSection.appendChild(ticketContainer);

let ticketWrapper = document.createElement("div");
ticketWrapper.classList.add("tickets__wrapper");
ticketContainer.appendChild(ticketWrapper);

let ticketHeader = document.createElement("div");
ticketHeader.classList.add("tickets__header");
ticketWrapper.appendChild(ticketHeader);

let ticketHead = document.createElement("h3");
ticketHead.classList.add("tickets__head");
ticketHead.innerText = "Shows";
ticketHeader.appendChild(ticketHead);

let ticketItemWrapper = document.createElement("div");
ticketItemWrapper.classList.add("tickets__item-wrapper");
ticketContainer.appendChild(ticketItemWrapper);

let ticketBooking = document.createElement("div");
ticketBooking.classList.add("tickets__bookings");
ticketItemWrapper.appendChild(ticketBooking);

let ticketList = document.createElement("div");
ticketList.classList.add("tickets__list");
ticketItemWrapper.appendChild(ticketList);

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

const formatDate = (timestamp) => {
  const formatedDate = new Date(timestamp).toDateString();
  return formatedDate;
};

const buildTickets = () => {
  const showsItem = document.querySelector(".tickets");

  for (let i = 0; i < showsArray.length; i++) {
    let newDiv = document.createElement("article");
    newDiv.classList.add("tickets__item");
    ticketList.appendChild(newDiv);

    let dateHeader = document.createElement("h4");
    dateHeader.classList.add("tickets__date-header");
    dateHeader.innerText = "Date";
    newDiv.appendChild(dateHeader);

    let ticketDate = document.createElement("p");
    ticketDate.classList.add("tickets__date");
    ticketDate.innerText = formatDate(showsArray[i].date);
    newDiv.appendChild(ticketDate);

    let dateWrapper = document.createElement("div");
    dateWrapper.classList.add("tickets__date-wrapper");
    newDiv.appendChild(dateWrapper);

    let ticketDateTablet = document.createElement("p");
    ticketDateTablet.classList.add("tickets__date-tablet");
    ticketDateTablet.innerText = formatDate(showsArray[i].date);
    dateWrapper.appendChild(ticketDateTablet);

    let venueHeader = document.createElement("h4");
    venueHeader.classList.add("tickets__venue-header");
    venueHeader.innerText = "Venue";
    newDiv.appendChild(venueHeader);

    let ticketVenue = document.createElement("p");
    ticketVenue.classList.add("tickets__venue");
    ticketVenue.innerText = showsArray[i].place;
    newDiv.appendChild(ticketVenue);

    let venueWrapper = document.createElement("div");
    venueWrapper.classList.add("tickets__venue-wrapper");
    newDiv.appendChild(venueWrapper);

    let venueTablet = document.createElement("p");
    venueTablet.classList.add("tickets__venue-tablet");
    venueTablet.innerText = showsArray[i].place;
    venueWrapper.appendChild(venueTablet);

    let locationHeader = document.createElement("h4");
    locationHeader.classList.add("tickets__location-header");
    locationHeader.innerText = "Location";
    newDiv.appendChild(locationHeader);

    let ticketLocation = document.createElement("p");
    ticketLocation.classList.add("tickets__location");
    ticketLocation.innerText = showsArray[i].location;
    newDiv.appendChild(ticketLocation);

    let locationWrapper = document.createElement("div");
    locationWrapper.classList.add("tickets__location-wrapper");
    newDiv.appendChild(locationWrapper);

    let locationTablet = document.createElement("p");
    locationTablet.classList.add("tickets__venue-tablet");
    locationTablet.innerText = showsArray[i].location;
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

    newDiv.onclick = () => setActiveArticle(newDiv);
  }
};
