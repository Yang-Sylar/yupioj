<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="100px">
      <div>100px</div>
    </a-col>
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="tittle-bar">
            <img class="logo" src="../assets/oj-logo.png" />
            <div class="tittle">我的OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();

const selectedKeys = ref(["/"]);

router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

const store = useStore();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tittle-bar {
  align-items: center;
  display: flex;
}

.tittle {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
