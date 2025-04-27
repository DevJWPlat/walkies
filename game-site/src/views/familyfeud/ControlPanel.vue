<template>
    <div>
      <h2>Control Panel</h2>
      <div v-for="(answer, index) in store.answers" :key="index">
        <button @click="store.revealAnswer(index)">
          Reveal: {{ answer.text }}
        </button>
      </div>
  
      <div>
        <button @click="store.addStrike">Add Strike</button>
      </div>
  
      <div>
        <button @click="store.addPointsToTeam('teamA', 20)">Add 20 pts to Team A</button>
        <button @click="store.addPointsToTeam('teamB', 20)">Add 20 pts to Team B</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useFamilyFeudStore } from '@/stores/familyFeudStore'
  const store = useFamilyFeudStore()
  </script>
  