define("services/pes.v2/tabs/stylesFactory", [], function () {
  function e() {
    function t(e) {
      var t = "\n.swx .tab_id_" + e.id + "\n";
      return t += "{\n", t += " -ms-high-contrast-adjust: none;\n", t += " background-image: url('" + e.thumbnailUrl + "'); \n", t += "} \n", t;
    }
    var e = this;
    e.create = function (e) {
      return t(e);
    };
  }
  return new e();
});
