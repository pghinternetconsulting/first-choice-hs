var hsResultsPage = function (_resultsClass) {
  function buildResultsPage(_instance) {
    var resultTemplate = _instance.querySelector(".product__template"),
      resultsSection = _instance;

    searchPath = _instance.getAttribute("data-api-term");
    firstUrl =  'https://shop.firstchoicesafetysolutions.com/'
    //console.log(resultTemplate);
    //console.log(searchPath);

    function addResult(title, link, photo , price) {
      var newResult = document.importNode(resultTemplate.content, true);
      newResult.querySelector(".product__title").innerHTML = title;
      newResult.querySelector(".product__title").href = link;
      newResult.querySelector(".product__link").href = link;
      newResult.querySelector(".product__link.button").href = link;
      newResult.querySelector(".product__price").innerHTML = price;



      if (typeof photo !== "undefined") {
        newResult.querySelector(
          ".product__featured-image > img"
        ).src = photo;
      } else {
        // add else statement to set featured image to placeholder if there is no featured image
        photo =
          "https://21636115.fs1.hubspotusercontent-na1.net/hubfs/21636115/Rectangle%20288.png";
        newResult.querySelector(
          ".product__featured-image > img"
        ).src = photo;
      }
      resultsSection.appendChild(newResult);
    }
    function fillResults(results) {
      results.forEach(function (result, i) {
        addResult(
          result.title,
          result.link,
          result.photo,
          result.price
        );
      });
    }
    function emptyResults(searchedTerm) {
      resultsSection.innerHTML =
        '<div class="hs-search__no-results"><p>Sorry. There are no results for "' +
        searchedTerm +
        '"</p>' +
        "<p>Try rewording your query, or browse through our site.</p></div>";
    }
    function httpRequest(term, offset) {
      var requestUrl = firstUrl + "/wp-json/v1/products/mission/" + searchPath,
        request = new XMLHttpRequest();
        console.log(requestUrl)

      request.open("GET", requestUrl, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          if (data.length > 0) {
            console.log(data);
            fillResults(data);
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
  var resultsPages = hsResultsPage("div.products__listing");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    var resultsPages = hsResultsPage("div.products__listing");
  });
}
