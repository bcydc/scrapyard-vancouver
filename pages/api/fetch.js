// pages/api/fetch-events.js

export default async function handler(req, res) {
    try {
      // Make the request to the external API
      const response = await fetch('https://scrapyard.hackclub.com/api/locations');
      
      // Check if the response is OK
      if (!response.ok) {
        return res.status(response.status).json({ message: 'Failed to fetch data' });
      }
      
      // Parse and send the data back to the client
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  