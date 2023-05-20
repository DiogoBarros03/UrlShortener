function validateUrl(req, res, next) {
    const url = req.body.url; // Assuming the URL is sent in the request body
  
    // Regular expression pattern for URL validation
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z0-9-]{2,}(\/[\w-]+)*\/?(\?[\w-]+=[\w%&]*)?(#[\w\-]*)?$/;
    
    // Test the URL against the pattern
    if (!urlPattern.test(url)) {
      return res.status(400).json({ error: 'Invalid URL' });
    }
  
    // If the URL is valid, continue to the next middleware or route handler
    next();
  }

  module.exports = validateUrl;