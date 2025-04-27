import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useFamilyFeudStore = defineStore('familyFeud', () => {
  // Game state
  const gameState = ref('playing') // 'playing' | 'fastMoney' | 'gameOver'

  // Current question and answers
  const currentQuestion = ref('Name something you find in a kitchen')
  const answers = reactive([
    { text: 'Spoon', revealed: false, points: 20 },
    { text: 'Stove', revealed: false, points: 18 },
    { text: 'Knife', revealed: false, points: 15 },
    { text: 'Fridge', revealed: false, points: 12 },
    { text: 'Plate', revealed: false, points: 10 },
  ])

  // Team scores
  const teamScores = reactive({
    teamA: 0,
    teamB: 0,
  })

  // Strikes
  const strikes = ref(0)

  // ==== Actions ====

  function revealAnswer(index) {
    answers[index].revealed = true
  }

  function addStrike() {
    strikes.value++
  }

  function resetStrikes() {
    strikes.value = 0
  }

  function addPointsToTeam(team, points) {
    if (team === 'teamA') teamScores.teamA += points
    if (team === 'teamB') teamScores.teamB += points
  }

  function nextQuestion(newQuestion, newAnswers) {
    currentQuestion.value = newQuestion
    strikes.value = 0
    answers.splice(0, answers.length, ...newAnswers.map(ans => ({
      text: ans.text,
      revealed: false,
      points: ans.points
    })))
  }

  function setGameState(state) {
    gameState.value = state
  }

  return {
    gameState,
    currentQuestion,
    answers,
    teamScores,
    strikes,
    revealAnswer,
    addStrike,
    resetStrikes,
    addPointsToTeam,
    nextQuestion,
    setGameState,
  }
})
