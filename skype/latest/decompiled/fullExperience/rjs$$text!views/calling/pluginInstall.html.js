define("text!views/calling/pluginInstall.html", [], function () {
  return "<div id=\"overlayPluginSlides\" class=\"swx-overlayModal swx-hide\">\r\n    <!-- ko with: activeStep -->\r\n\r\n    <div id=\"overlayPluginStart\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayControls\">\r\n              <div class=\"right\">\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n                    <span class=\"iconfont after cross pull3\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_close' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"overlayMain\">\r\n            <div class=\"title\">\r\n                <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_title' }\"></h1>\r\n            </div>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_subtitle' }\"></p>\r\n            </div>\r\n            <swx-avatar-deprecated params=\"isGroupAvatar: isGroupConversation, avatar: avatar\" class=\"avatar\"></swx-avatar-deprecated>\r\n            <div class=\"buttonRow\">\r\n                <button class=\"btn green narrow large\" data-bind=\"click: installClick\" type=\"button\">\r\n                    <span class=\"iconfont after arrowRight pull2\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_install' }\"></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"autoUpdateDisclaimer\">\r\n                <p data-bind=\"l10n: { 'key': 'pluginInstall_label_text_autoUpdateDisclaimer' }\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"overlayExtensionInstall\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayControls\">\r\n              <div class=\"right\">\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n                    <span class=\"iconfont after cross pull3\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_close' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"overlayMain\">\r\n            <div class=\"title\">\r\n                <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_text_title' }\"></h1>\r\n            </div>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_text_subtitle' }\"></p>\r\n            </div>\r\n            <div class=\"illustration\">\r\n                <img data-bind=\"attr: { src: skypeChromeImageUrl }, css: { firefox: isFirefox }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n            </div>\r\n            <div class=\"buttonRow\">\r\n                <button class=\"btn green narrow large\" data-bind=\"click: installClick\" type=\"button\">\r\n                    <span class=\"iconfont after arrowRight pull2\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_text_add_extension' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"overlayExtensionInstallFailed\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayControls\">\r\n              <div class=\"right\">\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n                    <span class=\"iconfont after cross pull3\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_close' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"overlayMain\">\r\n            <div class=\"title\">\r\n                <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_install_failed_text_title' }\"></h1>\r\n            </div>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_install_failed_text_subtitle' }\"></p>\r\n            </div>\r\n            <div class=\"illustration\">\r\n                <img data-bind=\"attr: { src: imageUrl }, css: { firefox: isFirefox }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n            </div>\r\n            <div class=\"buttonRow\">\r\n                <a class=\"btn green narrow large\" target=\"_blank\" data-bind=\"attr: { href: chromeWebstoreUrl }\">\r\n                    <span class=\"iconfont after arrowRight pull2\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_install_failed_go_to_chrome_webstore_text' }\"></span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"overlayExtensionInstalled\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayControls\">\r\n              <div class=\"right\">\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n                    <span class=\"iconfont after cross pull3\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_close' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"overlayMain\">\r\n            <div class=\"title\">\r\n                <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_installed_text_title' }\"></h1>\r\n            </div>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_installed_text_subtitle' }\"></p>\r\n            </div>\r\n            <div class=\"illustration\">\r\n                <img data-bind=\"attr: { src: getPluginImageUrl }, css: { firefox: isFirefox }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n            </div>\r\n            <div class=\"buttonRow\">\r\n                <button class=\"btn green narrow large\" data-bind=\"click: installClick\" type=\"button\">\r\n                    <span class=\"iconfont after arrowRight pull2\" data-bind=\"l10n: { 'key': 'pluginInstall_extension_main_installed_get_plugin_text' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"closeCallingSetup\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayMain\">\r\n            <div class=\"title\">\r\n                <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'pluginInstall_main_close_screen_title' }\"></h1>\r\n            </div>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"l10n: { 'key': 'pluginInstall_main_close_screen_subtitle' }\"></p>\r\n            </div>\r\n            <div class=\"illustration\">\r\n                <img data-bind=\"attr: { src: closeScreenImageUrl }, css: { firefox: isFirefox }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n            </div>\r\n            <div class=\"buttonRow\">\r\n                <button class=\"btn green narrow large\" data-bind=\"click: next\" type=\"button\">\r\n                    <span class=\"iconfont after arrowRight pull2\" data-bind=\"l10n: { 'key': 'pluginInstall_main_close_screen_finish_text' }\">\r\n                    </span>\r\n                </button>\r\n\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n                    <span data-bind=\"l10n: { 'key': 'pluginInstall_main_close_screen_leave_text' }\"></span>\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"overlayPluginSteps\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayControls\">\r\n            <div class=\"left\">\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: restartDownload\" type=\"button\">\r\n                    <span class=\"iconfont reload pull2\" data-bind=\"l10n: { 'key': 'pluginInstall_steps_text_restart' }\"></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"right\">\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n                    <span class=\"iconfont after cross pull3\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_close' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"overlayMain\">\r\n            <div class=\"title\">\r\n                <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'pluginInstall_steps_text_title' }\"></h1>\r\n            </div>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"l10n: { 'key': 'pluginInstall_steps_text_subtitle' }\"></p>\r\n            </div>\r\n            <div class=\"grid verticalGutter\">\r\n                <div class=\"row\">\r\n                    <div class=\"column unit4\">\r\n                        <div class=\"icon\">\r\n                            <img data-bind=\"attr: { src: downloadImage }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p class=\"fontSize-h3 fontSizeNarrow-h4\" data-bind=\"text: downloadText\"></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"column unit4\">\r\n                        <div class=\"icon\">\r\n                            <img data-bind=\"attr: { src: installImage }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p class=\"fontSize-h3 fontSizeNarrow-h4\" data-bind=\"text: installText\"></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"column unit4\">\r\n                        <div class=\"icon\">\r\n                            <img data-bind=\"attr: { src: enjoyImage }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p class=\"fontSize-h3 fontSizeNarrow-h4\" data-bind=\"text: enjoyText\"></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"termsOfUse\">\r\n                <p data-bind=\"l10n: { 'key': 'pluginInstall_steps_text_termsAndPrivacy', 'params': { 'terms_link': getLink('terms'), 'privacy_link': getLink('privacy') } }\"></p>\r\n            </div>\r\n            <div class=\"autoUpdateDisclaimer\">\r\n                <p data-bind=\"l10n: { 'key': 'pluginInstall_label_text_autoUpdateDisclaimer' }\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"overlayPluginUnblock\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayControls\">\r\n            <div class=\"right\">\r\n                <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n                    <span class=\"iconfont after cross pull3\" data-bind=\"l10n: { 'key': 'pluginInstall_main_text_close' }\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"overlayMain\">\r\n            <div class=\"title\">\r\n                <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"l10n: { 'key': 'pluginInstall_unblock_text_title' }\"></h1>\r\n            </div>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"text: unblockText\"></p>\r\n            </div>\r\n            <div class=\"illustration\">\r\n                <img data-bind=\"attr: { src: unblockImageUrl }, css: { firefox: isFirefox }\" alt=\"\" role=\"presentation\" aria-hidden=\"true\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"overlayPluginCallback\" data-bind=\"if: $parent.activeStep().id === $element.id\">\r\n        <div class=\"overlayMain\">\r\n            <h1 class=\"ellipsis\" data-bind=\"l10n: { 'key': 'pluginInstall_callback_text_title', params: { displayName: conversationTopic }  }\"></h1>\r\n            <div class=\"subtitle\">\r\n                <p class=\"fontSize-h2 fontSizeNarrow-h4\" data-bind=\"l10n: { 'key': 'pluginInstall_callback_text_subtitle' }\"></p>\r\n            </div>\r\n            <swx-avatar-deprecated params=\"isGroupAvatar: isGroupConversation, avatar: avatar\" class=\"avatar\"></swx-avatar-deprecated>\r\n            <div class=\"dual buttonRow\">\r\n                <div class=\"column alignRight\">\r\n                    <button class=\"btn primary large\" data-bind=\"click: placeCall\" type=\"button\">\r\n                        <span data-bind=\"l10n: { 'key': 'pluginInstall_callback_text_call' }\"></span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"column alignLeft\">\r\n                    <button class=\"btn secondary large\" data-bind=\"click: notNow\" type=\"button\">\r\n                        <span data-bind=\"l10n: { 'key': 'pluginInstall_callback_text_notNow' }\"></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n";
});
