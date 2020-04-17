<template>
  <div>
    <p>{{ data }}</p>
    <p>{{ getMessage('helloWorld2') }}</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data: function () {
    return {
      data: chrome.i18n.getMessage('helloWorld'),
      getMessage: chrome.i18n.getMessage
    };
  },
});
</script>
