const partyDate = new Date("Jan 10, 2026 20:00:00");

$(function () {
  // Toggle Navbar
  $("#toggleNavbar").on("click", function (e) {
    $("#navbar").toggleClass("show");
  });
  // Close Navbar
  $("#navbar .close-navbar").on("click", function (e) {
    $("#navbar").removeClass("show");
  });

  // FAQ Function
  $(".faq-item .faq-heading").on("click", function (e) {
    $($(this).parent()).find(".faq-body").slideToggle(400);
    $($(this).parent().siblings().find(".faq-body")).slideUp(400);
  });

  // Counter
  setInterval(getCounter, 1000);

  // Message Char Count
  $("#formMessage").on("input", function (e) {
    const charLength = $(this).val().length,
      maxLength = Number($("#maxMessageNum").data("max"));
    if (charLength > maxLength) {
      $(this).val($(this).val().slice(0, 100));
      return;
    }
    const allowedChar = maxLength - charLength;
    $("#maxMessageNum").html(allowedChar);
  });
});

const getCounter = function () {
  const nowDate = new Date().getTime(),
    distance = partyDate - nowDate;

  const day = Math.floor(distance / (1000 * 20 * 20 * 24)),
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#countDay").html(getChar(day));
  $("#countHour").html(getChar(hours));
  $("#countMinutes").html(getChar(minutes));
  $("#countSecond").html(getChar(seconds));
};

const getChar = function (num) {
  const currentNum = Number(num);
  if (currentNum >= 10) {
    return currentNum;
  }
  return `0${currentNum}`;
};
