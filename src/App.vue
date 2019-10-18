<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>  
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        key() {
            return this.$route.name !== undefined
                ? this.$route.name + new Date()
                : this.$route + new Date();
        }
    }
};
</script>

<style>
#app {
    height: 100%;
    width: 100%;
}
</style>
