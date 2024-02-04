document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");
  let output = "";

  // Define function to handle button click
  const handleClick = (btnValue) => {
    if (btnValue === "=") {
      try {
        const result = eval(output); // Using eval() here is safe because the input is controlled
        output = String(result); // Convert result to string
        display.value = output;
      } catch (error) {
        display.value = "Error";
        output = "";
      }
    } else if (btnValue === "AC") {
      output = "";
      display.value = output;
    } else if (btnValue === "DEL") {
      output = output.slice(0, -1);
      display.value = output;
    } else {
      output += btnValue;
      display.value = output;
    }
  };

  // Add event listener to buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const btnValue = button.dataset.value;
      handleClick(btnValue);
    });
  });
});
