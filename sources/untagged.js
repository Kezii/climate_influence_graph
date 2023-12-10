data = [
    /// PERSONE
    {
        name: 'Paul Dorfman',
        category: 0,
    },
    {
        name: "Gerard Schröder",
        category: 0,
    },
    {
        name: "Leonardo Di Caprio",
        category: 0,
    },
    {
        name: "Mark Jacobson",
        category: 0,
    },
    {
        name: 'Giuseppe Onufrio',
        category: 0,
    },
    {
        // https://rmi.org/people/jessica-azulay/
        name: "Jessica Azulay",
        category: 0,
    },
    { //professore complottista onde elettromagnetiche
        name: "David O. Carpenter",
        category: 0,
    },
    {
        // petroliere
        name: "Robert Orville Anderson",
        category: 0,
    },

    /// NGOs
    {
        name: "Legambiente",
        category: 1,
    },
    {
        name: "Kyoto Club",
        category: 1,
    },
    {
        name: 'Greenpeace',
        category: 1,
    },
    {
        name: 'Greenpeace UK',
        category: 1,
    },



    ///

    {
        name: "Friends of the Earth",
        category: 1,
    },
    {
        name: "WWF",
        category: 1,
    },
    {
        name: "Leonardo Di Caprio Foundation",
        category: 1,
    },
    {
        name: 'Greenpeace Italia',
        category: 1,
    },
    {
        name: "Natural Resources Defense Council (NRDC)",
        category: 1,
    },
    {
        name: "Global Green USA",
        category: 1,
    },
    {
        name: "International Fund for Animal Welfare (IFAW)",
        category: 1,
    },
    {
        name: "The Solutions Project",
        category: 1,
    },
    {
        name: "Environment America",
        category: 1,
    },
    {
        name: "Sierra Club",
        category: 1,
    },
    {
        name: "Alliance for a Green Economy",
        category: 1,
    },
    {
        name: "Energy Democracy Alliance",
        category: 1,
    },
    {
        name: "Energy Democracy Project",
        category: 1,
    },
    {
        name: "Climate Justice Alliance",
        category: 1,
    },
    {
        name: "Rocky mountain Institute", // RMI
        category: 1,
    },
    {
        name: "West Valley Action Network",
        category: 1,
    },
    {
        name: "Cornell University",
        category: 1,
    },
    {
        name: "Cornell ILR Buffalo Co-Lab",
        category: 1,
    },
    {
        name: "Greenpeace France",
        category: 1,
    },
    {
        name: "Les Amis de la Terre",
        category: 1,
    },



    /// STATE & GOVERNMENTS
    {
        name: "German Government",
        category: 2,
    },
    {
        name: "UK Government",
        category: 2,
    },
    {
        name: "New York",
        category: 2,
    },
    {
        name: "California",
        category: 2,
    },
    {
        name: "European Union",
        category: 2,
    },
    {
        name: "European Investment Bank",
        category: 2,
    },
    {
        name: "French Government",
        category: 2,
    },
    /// PRIVATE COMPANIES
    {
        name: "Gazprom",
        category: 3,
    },
    {
        name: "Ecofys",
        category: 3,
    },
    {
        name: "Atlantic Richfield Oil Company",
        category: 3,
    },
    {
        name: "Siemens",
        category: 3,
    },
    {
        name: "Enercon",
        category: 3,
    },
    {
        name: "Nordex",
        category: 3,
    },
    {
        name: "AzzeroCO2",
        category: 3,
    },

    /// POLITICAL PARTIES
    {
        name: "Die Grünen party",
        category: 4,
    },
    {
        name: "Polish Green Party",
        category: 4,
    },

];


/* 
 ----------------------------------------
*/

links = [
    {
        source: "Greenpeace Italia",
        target: "Giuseppe Onufrio",
        ...LINK_EMPLOYS
    },
    {
        source: "Greenpeace",
        target: "Greenpeace UK",
        ...LINK_CONTROLS
    },
    {
        source: "Greenpeace UK",
        target: "Greenpeace Environmental Trust",
        ...LINK_CONTROLS
    },




    ///
    {
        source: "Greenpeace",
        target: "Greenpeace Italia",
        ...LINK_CONTROLS
    },
    {
        source: "WWF",
        target: "Ecofys",
        ...LINK_EMPLOYS
    },


    {
        source: "Paul Dorfman",
        target: "UK Government",
        ...LINK_INFLUENCE
    },






    {
        source: "Leonardo Di Caprio",
        target: "Leonardo Di Caprio Foundation",
        ...LINK_INFLUENCE
    },
    {
        //https://www.worldwildlife.org/leaders/leonardo-dicaprio
        source: "Leonardo Di Caprio",
        target: "WWF",
        ...LINK_BOARD_MEMBER
    },
    {
        source: "Leonardo Di Caprio",
        target: "Natural Resources Defense Council (NRDC)",
        ...LINK_BOARD_MEMBER
    },
    {
        source: "Leonardo Di Caprio",
        target: "Global Green USA",
        ...LINK_BOARD_MEMBER
    },
    {
        source: "Leonardo Di Caprio",
        target: "International Fund for Animal Welfare (IFAW)",
        ...LINK_BOARD_MEMBER
    },
    {
        source: "Leonardo Di Caprio",
        target: "The Solutions Project",
        ...LINK_INFLUENCE
    },
    {
        source: "Mark Jacobson",
        target: "The Solutions Project",
        ...LINK_INFLUENCE
    },
    {
        source: "Leonardo Di Caprio Foundation",
        target: "Mark Jacobson",
        ...LINK_FINANCES
    },

    //https://thesolutionsproject.org/who-we-are/our-values/our-story/

    {
        source: "The Solutions Project",
        target: "Jessica Azulay",
        ...LINK_INFLUENCE
    },

    //
    {
        source: "Jessica Azulay",
        target: "Alliance for a Green Economy",
        ...LINK_FOUNDER
    },
    {
        source: "Jessica Azulay",
        target: "Energy Democracy Alliance",
        ...LINK_FOUNDER
    },

    //
    {
        source: "Gerard Schröder",
        target: "Gazprom",
        ...LINK_BOARD_MEMBER
    },
    {
        source: "Gerard Schröder",
        target: "German Government",
        ...LINK_INFLUENCE
    },

    //
    {
        source: "Alliance for a Green Economy",
        target: "New York",
        ...LINK_NEAR
    },
    {
        // https://www.allianceforagreeneconomy.org/nuclear-in-new-york/
        source: "Alliance for a Green Economy",
        target: "Cornell ILR Buffalo Co-Lab",
    },
    {
        // https://www.youtube.com/watch?v=q6YEoKZSWtc&t=5004s
        source: "West Valley Action Network",
        target: "Cornell ILR Buffalo Co-Lab",
    },
    {
        source: "West Valley Action Network",
        target: "New York",
        ...LINK_INFLUENCE
    },
    {
        //https://www.westvalleyaction.org/campaigns.php
        source: "West Valley Action Network",
        target: "David O. Carpenter",
        ...LINK_INFLUENCE
    },
    {
        source: "Cornell University",
        target: "Cornell ILR Buffalo Co-Lab",
    },
    {
        source: "Cornell University",
        target: "New York",
        ...LINK_NEAR
    },

    {
        source: "Robert Orville Anderson",
        target: "Atlantic Richfield Oil Company",
        ...LINK_FOUNDER
    },
    {
        source: "Robert Orville Anderson",
        target: "Friends of the Earth",
        ...LINK_FINANCES
    },
    {
        source: "Friends of the Earth",
        target: "Sierra Club",
    },

    //
    {
        source: "Siemens",
        target: "German Government",
    },
    {
        source: "Enercon",
        target: "German Government",
    },
    {
        source: "Nordex",
        target: "German Government",
    },

    //
    {
        source: "German Government",
        target: "European Union",
        ...LINK_INFLUENCE
    },
    {
        source: "European Union",
        target: "European Investment Bank",
        ...LINK_INFLUENCE
    },
    {
        source: "European Investment Bank",
        target: "Siemens",
        ...LINK_FINANCES
    },
    {
        source: "European Investment Bank",
        target: "Enercon",
        ...LINK_FINANCES
    },
    {
        source: "European Investment Bank",
        target: "Nordex",
        ...LINK_FINANCES
    },

    {
        source: "Legambiente",
        target: "AzzeroCO2",
        ...LINK_FOUNDER
    },
    {
        source: "Kyoto Club",
        target: "AzzeroCO2",
        ...LINK_FOUNDER
    },



];

graph_data = graph_data.concat(data)
graph_links = graph_links.concat(links)