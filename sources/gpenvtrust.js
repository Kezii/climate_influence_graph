data = [
    {
        name: 'Greenpeace Environmental Trust',
        category: 1,
    },

    {
        name: "People & Planet",
        category: 1,
    },
    {
        name: "Green Alliance",
        category: 1,
    },
    {
        name: "Nuclear Information Service",
        category: 1,
    },
    {
        name: "Chem Trust",
        category: 1,
    },
    {
        name: "100percent renewable UK Ltd",
        category: 1,
    },
    {
        name: "Together against Sizewell C",
        category: 1,
    },
    {
        name: "Edinburgh Energy & Environmental Consultancy",
        category: 1,
    },
    {
        name: "Tipping Point North South",
        category: 1,
    },
    {
        name: "Greenpeace International Science Unit",
        category: 1,
    },
    {
        name: "GeneWatch",
        category: 1,
    },
    {
        name: "UKWIN",
        category: 1,
    },
    // {
    //   name: "Greenpeace International Africa Development",
    //   category: 1,
    // },
    // {
    //   name: "Greenpeace International Brazil Development",
    //   category: 1,
    // },
    // {
    //   name: "Greenpeace International East Asia Development",
    //   category: 1,
    // },
    // {
    //   name: "Greenpeace International Russia Development",
    //   category: 1,
    // },
    // {
    //   name: "Greenpeace International South East Asia Development",
    //   category: 1,
    // },
    // {
    //   name: "Greenpeace Brazil",
    //   category: 1,
    // },
    // {
    //   name: "Greenpeace Ltd",
    //   category: 1,
    // },
    // {
    //   name: "Greenpeace International Global Programme",
    //   category: 1,
    // },

]

links = [
    /// https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/284934/accounts-and-annual-returns
    {
        source: "Greenpeace Environmental Trust",
        target: "People & Planet",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Green Alliance",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Paul Dorfman",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Nuclear Information Service",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Chem Trust",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "100percent renewable UK Ltd",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Together against Sizewell C",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Edinburgh Energy & Environmental Consultancy",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Tipping Point North South",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace International Science Unit",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "GeneWatch",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "UKWIN",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace International Africa Development",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace International Brazil Development",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace International East Asia Development",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace International Russia Development",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace International South East Asia Development",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace Brazil",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace Ltd",
        ...LINK_FINANCES
    },
    {
        source: "Greenpeace Environmental Trust",
        target: "Greenpeace International Global Programme",
        ...LINK_FINANCES
    },
];

graph_data = graph_data.concat(data)
graph_links = graph_links.concat(links)