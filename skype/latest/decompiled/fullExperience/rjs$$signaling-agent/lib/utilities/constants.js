(function (e) {
  if (typeof module == "object" && typeof module.exports == "object") {
    var t = e(require, exports);
    t !== undefined && (module.exports = t);
  } else
    typeof define == "function" && define.amd && define("signaling-agent/lib/utilities/constants", [
      "require",
      "exports"
    ], e);
}(function (e, t) {
  var n = {
    WEBRTC_NOTIFICATION_TYPE: {
      CONTROL_VIDEO_STREAMING: "ControlVideoStreaming",
      DOMINANT_SPEAKER_INFO: "DominantSpeakerInfo",
      CSRC_INFO: "CsrcInfo"
    },
    PARTICIPANT_AUDIO_STATE: {
      CONNECTING: "Connecting",
      CONNECTED: "Connected",
      OTHER: "Other"
    },
    HEADERS: {
      MESSAGE_ID: "X-Microsoft-Skype-Message-ID",
      ORIGINAL_MESSAGE_ID: "X-Microsoft-Skype-Original-Message-ID",
      CORRELATION_ID: "X-Microsoft-Skype-Chain-ID",
      CONTENT_SHARING_CORRELATION_ID: "X-Microsoft-Skype-ContentSharing-Chain-ID",
      CLIENT_USER_AGENT: "X-Microsoft-Skype-Client",
      SKYPE_TOKEN: "X-Skypetoken"
    },
    KNOWN_BOTS: { VOICEMAIL_BOT_ID: "28:14524421-25b4-403a-a0f7-e62d4379cabc" },
    HTTP_STATUS_CODES: {
      OK: 200,
      CREATED: 201,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      PRECONDITION_FAILED: 412,
      UNPROCESSABLE_ENTITY: 422,
      INTERNAL_SERVER_ERROR: 500,
      CONFLICT: 409
    },
    CALL_END_SKYPE_TOKEN_ERROR: {
      code: 495,
      subCode: 4507,
      phrase: "CallEndReasonSkypeTokenFetchError"
    },
    CALL_END_LOCAL_HTTP_STACK_ERROR: {
      code: 496,
      subCode: 4520,
      phrase: "LocalHTTPStackError"
    },
    CALL_END_NETWORK_ERROR: {
      code: 490,
      subCode: 4502,
      phrase: "CallEndReasonNetworkError"
    },
    CALL_END_LOCAL_DECLINE: {
      code: 486,
      subCode: 4508,
      phrase: "LocalDecline"
    },
    RESOURCE_NOT_FOUND_ERROR: {
      code: 404,
      subCode: 404,
      phrase: "ResourceNotFound"
    },
    CALL_STATUS: {
      IDLE: "Idle",
      RINGING: "Ringing",
      CONNECTING: "Connecting",
      CONNECTED: "Connected",
      CONNECTED_FOR_ROSTER_ONLY: "ConnectedForRosterOnly",
      LOCAL_TERMINATED: "LocalTerminated",
      REMOTE_TERMINATED: "RemoteTerminated"
    },
    MEDIA_TYPES: {
      AUDIO: "Audio",
      VIDEO: "Video",
      SCREEN_SHARER: "ScreenSharer",
      SCREEN_VIEWER: "ScreenViewer"
    },
    MUTE_SCOPE: {
      MYSELF: "Myself",
      EVERYONE_ELSE: "EveryoneElse",
      SPECIFIED_PARTICIPANTS: "SpecifiedParticipants"
    },
    URL_BASE: { CALLAGENT: "callAgent" },
    URL_PATH: {
      MEDIA_ACKNOWLEDGEMENT: "/call/mediaAcknowledgement/",
      MEDIA_REJECTION: "/call/rejection/",
      ACKNOWLEDGEMENT: "/call/acknowledgement/",
      MEDIA_RENEGOTIATION: "/call/mediaRenegotiation/",
      REPLACE: "/call/replacement/",
      PROGRESS: "/call/progress/",
      MEDIA_ANSWER: "/call/mediaAnswer/",
      REDIRECTION: "/call/redirection/",
      BALANCE_UPDATE: "/call/balanceUpdate/",
      ACCEPT: "/call/acceptance/",
      CONTROL_VIDEO_STREAMING: "/call/controlVideoStreaming/",
      DOMINANT_SPEAKER_INFO: "/call/dominantSpeakerInfo/",
      CSRC_INFO: "/call/csrcInfo/",
      END: "/call/end/",
      RETARGET_COMPLETION: "/call/retargetCompletion/",
      TRANSFER: "/call/transfer/",
      TRANSFER_ACCEPTANCE: "/call/transferAcceptance/",
      TRANSFER_COMPLETION: "/call/transferCompletion/",
      CONV_END: "/conversation/end/",
      CONV_UPDATE: "/conversation/update/",
      CONV_ROSTER_UPDATE: "/conversation/rosterUpdate/",
      CONV_ADD_PARTICIPANT_SUCCESS: "/conversation/addParticipantSuccess/",
      CONV_ADD_PARTICIPANT_FAILURE: "/conversation/addParticipantFailure/",
      CONV_REMOVE_PARTICIPANT_SUCCESS: "/conversation/removeParticipantSuccess/",
      CONV_REMOVE_PARTICIPANT_FAILURE: "/conversation/removeParticipantFailure/",
      CONV_ADD_MODALITY_SUCCESS: "/conversation/addModalitySuccess/",
      CONV_ADD_MODALITY_FAILURE: "/conversation/addModalityFailure/",
      CONV_CONTENT_SHARING_UPDATE: "/conversation/contentSharingUpdate/",
      CONV_CONTENT_SHARING_END: "/conversation/contentSharingEnd/",
      CONV_CONFIRM_UNMUTE: "/conversation/confirmUnmute/",
      CONV_UNMUTE_SUCCESS: "/conversation/unmuteSuccess/",
      CONV_UNMUTE_FAILURE: "/conversation/unmuteFailure/"
    },
    LINKS: {
      HANGUP: "hangup",
      MEDIA_REJECTION: "mediaRejection",
      MEDIA_ANSWER: "mediaAnswer",
      MEDIA_RENEGOTIATION: "mediaRenegotiation",
      ACCEPT: "accept",
      ATTACH: "attach",
      REJECT: "reject",
      REDIRECT: "redirect",
      REPLACE: "replace",
      TRANSFER: "transfer",
      TRANSFER_ACCEPTANCE: "transferAcceptance",
      TRANSFER_COMPLETION: "transferCompletion",
      CONVERSATION_CONTROLLER: "conversationController",
      ADD_PARTICIPANT_AND_MODALITY: "addParticipantAndModality",
      LEAVE: "leave",
      NOTIFICATION_LINKS: "notificationLinks",
      REMOVE_PARTICIPANT: "removeParticipant",
      KEEPALIVE: "keepAlive",
      ADD_MODALITY: "AddModality",
      REMOVE_MODALITY: "RemoveModality",
      CONTENT_SHARING_CONTROLLER: "contentSharingController",
      CONTENT_SHARING_TAKE_CONTROL: "contentSharingTakeControl",
      CONTENT_SHARING_UPDATE_SESSION_STATE: "contentSharingUpdateSessionState",
      CONTENT_SHARING_UPDATE_PARTICIPANT_STATE: "contentSharingUpdateParticipantState",
      CONTENT_SHARING_LEAVE: "contentSharingLeave",
      MUTE: "mute",
      UNMUTE: "unmute",
      CONTROL_VIDEO_STREAMING: "controlVideoStreaming"
    },
    CONTENT_TYPE: {
      JSON: "application/json",
      SDP: "application/sdp"
    },
    TROUTER_EVENT_TYPE: {
      SKYPE_SKYPE_CALL: 107,
      LYNC_SKYPE_CALL: 105
    },
    MISC: { CONVERSATION: "conversation" },
    SIGNALING_FSM_STATE: {
      IDLE: "Idle",
      INCOMING: "Incoming",
      WAITING_CALL_ACCEPTANCE_ACK: "WaitingCallAcceptanceAck",
      OUTGOING: "Outgoing",
      CONNECTED: "Connected",
      OUTGOING_FOR_ROSTER_ONLY: "OutgoingForRosterOnly",
      CONNECTED_FOR_ROSTER_ONLY: "ConnectedForRosterOnly"
    },
    MEDIA_RENEGOTIATION_FSM_STATE: {
      IDLE: "Idle",
      CALL_CONNECTED: "Connected",
      INCOMING_RENEGOTIATION: "IncomingRenegotiation",
      OUTGOING_RENEGOTIATION: "OutgoingRenegotiation",
      RENEGOTIATION_GLARE: "RenegotiationGlare"
    },
    CONTENT_SHARING_FSM_STATE: {
      IDLE: "Idle",
      CONTENT_SHARING_START_INITIATED: "ContentSharingStartInitiated",
      CONTENT_SHARING_JOIN_INITIATED: "ContentSharingJoinInitiated",
      CONTENT_SHARING_LEAVE_INITIATED: "ContentSharingLeaveInitiated",
      CONTENT_SHARING_CONNECTED: "ContentSharingConnected"
    },
    TIMEOUT_OPERATIONS: {
      ADD_PARTICIPANT: "AddParticipant",
      REMOVE_PARTICIPANT: "RemoveParticipant",
      INCOMING_CALL_ESTABLISHMENT: "IncomingCallEstablishment",
      OUTGOING_CALL_ESTABLISHMENT: "OutgoingCallEstablishment",
      MEDIA_ANSWER: "MediaAnswer",
      MEDIA_ANSWER_ACKNOWLEDGEMENT: "MediaAnswerAcknowledgement",
      ADD_MODALITY: "AddModality",
      UNMUTE: "Unmute"
    },
    TIMEOUT_VALUES_IN_SECONDS: {
      ADD_PARTICIPANT_TIMEOUT: 75,
      REMOVE_PARTICIPANT_TIMEOUT: 60,
      INCOMING_CALL_ESTABLISHMENT_TIMEOUT: 75,
      OUTGOING_CALL_ESTABLISHMENT_TIMEOUT: 90,
      MEDIA_ANSWER_TIMEOUT: 35,
      MEDIA_ANSWER_ACKNOWLEDGEMENT_TIMEOUT: 15,
      ADD_MODALITY_TIMEOUT: 65,
      UNMUTE_TIMEOUT: 35
    },
    CALL_END_CODE: {
      REJECT: 603,
      SUCCESS: 0,
      CANCEL: 487,
      TIMEOUT: 408,
      SERVICE_UNAVAILABLE: 500,
      BAD_REQUEST: 406,
      NO_NGC_ENDPOINT: 480,
      P2P_FALLBACK_FOR_SCREENSHARING: 460,
      CONFLICT: 409,
      MEDIA_ERROR: 410,
      CALL_DOES_NOT_EXIST: 481,
      CALL_ACCEPTED: 450,
      CALL_FORWARDED: 451,
      CALL_FORWARDED_TO_VOICEMAIL: 452,
      P2P_REJECT_CALL: 453,
      P2P_FALLBACK_DUE_TO_GROUPCALL: 461,
      CALL_LEG_ENDED_ON_SERVICE: 470,
      NOT_ACCEPTABLE_HERE: 488,
      NETWORK_ERROR: 490,
      UNKNOWN_ERROR: 497,
      LOCAL_ERROR: 498,
      CALL_MODALITY_FAILURE: 580,
      GLARE_ERROR: 491,
      NOT_FOUND: 404,
      SKYPE_TOKEN_ERROR: 495,
      LOCAL_HTTP_STACK_ERROR: 496
    },
    CALL_END_SUB_CODE: {
      SUCCESS: 0,
      CALL_NOT_ATTEMPTED: 4500,
      CONV_URL_NOT_SET: 4501,
      FAILED_TO_REACH_SERVICE: 4502,
      PLACE_CALL_FAILED: 4503,
      ATTACH_CALL_FAILED: 4504,
      BAD_NOTIFICATION_PAYLOAD: 4505,
      CALL_ESTABLISHMENT_TIMEOUT: 4506,
      SKYPE_TOKEN_ERROR: 4507,
      CONVERSATION_RESOLUTION_CONFLICT: 5704,
      CALL_PARTICIPANT_REMOVAL_TIMEOUT: 4507,
      UNMUTE_REQUEST_TIMEOUT: 4509,
      UNMUTE_REQUEST_REJECTED: 4510,
      CONFLICT_IN_NG: 4090,
      CONFLICT_WITH_P2P: 4091,
      CONVERSATION_END_RECEIVED_FROM_SERVICE: 4100,
      TRANSFER_COMPLETE_TIMEOUT: 4101,
      ATTACH_TO_NON_EXISTENT_CALL: 4102,
      ATTACH_ACTION_FAILED: 4103,
      ATTACH_FAILED: 4105,
      CONVERSATION_ESTABLISHMENT_FAILED: 4106,
      BEFORE_CONNECT: 4107,
      AFTER_CONNECT: 4108,
      AFTER_ACCEPT: 4109,
      TROUTER_CONNECTION_DROPPED: 4111,
      DUE_TO_CALL_ASSIMILATION: 4112,
      GLARE_ERROR: 10029,
      CONVERSATION_ENDED_NO_NEW_OWNER_FOUND: 5014,
      UNABLE_TO_GENERATE_MEETUP_ID: 5015,
      CALL_ENDED_BY_PLATFORM_AGENT: 7000,
      LOCAL_HTTP_STACK_ERROR: 4520,
      MEDIA_DROP_DURING_CONNECT: 3100,
      MEDIA_DROP_AFTER_CONNECT: 3101,
      MEDIA_ANSWER_PROCESSING_ERROR: 3102,
      MEDIA_FINAL_ANSWER_PROCESSING_ERROR: 3103,
      MEDIA_OFFER_TIMEOUT: 3104,
      MEDIA_FINAL_ANSWER_TIMEOUT: 3105,
      MEDIA_OFFER_NULL: 3106,
      MEDIA_AUDIO_DEVICE_ERROR: 3107,
      MEDIA_RENEGOTIATION_ERROR: 3108,
      MEDIA_PERMISSION_ERROR: 3109,
      MEDIA_UNKNOWN_ERROR: 3110
    },
    CALL_END_PHRASE: {
      UNKNOWN: "CallEndReasonUnknown",
      MEDIA_ERROR: "CallEndReasonMediaError",
      MEDIA_OFFER_TIMEOUT: "CallEndReasonMediaOfferTimeout",
      MEDIA_FINAL_ANSWER_TIMEOUT: "CallEndReasonMediaFinalAnswerTimeout",
      MEDIA_ANSWER_ERROR: "CallEndReasonMediaAnswerError",
      MEDIA_FINAL_ANSWER_ERROR: "CallEndReasonFinalAnswerError",
      MEDIA_PERMISSION_ERROR: "CallEndReasonMediaPermissionError",
      MEDIA_RENEGOTIATION_ERROR: "CallEndReasonRenegotiationError",
      MEDIA_DROP_DURING_CONNECT: "CallEndReasonMediaDropDuringConnectError",
      MEDIA_DROP_AFTER_CONNECT: "CallEndReasonMediaDropAfterConnectError",
      AUDIO_ERROR: "CallEndReasonAudioDeviceError",
      BAD_NOTIFICATION_PAYLOAD: "BadCallNotificationPayload",
      NETWORK_ERROR: "CallEndReasonNetworkError",
      LOCAL_USER_INITIATED: "CallEndReasonLocalUserInitiated",
      REMOTE_USER_INITIATED: "CallEndReasonRemoteUserInitiated",
      ESTABLISHMENT_TIMEOUT: "CallEndReasonEstablishmentTimeout",
      PARTICIPANT_REMOVAL_TIMEOUT: "CallParticipantRemovalTimeout",
      LOCAL_ERROR: "CallEndReasonLocalError",
      CALL_UPDATE_ERROR: "CallEndReasonCallUpdateError",
      P2P_FORK_CONNECTED: "CallEndReasonP2pForkConnected",
      P2P_FORK_FORWARDED: "CallEndReasonP2pForkForwarded",
      P2P_FORK_FORWARDED_TO_VOICEMAIL: "CallEndReasonP2pForkForwardedToVoiceMail",
      P2P_FALLBACK_FOR_SCREENSHARING: "CallEndReasonP2pFallbackForScreensharing",
      P2P_FALLBACK_FOR_GROUPCALL: "CallEndReasonP2pFallbackForGroupCall",
      P2P_FALLBACK_FOR_CALL_ASSIMILATION: "CallEndReasonP2pFallbackForCallAssimilation",
      P2P_FALLBACK_FOR_TRANSLATION: "CallEndReasonP2pFallbackForCallTranslation",
      P2P_FORK_REJECTED: "CallEndReasonP2pForkRejected",
      TROUTER_CONNECTION_DROPPED: "CallEndReasonTrouterConnectionDropped",
      REMOVED_FROM_CALL: "CallEndReasonRemovedFromCall",
      TRANSFER_COMPLETION_TIMEOUT: "CallEndReasonTransferCompletionTimeout",
      CALL_DOES_NOT_EXIST: "CallEndReasonCallDoesNotExist",
      ATTACH_ACTION_FAILED: "CallEndReasonAttachActionFailed",
      ATTACH_FAILED: "CallEndReasonAttachFailed",
      CONVERSATION_ESTABLISHMENT_FAILED: "CallEndReasonConversationEstablishmentFailed",
      CONV_END_FROM_SERVICE: "CallEndReasonConversationEndReceivedFromService",
      CONV_END_FROM_SERVICE_WITH_ERROR: "CallEndReasonConversationEndReceivedFromServiceWithError",
      SERVICE_ERROR: "CallEndReasonServiceError",
      CONFLICT: "CallEndReasonConflict",
      CALL_ALREADY_IN_P2P: "CallEndReasonCallAlreadyExistsInP2p",
      CONV_END_NO_MODALITY: "ConversationEndNoModalityConnected",
      CONV_END_FOR_ALL_INITIATED: "ConversationEndForAllInitiated",
      RENEGOTIATION_IN_PROGRESS: "NegotiationIsInProgress",
      ADD_PARTICIPANT_URL_MISSING: "AddParticipantUrlMissing",
      UNABLE_TO_GENERATE_MEETUP_ID: "Unable to generate GroupChat meetup id.",
      ENDED_BY_PMA: "Call ended by media agent.",
      OWNERSHIP_RESOLUTION_CONFLICT: "Conversation cannot be created due to a failure to resolve ownership.",
      CONVERSATION_ENDED_NO_NEW_OWNER_FOUND: "This conversation has ended since we were unable to determine a potential host for the group call.",
      UNMUTE_REQUEST_TIMEOUT: "UnmuteRequestTimeout",
      UNMUTE_REQUEST_REJECTED: "UnmuteRequestRejected"
    }
  };
  t.__esModule = !0;
  t["default"] = n;
}));
