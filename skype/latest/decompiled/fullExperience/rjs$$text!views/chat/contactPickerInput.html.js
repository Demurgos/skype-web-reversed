define("text!views/chat/contactPickerInput.html", [], function () {
  return "<div class=\"contactPickerInput scrollinWrapper\">\r\n    <div class=\"scrollViewport scrollViewportV\" tabindex=\"-1\">\r\n        <div class=\"contacts\">\r\n            <!-- ko foreach: selectedContacts -->\r\n            <swx-contact-pill params=\"person: $data\" class=\"contact-pill\"></swx-contact-pill>\r\n            <!-- /ko -->\r\n\r\n            <input type=\"text\" class=\"fontSize-p\" data-bind=\"attr: { placeholder: placeholder }, textInput: inputValue, valueUpdate: 'afterkeydown', event: { keydown: handleKeyDown },\r\n            l10n_attr: {'placeholder': 'input_placeholder_typeContactName'} \">\r\n        </div>\r\n    </div>\r\n    <!-- ko if: showMoreResultsAvailableMessage() -->\r\n    <div class=\"moreSearchResults\">\r\n        <p class=\"strong\" data-bind=\"l10n: {key: 'message_more_search_results_available'}\"></p>\r\n    </div>\r\n    <!-- /ko-->\r\n</div>\r\n";
});
