define("text!views/calling/deviceDisabled.html", [], function () {
  return "<div id=\"swx-overlayDeviceDisabled\" class=\"swx-overlayModal swx-overlayDeviceDisabled\">\r\n\r\n    <div class=\"buttonRow\">\r\n        <button class=\"btn narrow transparent\" data-bind=\"click: close\" type=\"button\">\r\n            <span class=\"iconfont after cross pull3\" data-bind=\"l10n: { 'key': 'header_text_close' }\"></span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        <h1 class=\"fontSize-h0 fontSizeNarrow-h1\" data-bind=\"text: title\"></h1>\r\n    </div>\r\n\r\n    <div class=\"subtitle\">\r\n        <p class=\"fontSize-h4 fontSizeNarrow-h4\" data-bind=\"html: text\"></p>\r\n    </div>\r\n</div>";
});
