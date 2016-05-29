define("text!views/chat/messagesList.html", [], function () {
  return "<!-- ko if: searchResults().length > 0 -->\r\n<ul class=\"groups\" data-bind=\"foreach: { data: searchResults }\">\r\n    <!-- ko if: $index() === 0 -->\r\n    <li class=\"separator\">\r\n        <p class=\"strong\" data-bind=\"html: $parent.title\" />\r\n    </li>\r\n    <!-- /ko -->\r\n\r\n    <li class=\"list-selectable\">\r\n        <a role=\"button\" data-bind=\"event: { click: handleClick }, attr: {'aria-label':ariaLabel }\" class=\"recent unread\">\r\n\r\n            <swx-avatar-deprecated params=\"isGroupAvatar: isGroupConversation, isAgent: isAgent, avatar: avatarUrl\" class=\"avatar\"></swx-avatar-deprecated>\r\n\r\n            <div class=\"text\">\r\n                <span class=\"arrow\"></span>\r\n                <span class=\"tile\">\r\n                    <span class=\"tileName\">\r\n                        <h4>\r\n                            <span class=\"topic\" data-bind=\"text: userName, attr: {title: userName}\"></span>\r\n                        </h4>\r\n                    </span>\r\n                </span>\r\n\r\n                <div class=\"message\">\r\n                    <p data-bind=\"html: displayMessage\" class=\"small\"></p>\r\n                </div>\r\n                <div class=\"message\">\r\n                    <p class=\"small\"><span data-bind=\"html: conversation\" /></p>\r\n                </div>\r\n            </div>\r\n        </a>\r\n    </li>\r\n</ul>\r\n<!-- ko if: hasAdditionalResults --> \r\n<div class=\"additionalResults fontSize-p\">\r\n    <span>\r\n        <a role=\"button\" data-bind=\"event: {click: displayAdditionResults}, attr: {'aria-label':additionalResultsTitle}\"><span data-bind=\"text: additionalResultsTitle\"></span></a>\r\n    </span>\r\n</div>\r\n<!-- /ko -->\r\n<!-- /ko -->\r\n";
});
