"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
class OpenAIService {
    constructor() {
        this.openai = new openai_1.default();
    }
    async main() {
        try {
            const completion = await this.openai.chat.completions.create({
                messages: [{
                        role: "system",
                        content: "Your are a helpful assistant."
                    }],
                model: "gpt-3.5-turbo"
            });
            console.log(completion.choices);
        }
        catch (error) {
            console.log('Error in main!');
        }
    }
}
exports.default = OpenAIService;
//# sourceMappingURL=OpenAIService.js.map