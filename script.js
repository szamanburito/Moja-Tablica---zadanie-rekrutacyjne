const AddBtn = document.querySelector(".Add--card--button");
const main_container = document.getElementById("maincontainer");

var card_number = 0;

// Add new cards //
AddBtn.addEventListener("click", AddNew);

function AddNew() {
  card_number++;

  const Card = document.createElement("div");
  Card.classList.add("Card", "num--" + card_number);

  Card.style.display = "inline-block";

  Card.innerHTML =
    `
    <input type="button" value="Usuń" class="Delete--card--button" onClick="removeDiv(` +
    card_number +
    `)" />
    <input type="button" value="Pokaż/Ukryj" class="Show--card--button" onClick="HideDiv(` +
    card_number +
    `)" />
    <div style="display: block" class="ticket hide--` +
    card_number +
    `">
    <p>Karta ` +
    card_number +
    `</p>
    </div>`;

  main_container.appendChild(Card);
  console.log(card_number);
}

// remove cards //
function removeDiv(card_number) {
  const removeCard = document.querySelector(".num--" + card_number);
  removeCard.outerHTML = "";
  console.log(card_number);
}

// hide cards //

function HideDiv(card_number) {
  const HideCard = document.querySelector(".hide--" + card_number);

  if (HideCard.style.display == "block") {
    HideCard.style.display = "none";
  } else {
    HideCard.style.display = "block";
  }
}
