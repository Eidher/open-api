import OpenAI from "openai";

export default class OpenAIService {
  private readonly openai: OpenAI;

  public constructor() {
    this.openai = new OpenAI();
  }

  public async main() {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: [{
          role: "system",
          content: "Your are a helpful assistant."
        }],
        model: "gpt-3.5-turbo"
      });

      console.log(completion.choices)

    } catch (error) {
      console.log('Error in main!')
    } 
  }
}
