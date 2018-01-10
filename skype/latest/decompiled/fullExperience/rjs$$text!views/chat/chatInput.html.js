define("text!views/chat/chatInput.html", [], function () {
  return "<div class=\"tc\" data-bind=\"css: {showTermsOfUse: showTermsOfUse}\">\r\n    <div class=\"form-holder\" data-bind=\"css: formHolderCssClasses\">\r\n            <!-- ko if: !shouldOptimizeAvailableSpace -->\r\n            <div class='smsInfoHolder'>\r\n            <!-- ko if: canSendSms() -->                \r\n                <div class='messageDestinationHolder'>\r\n                        <swx-message-destination-picker params=\"destination:destination, conversation:conversationModel, isPstnSmsOnly:isPstnSmsOnly\"></swx-message-destination-picker>\r\n                </div>\r\n                <div class='smsPriceHolder'>\r\n                    <swx-sms-price params=\"destination:destination, conversation: conversationModel\"></swx-sms-price>\r\n                </div>\r\n            <!-- /ko -->                \r\n            </div>\r\n            <!-- /ko -->\r\n\r\n        <div class=\"upper-row-form\">\r\n            <div class=\"form\">\r\n                <form id=\"textarea-bindings\">\r\n                    <swx-textarea params=\"conversationModel: conversationModel, isEnabled: isChatAndSmsInputEnabled, isServiceEnabled: isServiceEnabled, sendMessage: sendMessage, chatInputEl: chatInputEl, hasChatCapability: hasChatCapability, destination:destination, isPstnSmsOnly:isPstnSmsOnly\"></swx-textarea>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"buttonRow\">\r\n                <!-- ko if: !isFooterMediaBarVisible() -->\r\n                <!-- ko if: isMediaBarEnabled() -->\r\n                <swx-chat-input-action-picker params=\"isDisabled: !isEnabled(), conversationModel: conversationModel,\r\n                    isCollapsible: true\"></swx-chat-input-action-picker>\r\n                <!-- /ko -->\r\n                <!-- ko if: isExpressionPickerButtonVisible() -->\r\n                    <swx-expression-picker params=\"isDisabled: !isEnabled()\" class=\"expressionPicker\"></swx-expression-picker>\r\n                <!-- /ko -->\r\n                <!-- /ko -->\r\n                <div class=\"send-button-holder\">\r\n                    <swx-button params=\"icon: 'send', cssClass: 'swx-chat-input-send-btn circle send-button large', disabled: isSendDisabled,\r\n                        titleKey: 'action_button_send', textKey: 'action_button_send', action: sendButtonClicked,\r\n                        ariaLabelKey: 'action_button_send'\"></swx-button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- ko if: isFooterMediaBarVisible() -->\r\n        <div class=\"button-row-footer\">\r\n            <!-- ko if: isExpressionPickerButtonVisible() -->\r\n            <swx-expression-picker params=\"isDisabled: !isEnabled()\" class=\"expressionPicker\"></swx-expression-picker>\r\n            <!-- /ko -->\r\n            <!-- ko if: isMediaBarEnabled() -->\r\n            <swx-chat-input-action-picker params=\"isDisabled: !isEnabled(), conversationModel: conversationModel,\r\n                isCollapsible: false\"></swx-chat-input-action-picker>\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n    <!-- ko if: showTermsOfUse -->\r\n    <div class=\"termsOfUse\">\r\n        <a class=\"termsOfUseLink fontSize-p small\" target=\"_blank\" href=\"http://giphy.com/terms\" data-bind=\"l10n: { 'key': 'expressionPicker_giphyImgTab_terms' }\"></a>\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n";
});
