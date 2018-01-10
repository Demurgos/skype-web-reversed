define("text!views/calling/unansweredCall.html", [], function () {
  return "<div class=\"UnansweredCall\" role=\"dialog\" data-bind=\"attr: {'aria-label': titleDescription}\" tabindex=\"-1\">\r\n\r\n    <div class=\"UnansweredCall-topContainer\">\r\n        <div class=\"UnansweredCall-titleBar\">\r\n            <span class=\"UnansweredCall-topic\" data-bind=\"text: topic\"></span>\r\n            <swx-button class=\"UnansweredCall-titleBarButton UnansweredCall-goToChatButton\"\r\n                        params=\"icon: 'message',\r\n                                cssClass: 'circle',\r\n                                action: goToChat,\r\n                                titleKey: 'unanswered_call_button_showchat', textKey: 'unanswered_call_button_showchat',\r\n                                ariaLabelKey: 'unanswered_call_accessibility_button_showchat'\">\r\n            </swx-button>\r\n        </div>\r\n\r\n        <swx-button class=\"UnansweredCall-closeButton\"\r\n                    params=\"icon: 'cross',\r\n                            cssClass: 'circle',\r\n                            action: cancel,\r\n                            titleKey: 'unanswered_call_button_close', textKey: 'unanswered_call_button_close',\r\n                            ariaLabelKey: 'unanswered_call_accessibility_button_close'\">\r\n        </swx-button>\r\n    </div>\r\n\r\n    <div class=\"UnansweredCall-middleContainer\">\r\n        <div class=\"UnansweredCall-avatarReasonContainer\">\r\n        \t<swx-avatar class=\"UnansweredCall-avatar\" params=\"avatar: avatar, isGroupAvatar: isGroupConversation, displayName: topic, isPstn: false, size: 195\"></swx-avatar>\r\n\r\n        \t<p class=\"UnansweredCall-reason fontSize-h2\" data-bind=\"text: title\"></p>\r\n        </div>\r\n\r\n    \t<div class=\"UnansweredCall-buttons\">\r\n    \t\t<div class=\"UnansweredCall-buttonContainer\">\r\n    \t\t    <swx-button class=\"UnansweredCall-button UnansweredCall-chatButton\"\r\n                            data-bind=\"css: { 'UnansweredCall-greenButton': isButtonGreen['chatButton'],\r\n                                              'UnansweredCall-nonGreenButton': !isButtonGreen['chatButton'] }\"\r\n    \t\t    \t\t\tparams=\"icon: 'message',\r\n    \t\t    \t\t\t\t\tcssClass: isButtonGreen['chatButton'] ? 'circle' : 'secondary circle stroke',\r\n    \t\t    \t\t\t\t\taction: sendMessage,\r\n    \t\t    \t\t\t\t\ttitleKey: 'unanswered_call_button_chat', textKey: 'unanswered_call_button_chat',\r\n    \t\t                        ariaLabelKey: 'unanswered_call_accessibility_button_chat'\">\r\n    \t\t\t</swx-button>\r\n    \t\t\t<p class=\"UnansweredCall-buttonLabel\" data-bind=\"l10n: {'key': 'unanswered_call_button_chat'}\"></p>\r\n    \t\t</div>\r\n\r\n    \t\t<div class=\"UnansweredCall-buttonContainer\">\r\n    \t\t    <swx-button class=\"UnansweredCall-button UnansweredCall-retryButton\"\r\n                            data-bind=\"css: { 'UnansweredCall-greenButton': isButtonGreen['retryButton'],\r\n                                              'UnansweredCall-nonGreenButton': !isButtonGreen['retryButton'] }\"\r\n    \t\t    \t\t\tparams=\"icon: 'reload',\r\n    \t\t    \t\t\t\t\tcssClass: isButtonGreen['retryButton'] ? 'circle' : 'secondary circle stroke',\r\n    \t\t    \t\t\t\t\taction: retryCall,\r\n    \t\t    \t\t\t\t\ttitleKey: 'unanswered_call_button_retry', textKey: 'unanswered_call_button_retry',\r\n    \t\t                        ariaLabelKey: 'unanswered_call_accessibility_button_retry'\">\r\n    \t\t\t</swx-button>\r\n    \t\t\t<p class=\"UnansweredCall-buttonLabel\" data-bind=\"l10n: {'key': 'unanswered_call_button_retry'}\"></p>\r\n    \t\t</div>\r\n    \t</div>\r\n    </div>\r\n\r\n</div>\r\n";
});
