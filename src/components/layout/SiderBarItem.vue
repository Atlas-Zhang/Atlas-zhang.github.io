<template>
  <li v-if="children && children.length > 0">
    <button
      type="button"
      class="sidebar-item w-full text-left"
      data-collapse-toggle="dropdown-example"
      aria-controls="dropdown-example"
    >
      <span class="flex-1">{{ name }}</span>
      <svg class="w-3.5 h-3.5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>
    <ul id="dropdown-example" class="hidden pl-3 mt-0.5 space-y-0.5">
      <li v-for="(item, index) in children" :key="index">
        <a @click="skipView(item)" class="sidebar-item block">{{ item.name }}</a>
      </li>
    </ul>
  </li>

  <li v-else>
    <a @click="changeTag" class="sidebar-item flex items-center justify-between">
      <span>{{ name }}</span>
      <span class="count-badge">{{ totalNum }}</span>
    </a>
  </li>
</template>

<script setup>
import router from '@/router'
import { defineEmits, defineProps } from 'vue'

const emitFunc = defineEmits(['changeTagId'])
const Props = defineProps({
  name: { type: String, default: '' },
  totalNum: { type: Number, default: 0 },
  tagId: { type: String, default: '' },
  children: { type: Array, default: () => [] },
})

function skipView(item) {
  if (item.link) {
    router.push(item.link)
    emitFunc('changeTagId', item.link)
  }
}

function changeTag() {
  emitFunc('changeTagId', Props.tagId)
}
</script>

<style scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 7px 10px;
  font-size: 0.875rem;
  color: #3f3f46;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s;
}

.sidebar-item:hover {
  background: #ffffff;
  color: #09090b;
}

.count-badge {
  font-size: 0.7rem;
  color: #a1a1aa;
  background: #e4e4e7;
  border-radius: 10px;
  padding: 1px 7px;
  font-weight: 500;
}
</style>
