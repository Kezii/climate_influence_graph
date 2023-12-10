data = [
    {
        name: "The 100% Network",
        category: 1,
    },
]

links = [
    //https://thesolutionsproject.org/who-we-are/our-values/our-story/
    {
        source: "The Solutions Project",
        target: "The 100% Network",
        ...LINK_FOUNDER
    },
    {
        source: "Sierra Club",
        target: "The 100% Network",
        ...LINK_FOUNDER
    },
    {
        source: "Environment America",
        target: "The 100% Network",
        ...LINK_FOUNDER
    },

];

graph_data = graph_data.concat(data)
graph_links = graph_links.concat(links)