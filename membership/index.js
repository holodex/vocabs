module.exports = {
  id: "Membership",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "org": "  http://www.w3.org/ns/org#",
  },
  description: "A relationship between a member and a group.",
  context: "org:Membership",
  properties: {
    description: {
      description: "A description of the member's relation to the group.",
      context: "description",
      type: "string",
    },
    member: {
      description: "The person or group that is a member of the group.",
      context: "org:member",
      oneOf: [{
        $ref: "Person",
      }, {
        $ref: "Group",
      }],
    },
    group: {
      description: "The organization in which the person or organization is a member.",
      context: "org:organization",
      $ref: "Group",
    },
    roles: {
      description: "The roles the member plays in the group.",
      context: "org:role",
      type: "array",
      items: {
        $ref: "Role",
      },
    },
    startDate: {
      description: "The start date of the membership.",
      context: {
        "@id": "startDate",
        "@type": "xsd:dateTime",
      },
      type: "string",
      format: "date-time",
    },
    endDate: {
      description: "The end date of the membership.",
      context: {
        "@id": "endDate",
        "@type": "xsd:dateTime",
      },
      type: "string",
      format: "date-time",
    },
  },
  dependencies: {
    Group: require('../group'),
    Person: require('../person'),
    Role: require('../role'),
  },
};
