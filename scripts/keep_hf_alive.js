/**
 * Script used to periodically ping the Hugging Face API
 * This keeps the space awake and prevents cold starts for users
 * Designed to run via GitHub Actions cron job.
 */

// We import the fetch API which is native in Node 18+
const HF_ENDPOINT = "https://venugopinath-resume-assistant.hf.space/api/predict";
// We ideally pass the token via environment variable in GH Actions to avoid exposing it,
// but for the sake of the portfolio, we can use the same encrypted-style token from constants
const HF_TOKEN = process.env.HF_TOKEN || "SURaUU1PYUhabGhXUE92ekdHVnNYcWJDV1ljbVNUdXRYX2Zo";

// A list of benign prompts to simulate varied activity
const PROMPTS = [
    "Hello, just checking your system status. Are you online?",
    "What is the current uptime of this service?",
    "System ping: please acknowledge receipt.",
    "Can you provide a brief summary of ZoFit's mission?",
    "What is your approach to Agentic workflow?",
    "Are all systems nominal?",
    "Testing 1, 2, 3. Checking LLM latency.",
    "Please say 'Hello World'.",
    "Describe what an AI Product Manager does in one sentence.",
    "Just a routine health check."
];

async function pingHuggingFace() {
    try {
        console.log("Starting Hugging Face health check...");

        // Select a random prompt
        const randomPrompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
        console.log(`Selected prompt: "${randomPrompt}"`);

        const requestPayload = {
            data: [
                randomPrompt,
                "Visitor: Hello\nAssistant: Hi there! I'm Venu's AI Assistant.", // Dummy history
            ],
            fn_index: 0
        };

        // Decrypt the token the same way the app does to authorize correctly
        const tokenString = Buffer.from(HF_TOKEN, 'base64').toString('ascii').split('').reverse().join('');

        let currentEndpoint = HF_ENDPOINT;

        let response = await fetch(currentEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenString}`
            },
            body: JSON.stringify(requestPayload)
        });

        if (response.status === 404 && currentEndpoint.includes('/api/predict')) {
            console.log("Got 404 on standard predict, trying Gradio 4 format (/gradio_api/call/predict)...");
            currentEndpoint = currentEndpoint.replace('/api/predict', '/gradio_api/call/predict');
            response = await fetch(currentEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenString}`
                },
                body: JSON.stringify(requestPayload)
            });
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} url: ${currentEndpoint}`);
        }

        const data = await response.json();

        console.log("Health check successful!");
        console.log("Response text snippet:", data?.data?.[0]?.substring(0, 100) + "...");

        return true;
    } catch (error) {
        console.error("Health check failed:", error);
        process.exit(1);
    }
}

pingHuggingFace();
