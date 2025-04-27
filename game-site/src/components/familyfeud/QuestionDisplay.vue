<template>
    <div>
      <h2>Question:</h2>
      <p>{{ store.currentQuestion }}</p>
    </div>
  </template>
  
  <script setup>
  import { useFamilyFeudStore } from '@/stores/familyFeudStore'
  const store = useFamilyFeudStore()
  </script>
  