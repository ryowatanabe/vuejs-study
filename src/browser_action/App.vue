<template>
  <p>{{ data }}</p>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data: function() {
    return {
      data: 'hello'
    }
  }
});
</script>
