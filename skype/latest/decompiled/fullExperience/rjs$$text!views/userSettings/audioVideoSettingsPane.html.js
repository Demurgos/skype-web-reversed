define("text!views/userSettings/audioVideoSettingsPane.html", [], function () {
  return "<script type=\"text/html\" id=\"device-list-template\">\r\n    <div class='pref-select-element' data-bind=\"css: { 'pref-select-element--disabled': selectionDisabled }\">\r\n        <swx-select-box params=\"autoFocusAfterSelection: true,\r\n                                selectOptions: availableDevices,\r\n                                selectedOption: selectedDevice,\r\n                                disabled: selectionDisabled,\r\n                                placeholderKey: placeholderKey\" class=\"SelectBox\"></swx-select-box>\r\n    </div>\r\n</script>\r\n\r\n<swx-call-screen-modal params=\"name: DIALOG_NAME\">\r\n    <div id=\"device-settings\" class=\"avSettings\" role=\"dialog\" data-bind=\"l10n_attr: {'aria-label': 'callscreen_text_showAVSettings' }\">\r\n        <ul class=\"avSettings-detail\">\r\n\r\n            <!-- ko if: allowCameraSelection() -->\r\n            <li class=\"avSettings-option\">\r\n                <h2 class=\"avSettings-featureLabel\" data-bind=\"l10n: { key: 'settings_camera_title' }\"></h2>\r\n                <div data-bind=\"template: { name: 'device-list-template', data: {\r\n                        selectionDisabled: cameraSelectionDisabled,\r\n                        availableDevices: availableDevices.cameras,\r\n                        selectedDevice: selectedDevice.selectedCamera,\r\n                        placeholderKey: cameraTitle}}\"></div>\r\n            </li>\r\n            <!-- /ko -->\r\n\r\n            <li class=\"avSettings-option\">\r\n                <h2 class=\"avSettings-featureLabel\" data-bind=\"l10n: { key: 'settings_microphone_title' }\"></h2>\r\n                <div data-bind=\"template: { name: 'device-list-template', data: {\r\n                        selectionDisabled: microphoneSelectionDisabled,\r\n                        availableDevices: availableDevices.microphones,\r\n                        selectedDevice: selectedDevice.selectedMicrophone,\r\n                        placeholderKey: microphoneTitle}}\"></div>\r\n            </li>\r\n\r\n            <!-- ko if: allowSpeakerSelection() -->\r\n            <li class=\"avSettings-option\">\r\n                <h2 class=\"avSettings-featureLabel\" data-bind=\"l10n: { key: 'settings_speaker_title' }\"></h2>\r\n                <div data-bind=\"template: { name: 'device-list-template', data: {\r\n                        selectionDisabled: speakerSelectionDisabled,\r\n                        availableDevices: availableDevices.speakers,\r\n                        selectedDevice: selectedDevice.selectedSpeaker,\r\n                        placeholderKey: speakerTitle}}\"></div>\r\n            </li>\r\n            <!-- /ko -->\r\n        </ul>\r\n\r\n        <div class=\"actions\">\r\n            <swx-button params=\"cssClass: 'secondary circle', textKey: 'button_text_closeSettings', i18nTitle: closeTitle, action: closeSettings, hasFocus: closeButtonHasFocus\"></swx-button>\r\n        </div>\r\n    </div>\r\n</swx-call-screen-modal>";
});
