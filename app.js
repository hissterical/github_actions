const apikey = process.env.WEATHER_API_KEY;

if (!apikey) {
    console.error("Error: WEATHER_API_KEY environment variable is not set.");
    process.exit(1);
}

console.log(`Your API key is: ${apikey}`);