define("text!views/chat/fileTransferActivityActions.html", [], function () {
  return "<!-- ko if: isPending -->\r\n    <span class=\"progressIndicator\" data-bind=\"style:{backgroundImage:progressIndicatorBG}\"></span>\r\n    <a data-bind=\"click:abort, l10n_attr:{'aria-label':'file_transfer_upload_cancel', 'title':'file_transfer_upload_cancel'}\" role=\"button\" tabindex=\"-2\">\r\n        <span class=\"abort iconfont cancel\" ></span>\r\n    </a>\r\n<!-- /ko -->\r\n<!-- ko ifnot: isPending -->\r\n    <!-- ko ifnot:isFailed -->\r\n    <a data-bind=\"click:downloadFile, attr:{title: downloadButtonTitle, 'aria-label': downloadButtonTitle}\" role=\"button\" tabindex=\"-2\">\r\n        <span class=\"download iconfont down\"></span>\r\n    </a>\r\n    <!-- /ko -->\r\n    <!-- ko if: isFailed -->\r\n    <span class=\"failedIcon iconfont errorSad\" data-bind=\"l10n_attr:{'title':'file_transfer_upload_failed'}\"></span>\r\n    <span class=\"errorMessage\" data-bind=\"html:errorMessage, attr:{'title':errorMessage}\"></span>\r\n    <!-- /ko -->\r\n<!-- /ko -->\r\n";
});
