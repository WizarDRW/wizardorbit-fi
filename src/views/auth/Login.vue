<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Your Username *"
        hide-bottom-space
        :rules="[(val) => (val && val.length > 0) || 'Please enter username!']"
      />

      <q-input
        filled
        type="password"
        v-model="key"
        label="Your Key *"
        hide-bottom-space
        counter
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your key',
          (val) => (val.length > 50 && val.length < 100) || 'Please type a real key',
        ]"
      />

      <div>
        <q-btn @click="auth()" label="Submit" color="primary" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      key: null
    }
  },
  methods: {
    auth(){
      if (this.username && this.key) {
        this.$store.dispatch('login')
      }
    }
  },
};
</script>

<style lang="">
</style>