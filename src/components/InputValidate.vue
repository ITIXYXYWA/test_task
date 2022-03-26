<script lang="ts">
interface DataValidate {
  statusValidate: string;
}

export default {
  data(): DataValidate {
    return {
      statusValidate: "Status of email",
    };
  },

  methods: {
    check(value: string): void {
      const re = new RegExp(
        /^((([0-9A-Za-z]{1}[-0-9A-z\\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
      );

      this.statusValidate = value.match(re) ? "ok!" : "false";
    },
  },
};
</script>

<template>
  <div class="status">{{ statusValidate }}</div>

  <input
    placeholder="write your email"
    type="email"
    class="input_validate"
    name="mail"
    id="mail"
    @keyup="check($event.target.value)"
  />
  <p></p>
</template>

<style scoped>
.status {
  text-align: center;
  font-weight: bold;
}

.input_validate {
  width: 200px;
  height: 20px;
}
</style>
