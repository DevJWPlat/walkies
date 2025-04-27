<script setup>
import { useFamilyFeudStore } from '@/stores/familyFeudStore'

const store = useFamilyFeudStore()

    import LightBulbs from '@/components/familyfeud/LightBulbs.vue'
  import QuestionDisplay from '@/components/familyfeud/QuestionDisplay.vue'
  import AnswerBoard from '@/components/familyfeud/AnswerBoard.vue'
  import StrikeDisplay from '@/components/familyfeud/StrikeDisplay.vue'
  import TeamScore from '@/components/familyfeud/TeamScore.vue'
</script>

<template>
  <div>
    <h1>{{ store.currentQuestion }}</h1>

    <div v-for="(answer, index) in store.answers" :key="index">
      <div v-if="answer.revealed">{{ answer.text }} ({{ answer.points }} pts)</div>
      <div v-else>???</div>
    </div>

    <div>
      Strikes: {{ store.strikes }}
    </div>

    <div>
      Team A: {{ store.teamScores.teamA }} pts
      Team B: {{ store.teamScores.teamB }} pts
    </div>
  </div>

  <div>
      <LightBulbs />
      <QuestionDisplay />
      <AnswerBoard />
      <StrikeDisplay />
      <TeamScore />
    </div>
</template>

  
