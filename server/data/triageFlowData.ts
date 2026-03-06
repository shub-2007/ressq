export const triageFlowData  = {
  version: "1.0",
  startNode: "start",
  nodes: {
    start: {
      question: "Is the person conscious?",
      type: "yesno",
      yes: "heavyBleedingCheck",
      no: "breathingCheck"
    },

    breathingCheck: {
      question: "Is the person breathing normally?",
      type: "yesno",
      yes: "recoveryPosition",
      no: "cpr"
    },

    heavyBleedingCheck: {
      question: "Is there heavy bleeding?",
      type: "yesno",
      yes: "bleedingControl",
      no: "chokingCheck"
    },

    chokingCheck: {
      question: "Is the person choking and unable to speak?",
      type: "yesno",
      yes: "choking",
      no: "incidentType"
    },

    incidentType: {
      question: "What happened?",
      type: "options",
      options: {
        burn: "burn",
        snakebite: "snakeBite",
        fracture: "fracture",
        heatstroke: "heatstroke",
        seizure: "seizure",
        drowning: "drowning",
        electricshock: "electricShock"
      }
    }
  }
};

export default triageFlowData;
