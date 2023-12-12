var hsResultsPage = function (_resultsClass) {
  function buildResultsPage(_instance) {
    var resultTemplate = _instance.querySelector(".event__template"),
      resultsSection = _instance;

    searchPath = _instance.getAttribute("data-api-term");
    firstUrl = "https://shop.firstchoicesafetysolutions.com/";

    function addResult(url, price, start, end) {
      const date_start = new Date(start);
      const date_start_timeString = `${date_start.getHours()}:${
        date_start.getMinutes() < 10 ? "0" : ""
      }${date_start.getMinutes()}`;

      const date_end = new Date(end);
      const date_end_timeString = `${date_end.getHours()}:${
        date_end.getMinutes() < 10 ? "0" : ""
      }${date_end.getMinutes()}`;

      var newResult = document.importNode(resultTemplate.content, true);
      newResult.querySelector(".event__link").href = url;
      newResult.querySelector(".event__price").innerHTML = price;

      var existing_months = [
        ...document.querySelectorAll(".event__start-date__month"),
      ];
      var existing_months = existing_months.map((element) => element.outerText);

      if (
        existing_months.includes(
          date_start.toLocaleString("en-US", { month: "short" })
        )
      ) {
        newResult.querySelector(".event__start-date__year").innerHTML =
          date_start.getFullYear();
        newResult.querySelector(".event__start-date__month").innerHTML =
          date_start.toLocaleString("en-US", { month: "short" });
      } else {
        newResult.querySelector(".event__start-date__year").innerHTML =
          date_start.getFullYear();
        newResult.querySelector(".event__start-date__month").innerHTML =
          date_start.toLocaleString("en-US", { month: "short" });
        newResult.querySelector(".event__end-date__year").innerHTML =
          date_end.getFullYear();
        newResult.querySelector(".event__end-date__month").innerHTML =
          date_end.toLocaleString("en-US", { month: "short" });
      }

      newResult.querySelector(".event__start-date__day").innerHTML =
        date_start.getDate();
      newResult.querySelector(".event__start-date__day__day").innerHTML =
        date_start.toLocaleString("en-US", { weekday: "short" });
      newResult.querySelector(".event__end-date__day__day").innerHTML =
        date_end.toLocaleString("en-US", { weekday: "short" });
      newResult.querySelector(".event__end-date__day").innerHTML =
        date_end.getDate();

      newResult.querySelector(".event__date__start-hour").innerHTML =
        date_start_timeString;
      newResult.querySelector(".event__date__end-hour").innerHTML =
        date_end_timeString;

      if (
        date_start.toLocaleString("en-US", { month: "short" }) ==
          date_end.toLocaleString("en-US", { month: "short" }) &&
        date_start.getFullYear() == date_end.getFullYear()
      ) {
        newResult.querySelector(".event__month__divider").remove();
        newResult.querySelector(".event__end-date__month").remove();
        newResult.querySelector(".event__end-date__year").remove();
      }
      if (date_start.getDate() == date_end.getDate()) {
        newResult.querySelector(".event__date__divider").remove();
        newResult.querySelector(".event__end-date__day__wrapper").remove();
      }

      resultsSection.appendChild(newResult);
    }
    function fillResults(results, searchPath) {
      results.forEach(function (result, i) {
        if (result.title == searchPath) {
          /*        
          console.log(result.title);
          console.log(result.start_date);
          console.log(result.end_date); 
          */

          addResult(
            result.url,
            result.cost,
            result.start_date,
            result.end_date
          );
        }
      });
    }
    function emptyResults(searchedTerm) {
      resultsSection.innerHTML =
        '<div class="hs-search__no-results center"><p>Sorry. There are no upcoming events for "' +
        searchPath +
        '"</p></div>';
    }
    function httpRequest(term, offset) {
      var requestUrl =
        firstUrl +
        "/wp-json/tribe/events/v1/events/?search=" +
        encodeURIComponent(searchPath);
      request = new XMLHttpRequest();
      console.log(requestUrl);

      request.open("GET", requestUrl, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          // console.log(data);
          // console.log('DIEGO');
          if (data.total > 0) {
            // console.log(data);
            fillResults(data.events, searchPath);
          } else {
            emptyResults(data.searchTerm);
          }
        } else {
          console.error("Server reached, error retrieving results.");
        }
      };
      request.onerror = function () {
        console.error("Could not reach the server.");
      };
      request.send();
    }

    var getResults = (function () {
      httpRequest();
    })();
  }
  (function () {
    var searchResults = document.querySelectorAll(_resultsClass);
    Array.prototype.forEach.call(searchResults, function (el) {
      buildResultsPage(el);
    });
  })();
};

if (
  document.attachEvent
    ? document.readyState === "complete"
    : document.readyState !== "loading"
) {
  var resultsPages = hsResultsPage("div.events__calendar");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    var resultsPages = hsResultsPage("div.events__calendar");
  });
}
