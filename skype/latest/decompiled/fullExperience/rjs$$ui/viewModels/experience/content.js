define("ui/viewModels/experience/content", [
  "require",
  "vendor/knockout",
  "constants/common",
  "services/serviceLocator",
  "ui/telemetry/actions/actionSources",
  "usertiming"
], function (e) {
  function a() {
    var e = this, a = r.resolve(n.serviceLocator.PUBSUB);
    e.showOverlay = t.observable(!1);
    e.init = function () {
      a.subscribe(o.narrowMode.SIDEBAR_STATE_CHANGED, e.showOverlay);
      s.mark(u.EXPERIENCE.CONTENT_INIT);
    };
    e.dispose = function () {
      a.unsubscribe(o.narrowMode.SIDEBAR_STATE_CHANGED, e.showOverlay);
    };
    e.hideOverlay = function () {
      var t = { source: i.search.reset.content };
      e.showOverlay(!1);
      a.publish(o.search.RESET, t);
    };
  }
  var t = e("vendor/knockout"), n = e("constants/common"), r = e("services/serviceLocator"), i = e("ui/telemetry/actions/actionSources"), s = e("usertiming"), o = n.events, u = n.telemetry.performanceMarks;
  return a;
});
