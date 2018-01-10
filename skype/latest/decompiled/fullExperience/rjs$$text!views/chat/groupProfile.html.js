define("text!views/chat/groupProfile.html", [], function () {
  return "<div class=\"groupProfile fixSmall\">\r\n    <div class=\"groupAvatarContainer\">\r\n        <swx-avatar params=\"isGroupAvatar: true, size: 220, avatar: avatar\"></swx-avatar>\r\n        <!-- ko if: avatarUpdateEnabled -->\r\n        <swx-avatar-file-picker class=\"Group-avatarFilePicker\" params=\"conversationModel: model\"></swx-avatar-file-picker>\r\n        <!-- /ko -->\r\n    </div>\r\n    <div class=\"settings\" data-bind='css: { lessParticipants: lessParticipants }'>\r\n        <!-- ko if: showSettings -->\r\n        <h4 data-bind=\"text: groupProfileHeading\" class=\"fontSize-p\">Manage group</h4>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: canLeaveConversation -->\r\n        <div class=\"settingItem fontSize-p\">\r\n            <span>\r\n                <a href=\"#\" role=\"button\" data-bind=\"click: leaveConversation, l10n: {key: 'recentItemMenuItem_text_leave'}\"></a>\r\n            </span>\r\n        </div>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: canRemoveConversation -->\r\n        <div class=\"settingItem fontSize-p\">\r\n            <span>\r\n                <a href=\"#\" role=\"button\" data-bind=\"click: removeConversation, l10n: {key: removeConversationText()}\"></a>\r\n            </span>\r\n        </div>\r\n        <!-- /ko -->\r\n\r\n        <swx-mute-conversation-setting-item params=\"conversationModel: model\"></swx-mute-conversation-setting-item>\r\n\r\n        <!-- ko if: historyDisclosedVisible() && isAdmin() -->\r\n        <div class=\"settingItem\">\r\n            <span id=\"makeHistoryAvailable\" class=\"fontSize-h4\" data-bind=\"l10n: {key: 'header_text_makeHistoryAvailable'}\"></span>\r\n            <button role=\"checkbox\" aria-labelledby=\"makeHistoryAvailable\" class=\"toggler\" data-bind=\"event: { keydown: onHistoryDisclosedKeydown }, click: historyDisclosedHandler, css: { checked: historyDisclosed }, attr: { 'aria-checked': historyDisclosed() ? 'true' : 'false', 'aria-label': historyToggleAriaLabel }\" type=\"button\"><span class=\"on\"></span><span class=\"off\"></span></button>\r\n        </div>\r\n        <!-- /ko -->\r\n        <!-- ko if: joiningEnabledVisible -->\r\n        <div class=\"settingItem\">\r\n            <span id=\"joinViaLink\" class=\"fontSize-h4\" data-bind=\"l10n: {key: 'header_text_joinViaLink'}\"></span>\r\n            <button role=\"checkbox\" aria-labelledby=\"joinViaLink\" class=\"toggler\" data-bind=\"event: { keydown: onJoiningEnabledKeydown }, click: joiningEnabledHandler, css: { checked: joiningEnabled }, attr: { 'aria-checked': joiningEnabled() ? 'true' : 'false', 'aria-label': joiningToggleAriaLabel }\" type=\"button\"><span class=\"on\"></span><span class=\"off\"></span></button>\r\n        </div>\r\n        <!-- /ko -->\r\n        <!-- ko if: spaceLinkVisible -->\r\n        <div class=\"space settingItem\">\r\n            <swx-invite-link class=\"invite-link\" params=\"topic: model.topic, uri: model.uri\">\r\n            </swx-invite-link>\r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n\r\n    <!-- ko if: participantCount -->\r\n    <div class=\"scrollingContainer participants\" style=\"width:auto; overflow: hidden !important;\" data-bind=\"keyboardNavigation: { itemSelector: 'a' }\">\r\n        <div role=\"list\" id=\"groupParticipantsList\" class=\"scrollViewport scrollViewportV\" style=\"position: relative !important; max-height: 11em;\" data-bind=\"event: { scroll: onScroll }, css: { lessParticipants: lessParticipants }, foreach: participants\" tabindex=\"-1\">\r\n            <swx-contact-card params=\"participant: $data, model: $parent.model\" class=\"participant\"></swx-contact-card>\r\n        </div>\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n";
});
