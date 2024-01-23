function extractDomain(url) {
    // Regular expression pattern to extract domain
    const domainPattern = /^(?:https?:\/\/)?(?:www\.)?([^\/?#]+)/;
  
    // Use match() to find the domain pattern in the URL
    const match = url.match(domainPattern);
  
    if (match && match.length > 1) {
      return match[1]; // Return the captured domain
    } else {
      return null; // Return null if no domain is found
    }
}
  
// Test cases
const urls = [
    "http://eksempel.com/projekt/folder2",
    "www.enandenside.dk",
    "https://www.example.com",
    "www.examplepage.zone/about"
];

urls.forEach(url => {
    const domain = extractDomain(url);
    console.log(`${url} -> ${domain}`);
});