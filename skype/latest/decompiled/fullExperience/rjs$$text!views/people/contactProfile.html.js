define("text!views/people/contactProfile.html", [], function () {
  return "<div class=\"ContactProfile fixSmall\">\r\n    <div class=\"ContactProfile--avatar\">\r\n        <swx-avatar params=\"avatar: avatar, isAgent: contact.isAgent, isPstn: contact.isPstn, size: 220, displayName: contact.displayNameUnescaped\"></swx-avatar>\r\n    </div>\r\n\r\n    <div class=\"ContactProfile--main\">\r\n        <!-- ko if: enableContactsManagement() -->\r\n        <div class=\"ContactProfile--actions\" data-bind=\"css: { 'ContactProfile--actions-agent': hasAgentPrivacyLinks }\">\r\n            <!-- ko if: !isInContacts() -->\r\n            <div class=\"ContactProfile--action-item fontSize-p\">\r\n                <span data-bind=\"css: { 'in-progress': actionsInProgress }\">\r\n                    <a href=\"#\" role=\"button\" data-bind=\"l10n: {key: 'contact_information_add_to_contacts'}, click: addContact, css: { 'in-progress': actionsInProgress }\"></a>\r\n                </span>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: isInContacts() && !isOrganizationContact -->\r\n            <div class=\"ContactProfile--action-item fontSize-p\">\r\n                <span data-bind=\"css: { 'in-progress': actionsInProgress }\">\r\n                    <a href=\"#\" role=\"button\" data-bind=\"text: deleteContactText, click: deleteContact, css: { 'in-progress': actionsInProgress }\"></a>\r\n                </span>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: isInContacts() && favoritesFeatureEnabled -->\r\n            <div class=\"ContactProfile--action-item fontSize-p\">\r\n                <span data-bind=\"css: { 'in-progress': actionsInProgress }\">\r\n                    <a href=\"#\" role=\"button\" data-bind=\"text: favoriteContactText, click: toggleFavoriteContact, css: { 'in-progress': actionsInProgress }\"></a>\r\n                </span>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: canBlockContact -->\r\n            <div class=\"ContactProfile--action-item fontSize-p\">\r\n                <span data-bind=\"css: { 'in-progress': actionsInProgress }\">\r\n                    <a href=\"#\" role=\"button\" data-bind=\"click: toggleContactBlocked, text: blockContactText, css: { 'in-progress': actionsInProgress }\"></a>\r\n                </span>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: hasAgentPrivacyLinks -->\r\n                <div class=\"ContactProfile--action-item-privacy\">\r\n                    <!-- ko if: hasAgentTermsOfService -->\r\n                    <div class=\"ContactProfile--action-item fontSize-p\">\r\n                        <a href=\"#\" target=\"_blank\" role=\"button\" data-bind=\"l10n: {key: 'label_text_agent_profile_link_text_terms_of_service'}, attr: { href: contact.agentDetails().termsOfService }\"></a>\r\n                    </div>\r\n                    <!-- /ko -->\r\n                    <!-- ko if: hasAgentPrivacyStatement -->\r\n                    <div class=\"ContactProfile--action-item fontSize-p\">\r\n                        <a href=\"#\" target=\"_blank\" role=\"button\" data-bind=\"l10n: {key: 'label_text_agent_profile_link_text_privacy_statement'}, attr: { href: contact.agentDetails().privacyStatement }\"></a>\r\n                    </div>\r\n                    <!-- /ko -->\r\n                </div>\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- /ko -->\r\n\r\n        <div class=\"ContactProfile--data scrollingContainer\">\r\n            <div class=\"scrollViewport scrollViewportV\" data-bind=\"event: { scroll: onScroll }\" tabindex=\"-1\">\r\n\r\n                <!-- ko if: !contact.isAgent() -->\r\n                <div class=\"ContactProfile--data-section ContactProfile--details fontSize-p\">\r\n                    <h2 data-bind=\"l10n: {key: 'label_text_contact_profile_details'}\"></h2>\r\n                    <ul>\r\n                        <!-- ko if: !contact.isPstn() -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_contact_profile_skype_name'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-contact-id\" data-bind=\"text: contact.id\"></span>\r\n                        </li>\r\n                        <!-- /ko -->\r\n\r\n                        <!-- ko foreach: contact.phoneNumbers -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <swx-contact-profile-phone-number params=\"phoneNumber: $data\"></swx-contact-profile-phone-number>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                    </ul>\r\n                </div>\r\n                <!-- /ko -->\r\n\r\n                <!-- ko if: !contact.isAgent() && hasContactInfo() -->\r\n                <div class=\"ContactProfile--data-section ContactProfile--info fontSize-p\">\r\n                    <h2 data-bind=\"l10n: {key: 'label_text_contact_profile_information'}\"></h2>\r\n                    <ul>\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_contact_profile_location'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-contact-location\" data-bind=\"text: contact.locationText\"></span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- /ko -->\r\n\r\n                <!-- ko if: contact.isAgent() -->\r\n                <div class=\"ContactProfile--data-section ContactProfile--agent-details fontSize-p\" data-bind=\"css: {hide: !hasAgentDetailsToShow()}\">\r\n                    <ul>\r\n                        <!-- ko if: hasAgentAuthor -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_author'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-agent-author\" data-bind=\"html: contact.agentDetails().author\"></span>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                        <!-- ko if: hasAgentDescription -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_description'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-agent-description\" data-bind=\"html: contact.agentDetails().descriptionWithLinks\"></span>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                        <!-- ko if: showAgentId -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_agentid'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-agent-id\" data-bind=\"text: contact.id\"></span>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                        <!-- ko if: hasAgentRating -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_rating'}\"></span>\r\n                            <span class=\"ContactProfile--agent-rating-value\">\r\n                                <!-- ko foreach: { data: contact.agentDetails().ratingStars, as: 'star' } -->\r\n                                <!-- ko if: star === 1 -->\r\n                                <span class=\"ContactProfile--agent-rating-star ContactProfile--agent-rating-star-full iconfont favourite\"></span>\r\n                                <!-- /ko -->\r\n                                <!-- ko if: star !== 1 -->\r\n                                <span class=\"ContactProfile--agent-rating-star ContactProfile--agent-rating-star-half iconfont favourite\"></span>\r\n                                <!-- /ko -->\r\n                                <!-- /ko -->\r\n                                <span class=\"ContactProfile--agent-rating-number\" data-swx-testId=\"contact-profile-agent-rating\">\r\n                                    (<span data-swx-testId=\"contact-profile-agent-rating\" data-bind=\"text: contact.agentDetails().rating\"></span>)\r\n                                </span>\r\n                            </span>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                        <!-- ko if: hasAgentWebsite -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_website'}\"></span>\r\n                            <a data-swx-testId=\"contact-profile-agent-website\" data-bind=\"attr: { href: contact.agentDetails().website }, text: contact.agentDetails().website\" target=\"_blank\"></a>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                    </ul>\r\n                </div>\r\n                <div class=\"ContactProfile--data-section ContactProfile--agent-details fontSize-p\">\r\n                    <ul>\r\n                        <!-- ko if: hasAgentCapabilitiesText -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_capabilities'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-agent-capabilities\" data-bind=\"html: contact.agentDetails().capabilitiesText\"></span>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                        <!-- ko if: hasAgentExtraInfo -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_extra_info'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-agent-extraInfo\" data-bind=\"text: contact.agentDetails().extraInfoWithLinks\"></span>\r\n                        </li>\r\n                        <!-- /ko -->\r\n                        <li class=\"ContactProfile--data-item\">\r\n                            <span class=\"fontSize-h2\" data-bind=\"l10n: {key: 'label_text_agent_profile_label_privacy'}\"></span>\r\n                            <span data-swx-testId=\"contact-profile-agent-privacy\" data-bind=\"l10n: {key: 'label_text_agent_profile_value_privacy'}\"></span>\r\n                            <!-- ko if: hasAgentCapabilityAutoPlay -->\r\n                            <span data-swx-testId=\"contact-profile-agent-privacy_autoplay\" data-bind=\"l10n: {key: 'label_text_agent_profile_value_privacy_autoplay'}\"></span>\r\n                            <!-- /ko -->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- /ko -->\r\n            </div>\r\n        </div>\r\n\r\n        <swx-mute-conversation-setting-item params=\"conversationModel: model, contactProfile: true\"></swx-mute-conversation-setting-item>\r\n    </div>\r\n\r\n</div>\r\n";
});
