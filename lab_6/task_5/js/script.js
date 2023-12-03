const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
  
const tagCounts = {};
  
tweets.forEach((tweet) => {
    tweet.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
});
  
console.log(tagCounts);
