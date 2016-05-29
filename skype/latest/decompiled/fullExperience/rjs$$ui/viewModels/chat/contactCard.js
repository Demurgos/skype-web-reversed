define("ui/viewModels/chat/contactCard", [
  "require",
  "lodash-compat",
  "vendor/knockout",
  "swx-i18n",
  "ui/telemetry/actions/actionSources",
  "utils/common/cafeObservable",
  "swx-enums",
  "constants/common",
  "utils/common/eventHelper",
  "utils/common/eventMixin",
  "ui/contextMenu/contextMenu",
  "services/serviceLocator",
  "ui/contextMenu/items/all",
  "ui/modelHelpers/personHelper",
  "ui/viewModels/people/contactBuilder"
], function (e) {
  function m(e) {
    function N(e) {
      var t = document.createEvent("MouseEvents"), n = e.target.getBoundingClientRect();
      return t.initMouseEvent("contextmenu", !0, !1, window, 0, 0, 0, n.right, n.top, !1, !1, !0, !1, 2, null), e.target.dispatchEvent(t), a.swallow(e), e.stopPropagation(), t;
    }
    var f = e.participant, m = s.newObservableProperty(e.model.participants.remove.enabled), b = d.build(f.person), w = this, E = s.newObservableProperty(f.role), S = c.resolve(u.serviceLocator.FEATURE_FLAGS), x = S.isFeatureOn(u.featureFlags.HIDE_USER_ROLE), T = n.computed(function () {
        return f.isAnonymous() ? v.GUEST : E() === o.participantRole.Leader ? v.ADMIN : v.ATTENDEE;
      });
    t.merge(w, b);
    w.role = n.computed(function () {
      var e;
      return x ? "" : T() === v.ATTENDEE ? "" : (e = "header_text_" + T(), T() === v.ADMIN && g() && (e = y(e)), r.fetch({ key: e }));
    });
    w.chevronAriaLabel = n.computed(function () {
      return r.fetch({
        key: "accessibility_groupProfile_" + T() + "Menu",
        params: { participantName: w.displayName() }
      });
    });
    w.isMenuDisabled = n.computed(function () {
      return e.model.selfParticipant.isAnonymous() || f.isAnonymous() && !m();
    });
    w.dispose = function () {
      b.dispose();
      T.dispose();
      w.role.dispose();
      w.chevronAriaLabel.dispose();
      w.isMenuDisabled.dispose();
    };
    w.onMenuHandlerKeydown = function (e, t) {
      var n, r = a.isActivation(t);
      return r && (n = N(t), w.menuHandler(e, n)), !r;
    };
    w.menuHandler = function (t, n) {
      var r = [], s = { source: i.conversation.groupRoster };
      f.isAnonymous() || ((S.isFeatureOn(u.featureFlags.PSTN_ENABLED) || !p.isPstn(f.person)) && r.push(new h.OpenConversationWithPersonMenuItem(f.person)), r.push(new h.ViewPersonProfileMenuItem(f.person, u.telemetry.historyLoadOrigin.ROSTER, s)));
      m() && r.push(new h.RemoveParticipantMenuItem(e.model, e.participant));
      l.show(r, n);
    };
  }
  function g() {
    return c.resolve(u.serviceLocator.FEATURE_FLAGS).isFeatureOn(u.featureFlags.USE_BUSINESS_WORDING);
  }
  function y(e) {
    return e + "_4b";
  }
  var t = e("lodash-compat"), n = e("vendor/knockout"), r = e("swx-i18n").localization, i = e("ui/telemetry/actions/actionSources"), s = e("utils/common/cafeObservable"), o = e("swx-enums"), u = e("constants/common"), a = e("utils/common/eventHelper"), f = e("utils/common/eventMixin"), l = e("ui/contextMenu/contextMenu"), c = e("services/serviceLocator"), h = e("ui/contextMenu/items/all"), p = e("ui/modelHelpers/personHelper"), d = e("ui/viewModels/people/contactBuilder"), v = {
      GUEST: "guest",
      ADMIN: "admin",
      ATTENDEE: "attendee"
    };
  return t.assign(m.prototype, f), m;
});
