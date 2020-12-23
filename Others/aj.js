let keyword = "python";
[...document.links].forEach(e =>
    e.href.includes(keyword) ?
    console.log(e.href) : null
)