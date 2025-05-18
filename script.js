const donations = [];

function donateFood() {
  const restaurant = document.getElementById("restaurant").value.trim();
  const food = document.getElementById("food").value.trim();
  const address = document.getElementById("address").value.trim();
  const logDiv = document.getElementById("log");

  if (restaurant && food && address) {
    const entry = {
      restaurant,
      food,
      address,
      timestamp: new Date().toLocaleString(),
    };

    donations.push(entry);

    if (logDiv) {
      logDiv.innerHTML = donations
        .map(
          (d) => `
          <p>
            <strong>${d.restaurant}</strong> donated <em>${d.food}</em> at ${d.timestamp}<br/>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              d.address
            )}" target="_blank">View Address on Map</a>
          </p>`
        )
        .join("");
    }

    document.getElementById("restaurant").value = "";
    document.getElementById("food").value = "";
    document.getElementById("address").value = "";
  } else {
    alert("Please fill out all fields.");
  }
}
