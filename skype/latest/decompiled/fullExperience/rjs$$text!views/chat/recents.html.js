define("text!views/chat/recents.html", [], function () {
  return "<div data-bind=\"css:{ hide:hasCurrentCall()==false }\">\r\n    <div class=\"current\">\r\n        <div class=\"separator\">\r\n            <p class=\"strong\" data-bind=\"l10n: { key: 'label_text_currentCallHeading'}\"></p>\r\n        </div>\r\n    </div>\r\n    <!-- ko foreach: currentCalls -->\r\n    <div class=\"current\">\r\n        <swx-current-call params=\"model: $data\"></swx-current-call>\r\n    </div>\r\n    <!--/ko -->\r\n</div>\r\n\r\n<div class=\"scrollingWrapper\" data-bind=\"keyboardNavigation: { itemSelector: 'a' }\">\r\n    <div class=\"history scrollable scrollViewport scrollViewportV fixSmall\" data-bind=\"event: { scroll: onScroll }\" tabindex=\"-1\">\r\n\r\n        <div class=\"recents scrollViewport-inner\" role=\"list\" data-bind=\"template: { name: 'recent-template', foreach: recentConversations, as: 'recent' }\"></div>\r\n\r\n        <!-- ko if: recentConversations().length == 0 -->\r\n        <div role=\"listitem\" class=\"RecentsMessage\">\r\n            <p class=\"RecentsMessage-emptyConversation\" data-bind=\"l10n: { key:  'label_text_conversationsLoadNone'}\"></p>\r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n</div>\r\n\r\n<!-- ko if: hasNotificationsToggle || hasBetaLabel || hasFeedbackIcon -->\r\n<div class=\"recents-badge\">\r\n    <!-- ko if: hasNotificationsToggle -->\r\n    <swx-notifications-toggle-button params=\"isDisabled: buttonsDisabled\" data-bind=\" event: { mouseover: stopSidebarExpanding }\"></swx-notifications-toggle-button>\r\n    <!-- /ko -->\r\n\r\n    <!-- ko if: hasFeedbackIcon -->\r\n    <a data-bind=\"attr: { title: feedbackLabelTitle(), href: feedbackPageUrl(), target: feedbackPageTarget()}, event: { mouseover: stopSidebarExpanding }\">\r\n        <p>\r\n            <img data-bind=\"attr: {src: feedbackIconURL, alt: feedbackLabelTitle()}\" />\r\n        </p>\r\n    </a>\r\n    <!-- /ko -->\r\n\r\n    <!-- ko if: hasBetaLabel -->\r\n    <!-- ko if: hasFeedbackLink -->\r\n    <a data-bind=\"attr: { title: feedbackLabelTitle(), href: feedbackPageUrl(), target: feedbackPageTarget()}, event: { mouseover: stopSidebarExpanding }\">\r\n        <p class=\"smaller badge\">\u2665 BETA</p>\r\n    </a>\r\n    <!-- /ko -->\r\n\r\n    <!-- ko ifnot: hasFeedbackLink -->\r\n    <p class=\"smaller badge\">\u2665 BETA</p>\r\n    <!-- /ko -->\r\n    <!-- /ko -->\r\n</div>\r\n<!-- /ko -->\r\n\r\n<script type=\"text/html\" id=\"recent-template\">\r\n    <!-- ko if: $parent.showSeparatorIcon($index()) -->\r\n    <div class=\"splitter\">\r\n        <span class=\"icon iconfont favourite\" data-bind=\"css:$parent.separatorIconClass($index())\"></span>\r\n    </div>\r\n    <!-- /ko -->\r\n\r\n    <!-- ko if: $parent.showSeparator($index())-->\r\n    <div role=\"heading\" class=\"separator\">\r\n        <p data-bind=\"text: recent.separator()\" class=\"strong\"></p>\r\n    </div>\r\n    <!-- /ko -->\r\n\r\n    <swx-recent-item role=\"listitem\" params=\"model: recent\" class=\"list-selectable\"></swx-recent-item>\r\n</script>\r\n";
});
