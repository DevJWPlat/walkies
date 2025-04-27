<template>
    <div>
      <h3>Scores</h3>
      <p>Team A: {{ store.teamScores.teamA }} pts</p>
      <p>Team B: {{ store.teamScores.teamB }} pts</p>
    </div>
  </template>
  
  <script setup>
  import { useFamilyFeudStore } from '@/stores/familyFeudStore'
  const store = useFamilyFeudStore()
  </script>
  