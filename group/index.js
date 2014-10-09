module.exports = {
  id: "Group",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "org": "http://www.w3.org/TR/vocab-org#",
  },
  context: "org:Organization",
  description: "A collection of people and groups.",
  properties: {
    name: {
      context: "name",
      description: "The primary name of the group.",
      type: "string",
    },
    description: {
      context: "description",
      description: "A short description of the group.",
      type: "string",
    },
    memberships: {
      context: "org:hasMembership",
      description: "The membership relationships that the group plays.",
      type: "array",
      items: {
        reverse: "group",
        $ref: "Membership",
      },
    },
    members: {
      context: "member",
      value: function () {
        return this.memberships.map(function (m) {
          return m.member;
        });
      },
    },
  },
};
module.exports.dependencies = {
  Membership: require('../membership'),
};
