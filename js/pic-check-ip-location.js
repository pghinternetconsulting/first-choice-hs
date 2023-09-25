function manageSubmitButton() {
  // disable submit button
  document.getElementsByClassName("hs-button primary large")[0].disabled = true;

  // enable if ip is from us or canada
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      if (["US", "CA"].includes(data.country_code)) {
        document.getElementsByClassName(
          "hs-button primary large"
        )[0].disabled = false;
      }
    });
}

setTimeout(manageSubmitButton, 3000);
