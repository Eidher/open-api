import OpenAIService from "./services/OpenAIService";

(async () => {
  const oai = new OpenAIService();
  await oai.main();
})();
