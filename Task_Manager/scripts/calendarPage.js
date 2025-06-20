document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: "2023-05-01",
    editable: true,
    selectable: true,
    businessHours: true,
    dayMaxEvents: true,
    events: [
      {
        title: "Supervisor meeting",
        start: "2023-05-05",
        url: "http://www.le.ac.uk",
      },
      {
        title: "Exams week",
        start: "2023-05-22",
        end: "2023-05-26",
      },
      {
        title: "Project presentation",
        start: "2023-05-29T10:30:00",
        end: "2023-05-29T11:30:00",
      },
      {
        title: "Uni Fun Day",
        start: "2023-05-30T12:00:00",
      },
    ],
    headerToolbar: {
      start: "prev,next today",
      center: "title",
      end: "dayGridMonth,timeGridWeek",
    },
    views: {
      timeGrid: {
        dayMaxEventRows: 3,
      },
    },
    eventClick: function (info) {
      info.jsEvent.preventDefault();
      if (info.event.url) {
        alert(info.event.url);
      }
    },
  });
  calendar.render();
});
