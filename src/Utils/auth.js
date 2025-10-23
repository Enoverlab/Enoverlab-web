const TOKEN_KEY = "enoverlab_chat_token";

export const authUtils = {
  // Get token from localStorage
  getToken() {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  // Set token in localStorage
  setToken(token) {
    if (typeof window === "undefined") return;
    localStorage.setItem(TOKEN_KEY, token);
  },

  // Remove token from localStorage
  removeToken(){
    if (typeof window === "undefined") return;
    localStorage.removeItem(TOKEN_KEY);
  },

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  },
};

// Mock API call to submit user details and get token
export async function submitUserDetails(data){
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock response - in real app, this would be a backend call
  const mockToken = `mock_jwt_token_${Date.now()}_${Math.random().toString(36).substring(7)}`;

  return {
    token: mockToken,
    success: true,
  };
}

// Mock API call to send a question with authentication
export async function sendQuestion(
  question,
  token
) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate token validation (10% chance of invalid token for testing)
  const tokenValid = Math.random() > 0.1;

  if (!tokenValid) {
    return {
      response: "",
      success: false,
      tokenValid: false,
    };
  }

  // Mock responses and follow-up questions based on question
  const responseData = {
    "Product Management training": {
      response: `We offer Product Management training for beginners in tech.
It is a 12-week program consisting of in-depth training, mentorship, and career coaching.

We have self-paced, online & onsite training.
Which of the training would you like to sign up for - self-paced, online, or onsite?`,
      followUps: [
        "What are the requirements to take the training?",
        "How much is the training tuition fees?",
        "What is the difference between self-paced, online, and onsite?",
      ],
    },

    "Training requirements": {
      response: `HERE ARE THE REQUIREMENTS👇

•  Your willingness to learn and work 
•  A working laptop and Internet
•  The training tuition fee`,
      followUps: [
        "How much is the training tuition fees?",
        "Where are your onsite learning centres?",
        "What is the difference between self-paced, online, and onsite?",
      ],
    },

    "Tuition fees": {
      response: `Here is the tuition

Self paced - N100,000 
Online - N300,000
Onsite (Yaba, Ibadan, Abuja, Anambra) - N300,000 
Onsite (Lekki, Ikeja) - N400,000

You can split the payment for online and onsite in two or three payments.`,
      followUps: [
        "How much is the training tuition fees?",
        "Where are your onsite learning centres?",
        "What is the difference between self-paced, online, and onsite?",
      ],
    },

    "What is the difference between self-paced, online, and onsite?": {
      response: `•  Self paced is for anyone who wants to learn with pre-recorded videos at their own pace, schedule, and time online.
•  Online is for anyone who wants to learn in a live online instructor-led class
•  Onsite is for anyone who wants to learn at any of our in-person learning centres across Nigeria.`,
      followUps: [
        "Where are your onsite learning centres?",
        "What is the difference between self-paced, online, and onsite?",
        "What are the benefits of learning at Enoverlab?",
      ],
    },

    "What are the benefits of learning at Enoverlab?": {
      response: `•  12 weeks of training, mentorship, and career coaching
•  6 hours coaching on how to get a Product Manager Job
•  A globally recognised certificate by the American Council of Training and Development (ACTD)
•  Product Manager Job recommendations to companies when they are available
•  Access to a community of 2,000+ Product Managers from across the globe
•  CV guide, LinkedIn review, and interview prep for product manager role
•  Access to product management resources for life
•  A fun, empowering, and memorable learning experience`,
      followUps: [
        "Where are your onsite learning centres?",
        "What are the benefits of learning at Enoverlab?",
        "How much is the training tuition fees?",
      ],
    },

    "Where are your onsite learning centres?": {
      response: `Our onsite learning centres are located in:

• Yaba, Lagos
• Lekki, Lagos
• Ikeja, Lagos
• Ibadan, Oyo State
• Abuja, FCT
• Anambra State

You can choose the location most convenient for you!`,
      followUps: [
        "How much is the training tuition fees?",
        "What is the difference between self-paced, online, and onsite?",
        "What are the benefits of learning at Enoverlab?",
      ],
    },
  };

  const data = responseData[question] || {
    response: `Thank you for your question about "${question}". Our team will provide you with detailed information shortly. In the meantime, feel free to ask about our training programs, requirements, or fees!`,
    followUps: [
      "What are the requirements to take the training?",
      "How much is the training tuition fees?",
      "What are the benefits of learning at Enoverlab?",
    ],
  };

  return {
    response: data.response,
    followUpQuestions: data.followUps,
    success: true,
    tokenValid: true,
  };
}
