define("text!views/chat/header.html", [], function () {
  return "<div class=\"headerMain\" data-bind=\"css: { canJoinCall: canJoinCall }\">\r\n    <div class=\"roster\">\r\n        <div class=\"grid\" data-bind=\"css: { group: isGroupConversation, staticHeader: !canExpandProfile() }\">\r\n            <swx-avatar role=\"button\" data-bind=\"click: toggleProfile.bind(this, 'telemetryItemAvatar', null), css: { hide: profileExpanded }\" params=\"isGroupAvatar: isGroupConversation, avatar: avatar, isAgent: isAgent, status: conversation.statusClassName, isPstn: isPstn, displayName: displayName, useAbsolutePosition: true\" class=\"avatar Avatar--fogTheme\"></swx-avatar>\r\n\r\n            <swx-button data-bind=\"css: { hide: !profileExpanded()}\" params=\"ariaLabelKey: headerAriaLabel, icon: 'chevronUp', cssClass: 'primary circle', titleKey: 'header_text_close', textKey: 'header_text_close', action: toggleProfile.bind(this, 'telemetryItemChevronUp', true), tabindex:-1\" class=\"hideProfile\"></swx-button>\r\n\r\n            <span class=\"tile conversationTopic\" data-bind=\"css: conversation.statusClassName\">\r\n                <span class=\"tileText\">\r\n                    <span class=\"tileName square\">\r\n                        <h3 data-bind=\"css: { editable: topicEditable() }\">\r\n                            <span role=\"button\" class=\"iconfont button chevronUp\" data-bind=\"css: { hide: !profileExpanded() }, click: toggleProfile.bind(this, 'telemetryItemChevronUp'), enterKey: toggleProfile.bind(this, 'telemetryItemChevronUp')\"></span>\r\n                            <span class=\"hoverWrap\" data-bind=\"css: { 'Header-Title--agent': conversation.isCertifiedAgent() }\">\r\n                                <span data-swx-testId=\"conversationTopic\" data-bind=\"text: topic, click: toggleProfile.bind(this, 'telemetryItemTopic'), enterKey: toggleProfile.bind(this, 'telemetryItemChevronUp'), attr: {'aria-label': headerAriaLabel, 'aria-expanded': profileExpanded, 'tabindex': tabIndex}, hasFocus: topicHasFocus\"></span>\r\n                                <!-- ko if: conversation.isCertifiedAgent() -->\r\n                                <span class=\"iconfont avatarBotCertified\"></span>\r\n                                <!-- /ko -->\r\n                                <!-- ko if: canExpandProfile -->\r\n                                <span role=\"button\" class=\"iconfont chevronDown\" data-bind=\"css: { hide: profileExpanded }, click: toggleProfile.bind(this, 'telemetryItemChevronDown')\"></span>\r\n                                <!-- /ko -->\r\n                            </span>\r\n                            <button class=\"iconfont edit\" data-bind=\"css: { hide: !canEditTopic() }, attr: {'aria-label': editTopicTitle, 'title': editTopicTitle}, click: openTopicEditor\" type=\"button\"></button>\r\n                        </h3>\r\n                        <!-- ko if: isGroupConversation -->\r\n                        <div class=\"editTopic\" data-bind=\"css: { hide: !topicEditorExpanded(), integratedProperty : isIntegratedProperty}\">\r\n                            <input class=\"edit\" data-bind=\"textInput: editTopic, event: {keydown: onTopicEditKeyDown }, hasFocus: topicEditorExpanded(), selected: topicEditorExpanded()\" maxlength=\"200\" />\r\n                            <a href=\"#\" class=\"iconfont ok\" role=\"button\" data-bind=\"event: {click: updateTopic, keydown: onUpdateTopicKeyDown}, attr: {'aria-label': editTopicConfirmAria}\"></a>\r\n                            <a href=\"#\" class=\"iconfont cancel\" role=\"button\" data-bind=\"event: {click: closeTopicEditor, keydown: onCloseTopicEditorKeyDown}, attr: {'aria-label': editTopicCancelAria}\"></a>\r\n                        </div>\r\n                        <!-- /ko -->\r\n                    </span>\r\n                    <span class=\"tileMessage\" data-bind=\"css: { empty: !conversation.displayMessage(), presence: !profileExpanded(), circle: !profileExpanded()}\">\r\n                        <div class=\"message fixSmall\">\r\n                            <div class=\"displayMessage\">\r\n                                <span data-bind=\"html: conversation.displayMessage, attr: {title: conversation.displayMessageTitle}\" class=\"iconfont groupParticipantsLabel fontSize-p\"></span>\r\n                                <!--ko if: conversation.displayMessage() && linkShown() -->\r\n                                <span class=\"fontSize-p divider\">|</span>\r\n                                <!-- /ko -->\r\n                                <!-- ko if: linkShown -->\r\n                                <swx-conversation-share-link class=\"conversation-share-link conversation-share-link-header\" params=\"conversationModel: conversationModel, telemetryContext: telemetryContext\"></swx-conversation-share-link>\r\n                                <!-- /ko -->\r\n                            </div>\r\n                        </div>\r\n                    </span>\r\n                </span>\r\n            </span>\r\n\r\n            <!-- ko if: headerControlsEnabled() -->\r\n            <div class=\"headerControls\" data-bind=\"css: { newConversationV2: newConversationV2, hide: confirmButtonsVisible }\">\r\n                <div class=\"buttonRow\">\r\n                    <swx-joincall-button data-bind=\"css: { hide: isCallingDisabled() || isVideoCallingDisabled() }\" params=\"cssClass: 'primary circle joinCall', conversationModel: conversationModel, showIcon: true, withVideo: true\"></swx-joincall-button>\r\n                    <swx-joincall-button data-bind=\"css: { hide: isCallingDisabled }\" params=\"cssClass: 'primary circle joinCall', conversationModel: conversationModel, showIcon: true\"></swx-joincall-button>\r\n                    <swx-button data-bind=\"css: { hide: hideVideoButton}\" class=\"callButtons\" params=\"icon: 'videoOn', cssClass: 'swx-video-call-btn primary circle', disabled: callButtonViewModel.isVideoDisabled, textKey: 'button_text_videoCall', i18nTitle: callButtonViewModel.buttonVideoTitle, action: callButtonViewModel.startCallWithVideo, ariaLabel: callButtonViewModel.buttonVideoAriaLabel\"></swx-button>\r\n                    <swx-button data-bind=\"css: { hide: hideAudioButton}\" class=\"callButtons\" params=\"icon: 'callStart', cssClass: 'swx-audio-call-btn primary circle', disabled: callButtonViewModel.isAudioDisabled, textKey: 'button_text_audioCall', i18nTitle: callButtonViewModel.buttonCallTitle, action: callButtonViewModel.startCallWithAudio, ariaLabel: callButtonViewModel.buttonCallAriaLabel, hasMenuOptions: startCallButtonViewModel.hasMenuOptions, menuOptions: startCallButtonViewModel.getMenuOptions\"></swx-button>\r\n\r\n                    <!-- ko if: !showMoreActions() && !isGuestHostConversation -->\r\n                    <swx-button data-swx-testId=\"addParticipantAction\" params=\"conversation: conversationModel, icon: 'contactAdd', disabled: addParticipantsBtnDisabled, cssClass: addParticipantsBtnClasses, textKey: 'button_text_addParticipants', i18nTitle: buttonAddPeopleToConversationTitle, action: toggleEditMode, ariaLabel: buttonAddPeopleToConversationAriaLabel\"></swx-button>\r\n                    <!-- /ko -->\r\n                    <!-- ko if: showMoreActions() -->\r\n                    <swx-more-actions-button class=\"moreActions\" params=\"conversation: conversationModel, cssClass: 'secondary circle stroke', addParticipantsDisabled: addParticipantsBtnDisabled, addParticipantsAction: toggleEditMode\"></swx-more-actions-button>\r\n                    <!-- /ko -->\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n\r\n            <!-- ko if: showTranslatorSettings -->\r\n                <swx-translator-settings params=\"conversationModel: conversationModel\"></swx-translator-settings>\r\n            <!-- /ko -->\r\n            <!-- ko if: initializeParticipants -->\r\n                <swx-group-profile params=\"conversationModel: conversationModel\" data-bind=\"css: { hide: !profileExpanded() }\" class=\"themeWhite groupProfileContainer\"></swx-group-profile>\r\n            <!-- /ko -->\r\n            <!-- ko if: canShowContactProfile() && profileExpanded() -->\r\n                <swx-contact-profile params=\"conversationModel: conversationModel, conversationTile: conversation\" class=\"themeWhite groupProfileContainer\"></swx-contact-profile>\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- ko if: editModeActive -->  <!-- TODO: make sure this is not unnecessary disposed -->\r\n<div class=\"contactPickerWrapper\" css=\"modal\" >\r\n    <div class=\"headerAdd\">\r\n        <swx-contact-picker-input params=\"setParticipantProvider: setParticipantProvider\"></swx-contact-picker-input>\r\n    </div>\r\n    <swx-contact-picker params=\"conversation: conversationModel, className: 'headerPicker'\"></swx-contact-picker>\r\n\r\n    <!-- ko if: !newConversationV2 -->\r\n        <!-- ko if: spacesEnabled -->\r\n            <swx-space-settings params=\"conversationModel: conversationModel\"></swx-space-settings>\r\n        <!-- /ko -->\r\n    <!-- /ko -->\r\n\r\n    <!-- ko if: newConversationV2 -->\r\n        <div class=\"actions\">\r\n             <div class=\"submitConversation\">\r\n                <swx-button params=\"cssClass: 'secondary circle', textKey: 'button_text_cancelAddParticipants', i18nTitle: cancelAddParticipantsTitle, ariaLabelKey: cancelAddParticipantsTitle, action: undoSelectedParticipants\"></swx-button>\r\n                <swx-button params=\"cssClass: 'primary circle', textKey: 'button_text_addParticipants', i18nTitle: addParticipantsTitle, ariaLabelKey: addParticipantsTitle, action: submitSelectedParticipants\"></swx-button>\r\n            </div>\r\n            <!-- ko if: linkShown -->\r\n            <swx-conversation-share-link class=\"conversation-share-link-actions\" params=\"conversationModel: conversationModel\"></swx-conversation-share-link>\r\n            <!-- /ko -->\r\n        </div>\r\n    <!-- /ko -->\r\n</div>\r\n<!-- /ko -->\r\n\r\n<div class=\"headerControls\" data-bind=\"css: { newConversationV2: newConversationV2, hide: !confirmButtonsVisible() }\">\r\n    <!-- ko if: !newConversationV2 -->\r\n    <div class=\"buttonRow\">\r\n        <swx-button params=\"conversation: conversationModel, icon: 'tick', disabled: submitButtonDisabled, cssClass: 'secondary circle', textKey: 'button_text_addParticipants', ariaLabelKey: 'button_text_addParticipants', titleKey: 'action_button_confirm', action: submitSelectedParticipants\"></swx-button>\r\n        <swx-button params=\"conversation: conversationModel, icon: 'cross', cssClass: 'secondary circle', textKey: 'button_text_cancelAddParticipants', ariaLabelKey: 'button_text_cancelAddParticipants', titleKey: 'action_button_cancel', action: undoSelectedParticipants\"></swx-button>\r\n    </div>\r\n    <!-- /ko -->\r\n\r\n    <!-- ko if: newConversationV2 -->\r\n    <div class=\"buttonRow newConversationV2\">\r\n        <swx-button data-bind=\"css: { hide: hideVideoButton}\" class=\"callButtons\" params=\"icon: 'videoOn', cssClass: 'primary circle', disabled: 'true', textKey: 'button_text_videoCall', i18nTitle: callButtonViewModel.buttonVideoTitle\"></swx-button>\r\n        <swx-button data-bind=\"css: { hide: hideAudioButton}\" class=\"callButtons\" params=\"icon: 'callStart', cssClass: 'primary circle', disabled: 'true', textKey: 'button_text_audioCall', i18nTitle: callButtonViewModel.buttonCallTitle\"></swx-button>\r\n\r\n        <!-- ko if: !showMoreActions() -->\r\n        <swx-button data-swx-testId=\"addParticipantAction\" params=\"icon: 'contactAdd', disabled: 'true', cssClass: addParticipantsBtnClasses, textKey: 'button_text_addParticipants', i18nTitle: buttonAddPeopleToConversationTitle\"></swx-button>\r\n        <!-- /ko -->\r\n        <!-- ko if: showMoreActions() -->\r\n        <swx-more-actions-button class=\"moreActions\" params=\"icon: 'more', disabled: 'true', cssClass: 'secondary circle stroke', textKey: 'button_text_moreActions'\"></swx-more-actions-button>\r\n        <!-- /ko -->\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n";
});
