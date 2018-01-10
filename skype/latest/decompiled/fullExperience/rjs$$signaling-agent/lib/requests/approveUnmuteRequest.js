(function (e) {
  if (typeof module == "object" && typeof module.exports == "object") {
    var t = e(require, exports);
    t !== undefined && (module.exports = t);
  } else
    typeof define == "function" && define.amd && define("signaling-agent/lib/requests/approveUnmuteRequest", [
      "require",
      "exports",
      "../utilities/utils"
    ], e);
}(function (e, t) {
  function r(e) {
    n.assertNotNull(e, "signalingSession cannot be null");
    var t = {
      payload: {
        from: {
          id: e.participantManager.localParticipant.id,
          displayName: e.participantManager.localParticipant.displayName,
          endpointId: e.participantManager.localParticipant.endpointId,
          participantId: e.participantManager.localParticipant.participantId,
          languageId: e.participantManager.localParticipant.languageId
        },
        mediaTypes: ["audio"]
      }
    };
    return t;
  }
  var n = e("../utilities/utils");
  t.getPayload = r;
}));
