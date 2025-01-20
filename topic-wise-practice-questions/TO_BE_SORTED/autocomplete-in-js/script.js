// Get the input element and results popup
const inputElement = document.getElementById("searchInput");
const resultsPopup = document.getElementById("resultsPopup");

let lastValue = ""; // To store the last value of the input
let timer; // Timer for debouncing

// Event listener for input changes
inputElement.addEventListener("input", handleInputChange);

// Function to handle input change
function handleInputChange(event) {
  const currentValue = event.target.value;

  // Check if the input value has changed
  if (currentValue === lastValue) return;
  lastValue = currentValue;

  // Clear the previous timer
  clearTimeout(timer);

  // Set a new timer for debouncing
  timer = setTimeout(() => {
    if (currentValue.length >= 1) {
      // Only proceed if there's at least 1 character
      fetchMatches(currentValue);
    } else {
      resultsPopup.style.display = "none"; // Hide popup if input is empty
    }
  }, 500); // Adjust the delay as needed (500ms)
}

// Function to fetch matches from the API
async function fetchMatches(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/search?query=${encodeURIComponent(query)}&limit=10`
    );
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    displayResults(data.matches); // Assuming matches are in the 'matches' key
  } catch (error) {
    console.error("Fetch error:", error);
    resultsPopup.style.display = "none"; // Hide popup on error
  }
}

// Function to display the fetched results
function displayResults(matches) {
  resultsPopup.innerHTML = ""; // Clear previous results

  // Hide the popup if there are no matches
  if (matches.length === 0) {
    resultsPopup.style.display = "none";
    return;
  }

  // Create an unordered list for results
  const ul = document.createElement("ul");
  matches.forEach((match) => {
    const li = document.createElement("li");
    li.textContent = match; // Set the text content to the match
    ul.appendChild(li); // Append the list item to the unordered list
  });

  resultsPopup.appendChild(ul); // Append the list to the popup
  resultsPopup.style.display = "block"; // Show the results popup
}

// Positioning the results popup
inputElement.addEventListener("focus", () => {
  const rect = inputElement.getBoundingClientRect();
  resultsPopup.style.left = `${rect.left}px`;
  resultsPopup.style.top = `${rect.bottom}px`;
});
