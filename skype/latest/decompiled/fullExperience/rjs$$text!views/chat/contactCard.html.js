define("text!views/chat/contactCard.html", [], function () {
  return "<swx-avatar-deprecated params=\"avatar: avatar, status: statusClassName\" class=\"avatar\"></swx-avatar-deprecated>\r\n<div class=\"text\">\r\n    <span class=\"role fontSize-p smaller\" data-bind=\"text: role\"></span>\r\n    <span class=\"tile swxTileName\">\r\n        <span class=\"tileName\">\r\n            <span role=\"button\" class=\"navigation-item\">\r\n                <h4 data-bind=\"text: displayName\"></h4>\r\n                <a role=\"listitem\" class=\"menu iconfont chevronDown btnOutline\" data-bind=\"event: {keydown: onMenuHandlerKeydown, click: menuHandler }, css: { hide: isMenuDisabled }, attr: {'aria-label': chevronAriaLabel}\"></a>\r\n            </span>\r\n        </span>\r\n    </span>\r\n    <span class=\"tile\">\r\n        <span class=\"tileMessage circle\">\r\n            <div class=\"message\">\r\n                <p data-bind=\"html: displayMessage\"></p>\r\n            </div>\r\n        </span>\r\n    </span>\r\n</div>\r\n\r\n";
});
