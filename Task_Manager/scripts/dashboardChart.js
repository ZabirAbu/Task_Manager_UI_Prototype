window.onload = function () {
  var xValues = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
  var yValues = [5, 17, 30, 54, 25];
  var barColors = ["#E0FFFF", "#FAEBD7", "#00FF7F", "#FFFFE0", "#FFE4E1"];
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Progress of completing tasks",
      },
    },
  });
};
