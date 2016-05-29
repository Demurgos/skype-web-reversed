define("text!views/calling/callScreenContent.html", [], function () {
  return "<div class=\"stage\" data-bind=\"css: mainClass, getVisibility: isVisible\">\r\n\r\n    <div class=\"participantsInStage\"\r\n        data-bind=\"getElement: stageContainer, css : { zoomedIn: stageResizer.isZoomedIn, singleParticipant: participantsInStage().length === 1 }\">\r\n        <!-- ko foreach: {data: participantsInStage, afterRender: participantRendered} -->\r\n            <!-- ko component: {\r\n                name: \"swx-call-participant\",\r\n                params: {\r\n                    participant: $data.participant,\r\n                    videoIsAllowed: $data.videoIsAllowed,\r\n                    isGroupConversation: $parent.conversation.isGroupConversation(),\r\n                    isVisible: $parent.isVisible,\r\n                    isScreenSharing: $data.isScreenSharing\r\n                }\r\n            } --><!-- /ko -->\r\n        <!-- /ko -->\r\n    </div>\r\n\r\n    <!-- ko if: callScreenMessageText -->\r\n    <div class=\"callScreenMessage fontSize-h2\" data-bind=\"text: callScreenMessageText\"></div>\r\n    <!-- /ko -->\r\n\r\n    <swx-end-call class=\"end-call\"\r\n            params=\"avatarUrl: avatarUrl,\r\n                    duration: duration,\r\n                    isGroupConversation: $parent.conversation.isGroupConversation()\">\r\n    </swx-end-call>\r\n\r\n    <swx-call-roster class=\"call-roster\"\r\n                     data-bind=\"css: { hasBorder: isLocalVideoOn() || (isCallConnected() && participantsInRoster().length > 0)}\"\r\n                     params=\"participants: participantsInRoster,\r\n                        isGroupConversation: $parent.conversation.isGroupConversation(),\r\n                        selfParticipant: conversation.selfParticipant,\r\n                        isLocalVideoOn: isLocalVideoOn,\r\n                        isVisible: isVisible,\r\n                        isLocalVideoAllowed: isLocalVideoAllowed\">\r\n    </swx-call-roster>\r\n\r\n    <div aria-live=\"polite\" role=\"status\" class=\"offScreen\" data-bind=\"text: participantNotification\"></div>\r\n</div>\r\n";
});
