define("text!views/chat/chatInput.html", [], function () {
  return "<div class=\"tc\">\r\n    <div class=\"form-holder\" data-bind=\"css: attribution\">\r\n\r\n        <div class=\"form\">\r\n            <form id=\"textarea-bindings\">\r\n                <swx-textarea params=\"conversationModel: conversationModel, isEnabled: isEnabled, isServiceEnabled: isServiceEnabled, sendMessage: sendMessage, chatInputEl: chatInputEl, hasChatCapability: hasChatCapability\"></swx-textarea>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"buttonRow\">\r\n            <!-- ko if: isMediaBarEnabled() -->\r\n            <swx-chat-input-action-picker params=\"isDisabled: !isEnabled(), conversationModel: conversationModel\"></swx-chat-input-action-picker>\r\n            <!-- /ko -->\r\n            <!-- ko if: isExpressionPickerButtonVisible() -->\r\n                <swx-expression-picker params=\"isDisabled: !isEnabled()\" class=\"expressionPicker\"></swx-expression-picker>\r\n            <!-- /ko -->\r\n            <div class=\"send-button-holder\">\r\n                <swx-button params=\"icon: 'send', cssClass: 'circle send-button large', disabled: isSendDisabled,\r\n                    titleKey: 'action_button_send', textKey: 'action_button_send', action: sendButtonClicked,\r\n                    ariaLabelKey: 'action_button_send'\"></swx-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
});
