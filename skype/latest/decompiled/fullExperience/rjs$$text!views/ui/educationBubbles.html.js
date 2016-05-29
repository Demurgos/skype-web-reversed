define("text!views/ui/educationBubbles.html", [], function () {
  return "<div class=\"EducationBubble swx\" data-bind=\"css: { 'EducationBubble--hidden': hidden, 'EducationBubble--orientTop': orientation() === 'TOP', 'EducationBubble--orientLeft': orientation() === 'LEFT', 'EducationBubble--orientRight': orientation() === 'RIGHT' }, attr: { 'data-swx-testId': 'education-bubble-' + id }\">\r\n    <div class=\"EducationBubble-arrow\" data-bind=\"style: { top: arrowTop, bottom: arrowBottom, left: arrowLeft, right: arrowRight }\"></div>\r\n    <div class=\"EducationBubble-content\" data-bind=\"style: { top: top, bottom: bottom, left: left, right: right, backgroundImage: 'url(' + iconUrl + ')' }\">\r\n        <p class=\"EducationBubble-text js-EducationBubble-text\" tabindex=\"-1\" data-bind=\"text: text\" role=\"alert\"></p>\r\n    </div>\r\n</div>\r\n";
});
