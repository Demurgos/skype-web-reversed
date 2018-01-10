define("text!views/calling/cqfStarRating.html", [], function () {
  return "<div class=\"CallQualityFeedbackStarRating\">\r\n    <button class=\"btn transparent\" type=\"button\" data-bind=\"event: {mouseover: mouseoverHandler, mouseout: mouseoutHandler}, click: clickHandler, attr: {'aria-selected': selectedStar() === 0 ? 'true' : 'false'}, l10n_attr: {'aria-label': 'cqf_accessibility_oneStar_ariaLabel'}, focusHandler: { priority: 1 }\" data-value=\"0\">\r\n        <span class=\"iconfont favouriteOff\"></span>\r\n    </button>\r\n    <button class=\"btn transparent\" type=\"button\" data-bind=\"event: {mouseover: mouseoverHandler, mouseout: mouseoutHandler}, click: clickHandler, attr: {'aria-selected': selectedStar() === 1 ? 'true' : 'false'}, l10n_attr: {'aria-label': 'cqf_accessibility_twoStars_ariaLabel'}\" data-value=\"1\">\r\n        <span class=\"iconfont favouriteOff\"></span>\r\n    </button>\r\n    <button class=\"btn transparent\" type=\"button\" data-bind=\"event: {mouseover: mouseoverHandler, mouseout: mouseoutHandler}, click: clickHandler, attr: {'aria-selected': selectedStar() === 2 ? 'true' : 'false'}, l10n_attr: {'aria-label': 'cqf_accessibility_threeStars_ariaLabel'}\" data-value=\"2\">\r\n        <span class=\"iconfont favouriteOff\"></span>\r\n    </button>\r\n    <button class=\"btn transparent\" type=\"button\" data-bind=\"event: {mouseover: mouseoverHandler, mouseout: mouseoutHandler}, click: clickHandler, attr: {'aria-selected': selectedStar() === 3 ? 'true' : 'false'}, l10n_attr: {'aria-label': 'cqf_accessibility_fourStars_ariaLabel'}\" data-value=\"3\">\r\n        <span class=\"iconfont favouriteOff\"></span>\r\n    </button>\r\n    <button class=\"btn transparent\" type=\"button\" data-bind=\"event: {mouseover: mouseoverHandler, mouseout: mouseoutHandler}, click: clickHandler, attr: {'aria-selected': selectedStar() === 4 ? 'true' : 'false'}, l10n_attr: {'aria-label': 'cqf_accessibility_fiveStars_ariaLabel'}\" data-value=\"4\">\r\n        <span class=\"iconfont favouriteOff\"></span>\r\n    </button>\r\n</div>\r\n";
});
