const AddBtn = document.querySelector(".Add--card--button");
const main_container = document.getElementById("maincontainer");

var card_number = 1;
function counter() {
  card_number++;
}

// Add new cards //
AddBtn.addEventListener("click", AddNew);
AddBtn.addEventListener("click", counter);

function AddNew() {
  const Card = document.createElement("div");
  Card.classList.add("Card", "del--" + card_number);

  Card.style.display = 'inline-block';

  Card.innerHTML =
    `
    <input type="button" value="Usuń" class="Delete--card--button" onClick="Deletediv(` +
    card_number +
    `)" />
    <input type="button" value="Pokaż/Ukryj" class="Show--card--button" onClick="Hide(` +
    card_number +
    `)"/>
    <div class="ticket">
    <p>Karta ` +
    card_number +
    `</p>
    </div>`;

  main_container.appendChild(Card);
  console.log();
}
// Delete card //

function Deletediv(card_number) {
  const delete_div = document.querySelector(".del--" + card_number);
  console.log(card_number);
  delete_div.removeChild(delete_div);

  //card_number--;
}