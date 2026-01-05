<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const hasSeenPopup = sessionStorage.getItem('hasSeenHomePopup')
  if (!hasSeenPopup) {
    // 延迟 1 秒显示，体验更佳
    setTimeout(() => {
      isVisible.value = true
    }, 1000)
  }
})

const closePopup = () => {
  isVisible.value = false
  sessionStorage.setItem('hasSeenHomePopup', 'true')
}
</script>

<template>
  <div v-if="isVisible" class="popup-overlay" @click="closePopup">
    <div class="popup-content" @click.stop>
      <button class="close-btn" @click="closePopup">×</button>
      <h3>🎉 欢迎访问禅境系统</h3>
      <p>禅境系统（ZenChyn）开源版已发布！</p>
      <p>论坛、软件库、工具箱一体化解决方案</p>
      <div class="popup-actions">
        <a href="https://gitee.com/tyopen/zenchynuniapp" target="_blank" class="action-btn gitee" @click="closePopup">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-13.6 0-25.6 12-25.6 25.6v64c0 13.6 12 25.6 25.6 25.6h176c13.6 0 25.6 12 25.6 25.6v12.8c0 41.6-33.6 75.2-75.2 75.2h-176c-41.6 0-75.2-33.6-75.2-75.2V460.8c0-41.6 33.6-75.2 75.2-75.2h176c13.6 0 25.6-12 25.6-25.6v-64c0-13.6-12-25.6-25.6-25.6H430.4c-113.6 0-204.8 91.2-204.8 204.8v128c0 113.6 91.2 204.8 204.8 204.8h176c113.6 0 204.8-91.2 204.8-204.8V480c0-13.6-12-25.6-25.6-25.6z" fill="currentColor"></path></svg> 前端 Star
        </a>
        <a href="https://gitee.com/tyopen/zenchynadmin" target="_blank" class="action-btn admin" @click="closePopup">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-13.6 0-25.6 12-25.6 25.6v64c0 13.6 12 25.6 25.6 25.6h176c13.6 0 25.6 12 25.6 25.6v12.8c0 41.6-33.6 75.2-75.2 75.2h-176c-41.6 0-75.2-33.6-75.2-75.2V460.8c0-41.6 33.6-75.2 75.2-75.2h176c13.6 0 25.6-12 25.6-25.6v-64c0-13.6-12-25.6-25.6-25.6H430.4c-113.6 0-204.8 91.2-204.8 204.8v128c0 113.6 91.2 204.8 204.8 204.8h176c113.6 0 204.8-91.2 204.8-204.8V480c0-13.6-12-25.6-25.6-25.6z" fill="currentColor"></path></svg> 后端 Star
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  backdrop-filter: blur(4px);
}

.popup-content {
  background: var(--vp-c-bg);
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--vp-c-divider);
  text-align: center;
  animation: popup-in 0.3s ease-out;
}

@keyframes popup-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  line-height: 1;
}

.close-btn:hover {
  color: var(--vp-c-text-1);
}

h3 {
  margin: 0 0 12px;
  color: var(--vp-c-brand-1);
  font-size: 20px;
}

p {
  margin: 8px 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.popup-actions {
  margin-top: 20px;
  display: flex;
  gap: 12px;
  justify-content: center;
}

.action-btn {
  padding: 10px 24px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.action-btn.gitee {
  background: linear-gradient(135deg, #c71d23 0%, #e02d33 100%);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-btn.gitee:hover {
  background: linear-gradient(135deg, #d8252b 0%, #f03e44 100%);
  box-shadow: 0 6px 16px rgba(199, 29, 35, 0.3);
}

.action-btn.admin {
  background: linear-gradient(135deg, #3eaf7c 0%, #42b983 100%);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-btn.admin:hover {
  background: linear-gradient(135deg, #42b983 0%, #56c995 100%);
  box-shadow: 0 6px 16px rgba(62, 175, 124, 0.3);
}
</style>
