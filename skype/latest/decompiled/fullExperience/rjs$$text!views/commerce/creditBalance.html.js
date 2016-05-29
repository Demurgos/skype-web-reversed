define("text!views/commerce/creditBalance.html", [], function () {
  return "<p class=\"SkypeOutOffer-title fontSize-h4\" data-bind=\"l10n: { key: 'credit_balance_text' }\"></p>\r\n<div class=\"SkypeOutOffer-body\" data-swx-testId=\"skypeOut-credit\">\r\n    <span class=\"iconfont skypeCreditFill SkypeOutOffer-icon SkypeOutOffer-icon--skypeCreditFill\"></span>\r\n    <div class=\"SkypeOutOffer-content\">\r\n        <p class=\"SkypeOutOffer-message\" data-bind=\"html: displayBalance\"></p>\r\n        <p class=\"SkypeOutOffer-buyCredit\">\r\n            <a data-bind=\"attr: {href: purchaseCreditUrl}, l10n: {key: 'credit_purchase_link_text'}, click: addCreditTelemetry\" target=\"_blank\"></a>\r\n        </p>\r\n    </div>\r\n</div>\r\n";
});
