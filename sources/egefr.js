// https://www.ege.fr/sites/ege.fr/files/media_files/German_Interference_Political_Foundations.pdf

data = [
    {
        name: "Heinrich Böll Foundation",
        category: 1,
    },

    {
        name: "Rosa Luxemburg Foundation",
        category: 1,
    },

    {
        name: "Réseau Action Climat (RAC)",
        category: 1,
    },

]

links = [
    {
        source: "German Government",
        target: "Heinrich Böll Foundation",
        ...LINK_FINANCES
    },
    {
        source: "Heinrich Böll Foundation",
        target: "Réseau Action Climat (RAC)",
        ...LINK_FINANCES
    },
    {
        source: "Heinrich Böll Foundation",
        target: "Greenpeace France",
        ...LINK_FINANCES
    },
    {
        source: "Heinrich Böll Foundation",
        target: "Les Amis de la Terre",
        ...LINK_FINANCES
    },

    {
        target: "Heinrich Böll Foundation",
        source: "Die Grünen party",
    },
    {
        source: "Heinrich Böll Foundation",
        target: "Polish Green Party",
        ...LINK_FOUNDER
    },
    {
        source: "German Government",
        target: "Rosa Luxemburg Foundation",
        ...LINK_FINANCES
    },

    {
        source: "Réseau Action Climat (RAC)",
        target: "Greenpeace France",
    },
    {
        source: "Réseau Action Climat (RAC)",
        target: "Les Amis de la Terre",
    },
    {
        source: "Réseau Action Climat (RAC)",
        target: "French Government",
        ...LINK_INFLUENCE
    },
];

graph_data = graph_data.concat(data)
graph_links = graph_links.concat(links)