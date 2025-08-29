function addToHistory(name, number) {
    const callList = document.querySelector(".call-list");

    // Get current time
    const now = new Date();
    const time = now.toLocaleTimeString();

    // Create history entry
    const li = document.createElement("li");
    li.innerHTML = 
     `<span style="text-align:right; color:#888;">${time}</span>
      <span style="text-align:left;">${name} <br> ${number}</span>`;

    // Insert at top
    callList.prepend(li);
  }




//   Html codes

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emergency Helpline</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="main-container">

    <!-- Left Section (Cards) -->
    <div class="card-section">
      <div class="card" id="nationalEmergency">
        <h3>National Emergency Number</h3>
        <p>National Emergency</p>
        <div class="number">999</div>
        <div class="tags"><span class="tag">All</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card" id="policeHelpline">
        <h3>Police Helpline Number</h3>
        <p>Police</p>
        <div class="number">999</div>
        <div class="tags"><span class="tag">Police</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card" id="fireService">
        <h3>Fire Service Number</h3>
        <p>Fire Service</p>
        <div class="number">999</div>
        <div class="tags"><span class="tag">Fire</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card">
        <h3>Ambulance Service</h3>
        <p>Ambulance</p>
        <div class="number">1994-999999</div>
        <div class="tags"><span class="tag">Health</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card">
        <h3>Women & Child Helpline</h3>
        <p>Women & Child Helpline</p>
        <div class="number">109</div>
        <div class="tags"><span class="tag">Help</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card">
        <h3>Anti-Corruption Helpline</h3>
        <p>Anti-Corruption</p>
        <div class="number">106</div>
        <div class="tags"><span class="tag">Govt.</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card">
        <h3>Electricity Helpline</h3>
        <p>Electricity Outage</p>
        <div class="number">16216</div>
        <div class="tags"><span class="tag">Electricity</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card">
        <h3>Brac Helpline</h3>
        <p>Brac</p>
        <div class="number">16445</div>
        <div class="tags"><span class="tag">NGO</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>

      <div class="card" >
        <h3>Bangladesh Railway Helpline</h3>
        <p>Bangladesh Railway</p>
        <div class="number">163</div>
        <div class="tags"><span class="tag">Travel</span></div>
        <div class="btns">
          <button class="btn copy">Copy</button>
          <button class="btn call">Call</button>
        </div>
      </div>
    </div>

    <!-- Right Section (Call History) -->
    <div class="history-section">
      <div class="history-header">
        <h3>Call History</h3>
        <button class="clear-btn">Clear</button>
      </div>
      <ul class="call-list">
        <!-- No history for now -->
      </ul>
    </div>
  </div>



  <script>
    // ====== NATIONAL EMERGENCY CALL ======
    document.querySelector("#nationalEmergency .call")
    .addEventListener("click", function () {
      const name = document.querySelector("#nationalEmergency h3").innerText;
      const number = document.querySelector("#nationalEmergency .number").innerText;
  
      alert(`Calling ${name} ${number}...`);
  
      addToHistory(name, number);
    });
  
    // ====== POLICE CALL ======
    document.querySelector("#policeHelpline .call").addEventListener("click", function () {
      const name = document.querySelector("#policeHelpline h3").innerText;
      const number = document.querySelector("#policeHelpline .number").innerText;
  
      alert(`Calling ${name} ${number}...`);
  
      addToHistory(name, number);
    });
  
    // ====== FIRE SERVICE CALL ======
    document.querySelector("#fireService .call").addEventListener("click", function () {
      const name = document.querySelector("#fireService h3").innerText;
      const number = document.querySelector("#fireService .number").innerText;
  
      alert(`Calling ${name} ${number}...`);
  
      addToHistory(name, number);
    });
  

  
  
    // ====== FUNCTION TO ADD TO CALL HISTORY ======
    function addToHistory(name, number) {
  const callList = document.querySelector(".call-list");

  // Get current time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // Create card container (li)
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";
  li.style.background = "#f9f9f9";
  li.style.border = "1px solid #eee";
  li.style.borderRadius = "10px";
  li.style.padding = "12px 16px";
  li.style.marginBottom = "10px";
  li.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";

  // Left section (name + number)
  const leftDiv = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = name;
  h4.style.margin = "0";
  h4.style.fontSize = "15px";

  const p = document.createElement("p");
  p.textContent = number;
  p.style.margin = "2px 0 0 0";
  p.style.fontSize = "13px";
  p.style.color = "#666";

  leftDiv.appendChild(h4);
  leftDiv.appendChild(p);

  // Right section (time)
  const timeSpan = document.createElement("span");
  timeSpan.textContent = time;
  timeSpan.style.color = "#888";
  timeSpan.style.fontSize = "13px";

  // Put together
  li.appendChild(leftDiv);
  li.appendChild(timeSpan);

  // Insert at the top
  callList.prepend(li);
}



  
    // ====== CLEAR BUTTON ======
    // CLEAR BUTTON
    const clearBtn = document.querySelector(".clear-btn");
  const callList = document.querySelector(".call-list");

  // Add click event
  clearBtn.addEventListener("click", function () {
    // console.log("Clear button clicked"); // debug
    callList.innerHTML = ""; // should empty the list
});

  </script>
  
</body>




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f8f9fa;
  padding: 20px;
}

.main-container {
  display: flex;
  gap: 20px;
}

/* Left side cards */
.card-section {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h3 {
  font-size: 18px;
  font-weight: bold;
}

.card p {
  color: #666;
  font-size: 14px;
}

.card .number {
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
}

.tags {
  margin-bottom: 12px;
}

.tag {
  display: inline-block;
  background: #eee;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 12px;
}

.btns {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn.copy {
  background: #f1f1f1;
}

.btn.call {
  background: #28a745;
  color: white;
}

/* Right side - call history */
.history-section {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.history-header h3 {
  font-size: 18px;
}

.clear-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.call-list {
  list-style: none;
  font-size: 14px;
  color: #444;
}

.call-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

/* Responsive */
@media (max-width: 992px) {
  .card-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }

  .card-section {
    grid-template-columns: 1fr;
  }
}
