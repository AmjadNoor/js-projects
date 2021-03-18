const thermo = () => {
  const temp = document.querySelector("#temp");
  temp.setAttribute("class", "fas fa-thermometer-empty");
  temp.style.color = "#414FE3";

  setTimeout(() => {
    temp.setAttribute("class", "fas fa-thermometer-quarter");
    temp.style.color = "#0A9D07";
  }, 1000);

  setTimeout(() => {
    temp.setAttribute("class", "fas fa-thermometer-half");
  }, 2000);

  setTimeout(() => {
    temp.setAttribute("class", "fas fa-thermometer-three-quarters");
    temp.style.color = "#FF6E30";
  }, 3000);

  setTimeout(() => {
    temp.setAttribute("class", "fas fa-thermometer-full");
    temp.style.color = "#FF0000";
  }, 4000);
};

setInterval(thermo, 5000);

thermo();