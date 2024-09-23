import { GoogleGenerativeAI } from "@google/generative-ai";

const gemini = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" })

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
    console.log(totalBudget, totalIncome, totalSpend);
    try {
      const userPrompt = `
        Based on the following financial data:
        - Total Budget: ${totalBudget} USD 
        - Expenses: ${totalSpend} USD 
        - Incomes: ${totalIncome} USD
        Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
      `;
  
      // Send the prompt to the OpenAI API
      const result = await model.generateContent(userPrompt);
  
      // Process and return the response
      const advice = result.response.text;
  
      console.log(advice);
      return advice;
    } catch (error) {
      console.error("Error fetching financial advice:", error);
      return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
    }
  };

export default getFinancialAdvice;