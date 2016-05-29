define("text!views/common/selectBox.html", [], function () {
  return "<div class=\"SelectBox-header\" data-bind=\"\r\n        click: toggleSelectBox,\r\n        event: { keydown: onKeyDown },\r\n        attr: { 'aria-label': placeholder }\"\r\n        tabindex=\"0\" role=\"combobox\">\r\n    <span class=\"SelectBox-selectedName\" data-bind=\"text: selectedOption() ? selectedOption().name : placeholder\"></span>\r\n    <span class=\"SelectBox-selectedDescription\" data-bind=\"text: selectedOption() ? selectedOption().description : ''\"></span>\r\n    <span class=\"SelectBox-arrowIcon iconfont chevronDown\" data-bind=\"visible: showArrow\"></span>\r\n</div>\r\n<div class=\"SelectBox-options\" data-bind=\"visible: selectBoxOpened, click:onBoxClick\">\r\n    <div class=\"SelectBox-arrow\"></div>\r\n    <div class=\"SelectBox-scrollWrapper\" data-bind=\"keyboardNavigation: { itemSelector: '.list-selectable' }\">\r\n        <div class=\"scrollViewport scrollViewportV\" tabindex=\"-1\">\r\n            <ul role=\"listbox\" data-bind=\"foreach: selectOptions\">\r\n                <li role=\"option\" class=\"SelectBox-option list-selectable\" data-option\r\n                    data-bind=\"click: $parent.selectValue,\r\n                        enterKey: $parent.selectValue,\r\n                        css: {selected: $parent.selectedOption() === $data },\r\n                        attr: {title: name, 'data-value': value},\r\n                        event: {keydown: $parent.listKeyDown}\">\r\n                    <span class=\"SelectBox-optionName\" data-bind=\"text: name\"></span>\r\n                    <span class=\"SelectBox-optionDescription\"data-bind=\"text: description\"></span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<select class=\"SelectBox-select\"\r\n        data-bind=\"options: selectOptions,\r\n                   value: selectedOption,\r\n                   optionsCaption: placeholder\"></select>\r\n";
});
