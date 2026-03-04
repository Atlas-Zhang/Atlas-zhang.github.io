<template>
  <div class="comment-item">
    <div class="comment-avatar">{{ name.charAt(0).toUpperCase() }}</div>
    <div class="comment-body">
      <div class="comment-header">
        <span class="comment-name">{{ name }}</span>
        <span class="comment-time">{{ createAt }}</span>
      </div>
      <p class="comment-text">{{ comment }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  name: { type: String, default: '' },
  comment: { type: String, default: '' },
  createAt: { type: String, default: '' },
})
</script>

<style scoped>
.comment-item {
  display: flex;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #f4f4f5;
}

.comment-item:last-child {
  border-bottom: none;
}

.comment-avatar {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e0e7ff;
  color: #2563eb;
  font-size: 0.9375rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comment-body {
  flex: 1;
  min-width: 0;
}

.comment-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 4px;
}

.comment-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #09090b;
}

.comment-time {
  font-size: 0.75rem;
  color: #a1a1aa;
}

.comment-text {
  font-size: 0.9375rem;
  color: #3f3f46;
  line-height: 1.65;
  word-break: break-word;
}
</style>
