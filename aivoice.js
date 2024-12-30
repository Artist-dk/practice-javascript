import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({ apiKey: "YOUR_API_KEY" });

await client.textToSpeech.convert("21m00Tcm4TlvDq8ikWAM", {
	model_id: "eleven_multilingual_v2",
	text: "Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்!",
});