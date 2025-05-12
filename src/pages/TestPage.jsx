import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Paper,
  Typography,
  Container,
  Grid,
} from "@mui/material";

// All 20 questions with their options and weighted answers
const questions = [
  {
    id: 1,
    question: "Solve the following math problem: What is the sum of 23 and 45?",
    options: ["68", "67", "70", "66"],
    weights: [10, 5, 15, 0],
  },
  {
    id: 2,
    question: "If a train travels 60 km in 1 hour, how long will it take to travel 300 km?",
    options: ["5 hours", "4 hours", "6 hours", "3 hours"],
    weights: [10, 0, 20, 5],
  },
  {
    id: 3,
    question: "What is your primary interest in technology?",
    options: ["Software Development", "Data Science", "Artificial Intelligence", "Cybersecurity"],
    weights: [10, 15, 25, 20],
  },
  {
    id: 4,
    question: "How do you prefer to work in a team?",
    options: ["Lead the team", "Collaborate with others", "Support the team", "Work independently"],
    weights: [15, 20, 10, 5],
  },
  {
    id: 5,
    question: "Which of the following describes your personality best?",
    options: ["Outgoing", "Introverted", "Logical", "Creative"],
    weights: [10, 5, 20, 25],
  },
  {
    id: 6,
    question: "What type of projects do you enjoy working on?",
    options: ["Solving complex problems", "Building applications", "Research and development", "Working with data"],
    weights: [25, 15, 20, 10],
  },
  {
    id: 7,
    question: "What kind of environment do you prefer?",
    options: ["Fast-paced", "Collaborative", "Flexible", "Structured"],
    weights: [15, 25, 20, 10],
  },
  {
    id: 8,
    question: "How would you rate your ability to learn new technologies?",
    options: ["Very high", "High", "Moderate", "Low"],
    weights: [20, 15, 10, 0],
  },
  {
    id: 9,
    question: "Which of these areas interests you most?",
    options: ["Coding", "Project management", "Teaching others", "Designing user experiences"],
    weights: [25, 10, 5, 20],
  },
  {
    id: 10,
    question: "Do you enjoy troubleshooting and debugging?",
    options: ["Yes", "Sometimes", "Not really", "Not at all"],
    weights: [20, 15, 10, 5],
  },
  {
    id: 11,
    question: "Which programming languages are you most comfortable with?",
    options: ["Python", "JavaScript", "Java", "C++"],
    weights: [15, 25, 20, 10],
  },
  {
    id: 12,
    question: "How do you approach problem-solving?",
    options: ["Breaking down into smaller parts", "Looking for patterns", "Trial and error", "Relying on intuition"],
    weights: [25, 20, 15, 10],
  },
  {
    id: 13,
    question: "How comfortable are you with public speaking?",
    options: ["Very comfortable", "Somewhat comfortable", "Not very comfortable", "Not at all comfortable"],
    weights: [10, 20, 5, 0],
  },
  {
    id: 14,
    question: "What motivates you to work hard?",
    options: ["Achievement and recognition", "Problem-solving", "Helping others", "Making an impact"],
    weights: [25, 15, 20, 30],
  },
  {
    id: 15,
    question: "What is your preferred learning method?",
    options: ["Hands-on practice", "Reading books/articles", "Watching videos", "Taking online courses"],
    weights: [20, 10, 15, 25],
  },
  {
    id: 16,
    question: "How often do you engage in personal projects?",
    options: ["Regularly", "Occasionally", "Rarely", "Never"],
    weights: [25, 15, 5, 0],
  },
  {
    id: 17,
    question: "How important is work-life balance to you?",
    options: ["Very important", "Somewhat important", "Not very important", "Not important at all"],
    weights: [25, 20, 5, 0],
  },
  {
    id: 18,
    question: "Which of these best describes your ideal career?",
    options: ["Technical expert", "Managerial leader", "Entrepreneur", "Consultant"],
    weights: [25, 20, 30, 15],
  },
  {
    id: 19,
    question: "Do you enjoy working on both the front-end and back-end of applications?",
    options: ["Yes", "No", "Sometimes", "I prefer one side"],
    weights: [20, 5, 15, 25],
  },
  {
    id: 20,
    question: "How do you handle setbacks?",
    options: ["Learn from them", "Try harder", "Seek help", "Give up easily"],
    weights: [25, 20, 15, 0],
  },
];

// Map question IDs to their respective categories
const mapQuestionToCategory = (questionId) => {
  const questionCategoryMapping = {
    1: "aptitude",
    2: "aptitude",
    6: "aptitude",
    7: "aptitude",
    3: "interest",
    8: "interest",
    10: "interest",
    4: "personality",
    5: "personality",
    9: "personality",
    11: "technical",
    12: "technical",
    13: "personality",
    14: "personality",
    15: "interest",
    16: "interest",
    17: "personality",
    18: "interest",
    19: "technical",
    20: "personality",
  };
  return questionCategoryMapping[questionId] || null;
};

// Analyze test responses with advanced weighting
const analyzeTest = (responses) => {
  const categories = {
    aptitude: { weight: 0.4, totalScore: 0, count: 0 },
    interest: { weight: 0.3, totalScore: 0, count: 0 },
    personality: { weight: 0.2, totalScore: 0, count: 0 },
    technical: { weight: 0.1, totalScore: 0, count: 0 },
  };

  Object.entries(responses).forEach(([questionId, value]) => {
    const category = mapQuestionToCategory(parseInt(questionId, 10));
    if (category && categories[category]) {
      categories[category].totalScore += parseInt(value, 10);
      categories[category].count += 1;
    }
  });

  let totalWeightedScore = 0;
  const categoryScores = Object.keys(categories).map((key) => {
    const { totalScore, count, weight } = categories[key];
    const averageScore = count > 0 ? totalScore / count : 0;
    totalWeightedScore += averageScore * weight;
    return {
      category: key,
      averageScore: Math.round(averageScore),
    };
  });

  return {
    score: Math.round(totalWeightedScore),
    categoryScores,
  };
};

// Generate more specific recommendations based on test results
const generateRecommendations = (testResults) => {
  const { score, categoryScores } = testResults;
  const aptitudeScore = categoryScores.find(category => category.category === "aptitude")?.averageScore || 0;
  const interestScore = categoryScores.find(category => category.category === "interest")?.averageScore || 0;
  const personalityScore = categoryScores.find(category => category.category === "personality")?.averageScore || 0;
  const technicalScore = categoryScores.find(category => category.category === "technical")?.averageScore || 0;

  let message = "Based on your responses, we suggest the following:";
  let careerOptions = [];
  let courses = [];
  let counselorRecommendation = "";

  // Advanced recommendation logic
  if (aptitudeScore > 75 && technicalScore > 70) {
    message = "You have strong technical and analytical skills!";
    careerOptions = ["Software Engineer", "Data Scientist", "AI Specialist", "Machine Learning Engineer"];
    courses = ["Advanced Machine Learning", "Deep Learning", "AI Ethics", "Cloud Computing"];
  } else if (interestScore > 70 && personalityScore > 60) {
    message = "You seem to enjoy creative and innovative work!";
    careerOptions = ["Product Manager", "UX/UI Designer", "Creative Director"];
    courses = ["Product Design", "User Experience Research", "Creative Problem Solving"];
  } else if (personalityScore > 60 && aptitudeScore > 50) {
    message = "You have great interpersonal and problem-solving abilities.";
    careerOptions = ["Consultant", "Project Manager", "Operations Manager"];
    courses = ["Leadership Skills", "Project Management", "Business Strategy"];
  } else {
    message = "You might enjoy more structured roles.";
    careerOptions = ["Technical Support Engineer", "System Administrator"];
    courses = ["System Administration", "Network Security", "Software Testing"];
  }

  return { message, careerOptions, courses, counselorRecommendation };
};

const CareerQuiz = () => {
  const [responses, setResponses] = useState({});
  const [testResults, setTestResults] = useState(null);

  const handleResponse = (questionId, value) => {
    setResponses((prevResponses) => ({ ...prevResponses, [questionId]: value }));
  };

  const handleSubmit = () => {
    const results = analyzeTest(responses);
    setTestResults(results);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Career Quiz
        </Typography>
        <form>
          {questions.map((question) => (
            <div key={question.id}>
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <FormLabel>{question.question}</FormLabel>
                <RadioGroup
                  value={responses[question.id] || ""}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                >
                  {question.options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={question.weights[index]}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            sx={{ marginTop: 3 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
      {testResults && (
        <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Career Quiz Results
          </Typography>
          <Typography variant="body1">
            Combined Test Score: {testResults.score} / 20
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {testResults.categoryScores.map((category, index) => (
              <Grid item xs={6} key={index}>
                <Typography variant="body1">{category.category}: {category.averageScore}</Typography>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {generateRecommendations(testResults).message}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Recommended Career Options: {generateRecommendations(testResults).careerOptions.join(", ")}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Recommended Courses: {generateRecommendations(testResults).courses.join(", ")}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default CareerQuiz;
