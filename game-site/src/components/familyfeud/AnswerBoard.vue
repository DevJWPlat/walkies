<template>
    <div>
      <h2>Answers</h2>
      <div v-for="(answer, index) in store.answers" :key="index">
        <div v-if="answer.revealed">{{ answer.text }} - {{ answer.points }} pts</div>
        <div v-else>???</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useFamilyFeudStore } from '@/stores/familyFeudStore'
  const store = useFamilyFeudStore()
  </script>
  