// Weight Chart
var weightCtx = document.getElementById("weightChart").getContext("2d");
var weightChart = new Chart(weightCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Weight (kg)",
        data: [70, 71, 72, 73, 74, 75],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
});

// Height Chart
var heightCtx = document.getElementById("heightChart").getContext("2d");
var heightChart = new Chart(heightCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Height (cm)",
        data: [170, 170, 170, 170, 170, 170],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
});

// Blood Pressure Chart
var bpCtx = document.getElementById("bpChart").getContext("2d");
var bpChart = new Chart(bpCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Systolic (mmHg)",
        data: [120, 121, 122, 123, 124, 125],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Diastolic (mmHg)",
        data: [80, 81, 82, 83, 84, 85],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  },
});

// Blood Sugar Chart
var sugarCtx = document.getElementById("sugarChart").getContext("2d");
var sugarChart = new Chart(sugarCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Blood Sugar (mg/dL)",
        data: [90, 92, 94, 96, 98, 100],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  },
});

// Dropdown toggle script
document
  .querySelector(".border.cursor-pointer")
  .addEventListener("click", function () {
    document.querySelector(".drop-down").classList.toggle("hidden");
  });
