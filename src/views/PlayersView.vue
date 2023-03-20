<script setup>
import { usePlayersStore } from "@/stores/players";
const players = usePlayersStore();
</script>

<template>
  <div v-if="!pending" class="about">
    <table class="table">
      <thead>
        <tr>
          <th>№</th>
          <th>Имя клиента</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td class="table__name">{{ item.name }}</td>
          <td class="table__date">{{ item.birthday }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
