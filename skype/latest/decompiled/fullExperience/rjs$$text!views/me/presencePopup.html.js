define("text!views/me/presencePopup.html", [], function () {
  return "<div class=\"PresencePopup popup arrow up\" data-bind= \"visible: isOpened, clickBubble: false\">\r\n    <ul class=\"PresencePopup-statusContainer\" data-bind=\"foreach: presenceStatuses, keyboardNavigation: { itemSelector: 'li:not(.PresencePopup-status--selected)' }\">\r\n        <li data-bind=\"css: $parent.getPresenceStatusCssClasses($index()), click: $parent.updateStatus.bind(null, $index()), enterKey: $parent.updateStatus.bind(null, $index()), l10n: { key: l10nKey }, clickBubble: false\">\r\n        </li>\r\n    </ul>\r\n</div>\r\n";
});
