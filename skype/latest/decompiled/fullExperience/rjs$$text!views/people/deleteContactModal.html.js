define("text!views/people/deleteContactModal.html", [], function () {
  return "<div id=\"swx-overlayDeleteContact\" class=\"swx-overlayModal swx-hide\" tabindex=\"-1\">\r\n\r\n    <div class=\"overlayMain\">\r\n        <div class=\"title\">\r\n            <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'modal_deleteContact_text_title', params: { displayName: displayName } }\"></h1>\r\n        </div>\r\n\r\n        <swx-avatar params=\"avatar: avatar, isAgent: isAgent, displayName: displayName, isPstn: isPstn, size: 160\" class=\"avatar\"></swx-avatar>\r\n\r\n        <p data-bind=\"l10n: { 'key': 'modal_deleteContact_text_message', params: { displayName: displayName } }\" data-swx-testId=\"modalDeleteContactText\"></p>\r\n\r\n        <div class=\"dual buttonRow\">\r\n            <div class=\"column alignRight\">\r\n                <button type=\"button\" class=\"btn primary\" data-swx-testId=\"modalDeleteContact\" data-bind=\"click: deleteContact, disable: actionsInProgress, css: { 'in-progress': actionsInProgress }, focusHandler: { priority: 1 }\"><span data-bind=\"l10n: { key: 'action_button_delete' }\"></span></button>\r\n            </div>\r\n            <div class=\"column alignLeft\">\r\n                <button type=\"button\" class=\"btn secondary cancel\" data-bind=\"click: cancel, disable: actionsInProgress, css: { 'in-progress': actionsInProgress }\"><span data-bind=\"l10n: { key: 'action_button_cancel' }\" class=\"clickable\"></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n";
});
