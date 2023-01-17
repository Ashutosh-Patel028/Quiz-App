const calculateScore = (correctAnswers, answers) => {
  const totalQuestions = correctAnswers.length;
  const correctCount = answers.reduce((acc, answer, index) => {
    if (answer === correctAnswers[index]) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  const score = (correctCount / totalQuestions) * 100;
  console.log(`%cCorrect answers: ${correctCount}/${totalQuestions}`, 'color: green');
  console.log(`%cScore: ${score}%`, 'color: green');
  return score;
};

export default calculateScore;
