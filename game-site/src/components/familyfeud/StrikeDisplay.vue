<template>
    <div>
      <h3>Strikes: {{ store.strikes }}</h3>
    </div>
  </template>
  
  <script setup>
  import { useFamilyFeudStore } from '@/stores/familyFeudStore'
  const store = useFamilyFeudStore()
  </script>
  