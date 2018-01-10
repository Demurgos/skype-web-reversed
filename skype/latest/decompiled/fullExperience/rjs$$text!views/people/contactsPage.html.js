define("text!views/people/contactsPage.html", [], function () {
  return "<div data-swx-testId=\"contactsPage\" class=\"ContactsPage themeWhite\" tabindex=\"-1\" data-bind=\"l10n_attr: {'aria-label': 'contactPage_text_header'}\">\r\n    <div class=\"ContactsPage-header\">\r\n        <h1 class=\"ContactsPage-heading\" data-bind=\"l10n: { key: 'contactPage_text_header' }\"></h1>\r\n\r\n        <!-- ko if: showHint() -->\r\n        <p class=\"ContactsPage-hint\" data-bind=\"l10n: { key: 'contactPage_text_hint_search' }\"></p>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: contactsCount() > 0 -->\r\n        <ul role=\"tablist\" class=\"ContactsPage-categories\" data-bind=\"foreach: menuItems\">\r\n            <li role=\"tab\" class=\"ContactsPage-categoryItem\" data-bind=\"attr: { 'aria-selected': !!$data.selected() }\">\r\n                <swx-contact-list-menu-item params=\"viewModel: $data\"></swx-contact-list-menu-item>\r\n            </li>\r\n        </ul>\r\n        <!-- /ko -->\r\n    </div>\r\n    <div data-swx-testId=\"contactsPageBody\" class=\"scrollinWrapper ContactsPage-body\">\r\n        <div class=\"scrollViewport scrollViewportV\" tabindex=\"-1\">\r\n            <div class=\"scrollingPane themeWhite peoplePicker all\">\r\n                <!-- ko template: { name: templateName } --><!-- /ko -->\r\n\r\n                <!-- ko if: !contactsCount() -->\r\n                    <div class=\"ContactsPage-cta\">\r\n                        <div class=\"ContactsPage-ctaContent\">\r\n                            <!-- ko if: isShortCircuitEnabled() -->\r\n                            <div class=\"ContactsPage-Image-addFriends\"></div>\r\n                            <p class=\"ContactsPage-ctaText ContactsPage-ctaText--addFriends fontSize-h2\" data-bind=\"l10n: {key: 'short_circuit_contacts_page_message_v2'}\"></p>\r\n                            <button type=\"button\" class=\"ContactsPage-ctaButton btn primary cancel\" data-bind=\"click: launchShortCircuit, l10n_attr: {'aria-label': 'short_circuit_contacts_page_message_v2'}\">\r\n                                <span class=\"clickable\" data-bind=\"l10n: {key: 'short_circuit_contacts_page_cta'}\"></span>\r\n                            </button>\r\n                            <!-- /ko -->\r\n\r\n                            <!-- ko if: showFirstRunPage() -->\r\n                            <h1 class=\"ContactsPage-ctaHeading ContactsPage-ctaHeading--findFriends fontSize-h0\" data-bind=\"l10n: {key: 'search_skype_for_friends_and_family_header'}\"></h1>\r\n                            <div class=\"ContactsPage-Image-findFriends\"></div>\r\n                            <h3 class=\"ContactsPage-ctaText fontSize-h3 ContactsPage-ctaText--findFriends\" data-bind=\"l10n: {key: 'search_skype_for_friends_and_family_message'}\"></h3>\r\n                            <input type=\"text\" role=\"search\" class=\"inputField ContactsPage-FirstRunInput fontSize-h4\" data-bind=\"event: { mousedown: onMouseDown, keydown: onKeyDown }, l10n_attr: {'placeholder': 'search_skype_for_friends_and_family_searchDirectory', 'aria-label': 'input_placeholder_searchSkype'}\" />\r\n                            <p class=\"ContactsPage-ctaText smaller ContactsPage-ctaText--findFriends\" data-bind=\"l10n: {key: 'search_skype_for_friends_and_family_tip'}\"></p>\r\n                            <!-- /ko -->\r\n\r\n                            <!-- ko if: showNewBeePage() -->\r\n                            <div class=\"ContactsPage-ctaCover\"></div>\r\n                            <h1 class=\"ContactsPage-ctaHeading fontSize-h0\" data-swx-testId=\"contactsPageCtaHeading\" data-bind=\"l10n: {key: 'newbee_text_header'}\"></h1>\r\n                            <p class=\"ContactsPage-ctaText fontSize-h2\" data-bind=\"businessAwareL10n: {key: 'newbee_text_cta'}\"></p>\r\n                            <!-- /ko -->\r\n                        </div>\r\n                    </div>\r\n                <!-- /ko -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- ko if: showOneAccount -->\r\n    <p class=\"ContactsPage-oneAccount\" data-bind=\"html: oneAccountHtml\"></p>\r\n    <!-- /ko -->\r\n\r\n    <!-- ko if: showInformationalMessage -->\r\n    <div class=\"InformationalMessage\">\r\n        <a href=\"#\" role=\"button\" data-bind=\"click: openInformationalMessageLink, l10n: {key: contactsPageInformationalMessage.key}\"></a>\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n\r\n<script type=\"text/html\" id=\"contactList-default\">\r\n    <ul class=\"grid verticalGutter fixSmall\" data-bind=\"foreach: { data: contactGroups, afterRender: afterRender() }, keyboardNavigation: { itemSelector: 'li.contactTile:not(.swx-hide)', persistSelection: false }\">\r\n        <div class=\"row separator\" data-bind=\"css: { 'swx-hide': $data.isHidden }\">\r\n            <p role=\"presentation\" aria-hidden=\"true\" class=\"strong\" data-bind=\"text: $data.name, css: { 'swx-hide': $data.isHidden }\"></p>\r\n            <div class=\"row people\">\r\n                <!-- ko foreach: { data: contacts } -->\r\n                <li class=\"column contactTile searchItem Avatar-whiteThemeHover\" data-bind=\"css: { 'swx-hide': $data.isHidden, active: $data.isActive },  enterKey: $parentContext.$parent.openConversation,\r\n                event: { click: $parentContext.$parent.openConversation, contextmenu: $parentContext.$parent.showContextMenu }, attr: { 'aria-label': $data.ariaLabel, title: $data.displayName }\" tabindex=\"0\">\r\n                        <swx-avatar params=\"status: $data.statusClassName, avatar: $data.avatar, isAgent: $data.isAgent, isPstn: $data.isPstn, displayName: $data.displayNameUnescaped\"></swx-avatar>\r\n                        <span class=\"text\">\r\n                            <span class=\"tile\">\r\n                                <span class=\"tileName\">\r\n                                    <h4>\r\n                                        <span class=\"topic\" data-bind=\"text: $data.displayNameUnescaped, attr: {title: $data.displayName}\"></span>\r\n                                        <!-- ko if: $data.agentDetails() && $data.agentDetails().certification() -->\r\n                                        <span class=\"iconfont avatarBotCertified\"></span>\r\n                                        <!-- /ko -->\r\n                                    </h4>\r\n                                </span>\r\n                            </span>\r\n                            <!-- ko if: $data.displayMessage -->\r\n                            <span class=\"message tile\">\r\n                                <p data-bind=\"html: $data.displayMessage\" data-swx-testId=\"displayMessage\" class=\"small\"></p>\r\n                            </span>\r\n                            <!-- /ko -->\r\n                        </span>\r\n                </li>\r\n                <!-- /ko -->\r\n            </div>\r\n        </div>\r\n    </ul>\r\n</script>\r\n\r\n<script type=\"text/html\" id=\"contactList-selectable\">\r\n    <ol role=\"list\" class=\"grid verticalGutter fixSmall\" data-bind=\"foreach: { data: contactGroups }\">\r\n        <li class=\"row separator\" data-bind=\"css: { 'swx-hide': $data.isHidden }\">\r\n            <p role=\"presentation\" aria-hidden=\"true\" class=\"strong\" data-bind=\"text: $data.name\"></p>\r\n            <div class=\"row people\">\r\n                <ul data-bind=\"foreach: { data: $data.contacts }\">\r\n                    <li class=\"column contactTile\">\r\n                        <div data-bind=\"css: { 'swx-hide': $data.isHidden, active: $data.isActive }\">\r\n                            <label>\r\n                                <input type=\"checkbox\" name=\"sampleOne\">\r\n                                <span class=\"icon\">\r\n                                    <span class=\"iconfont tick\"></span>\r\n                                </span>\r\n                                <swx-avatar params=\"status: $data.statusClassName, avatar: $data.avatar, isAgent: $data.isAgent, displayName: $data.displayNameUnescaped\"></swx-avatar>\r\n                                <span class=\"text\">\r\n                                    <span class=\"tileName\">\r\n                                        <h4 data-bind=\"text: $data.displayNameUnescaped\"></h4>\r\n                                    </span>\r\n                                    <!-- ko if: $data.displayMessage -->\r\n                                    <span class=\"message tile\">\r\n                                        <p data-bind=\"html: $data.displayMessage\" data-swx-testId=\"displayMessage\" class=\"small\"></p>\r\n                                    </span>\r\n                                    <!-- /ko -->\r\n                                </span>\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </li>\r\n    </ol>\r\n</script>\r\n";
});
