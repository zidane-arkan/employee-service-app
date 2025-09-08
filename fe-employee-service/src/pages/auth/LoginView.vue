<template>
  <form
    @submit.prevent="handleLogin"
    class="flex flex-col w-[400px] h-fit rounded-[20px] border border-[#262A56] p-[30px] gap-[30px] bg-[#080A2A] m-auto"
  >
    <div>
      <h1 class="font-bold text-[26px] leading-[39px] text-white">Welcome Back!</h1>
      <p class="text-[#6B6C7F]">Manage your employees easily</p>
    </div>
    <hr class="border-[#262A56]" />
    <div
      class="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]"
    >
      <img
        src="../../assets/images/icons/sms-white.svg"
        class="w-6 h-6 flex shrink-0"
        alt="icon"
      />
      <input
        type="email"
        name="email"
        id="email"
        v-model="form.identifier"
        class="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
        placeholder="Write your email address"
      />
    </div>
    <div>
      <div
        class="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]"
      >
        <img
          src="../../assets/images/icons/key-white.svg"
          class="w-6 h-6 flex shrink-0"
          alt="icon"
        />
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
          class="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
          placeholder="Type your secure password"
        />
      </div>
      <div class="flex justify-end mt-[10px]">
        <a href="#" class="text-sm leading-[21px] text-[#662FFF] hover:underline"
          >Forgot Password</a
        >
      </div>
    </div>
    <hr class="border-[#262A56]" />
    <button
      type="submit"
      class="w-full rounded-full border p-[14px_20px] text-center font-semibold text-white bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
    >
      Sign In to Manage
    </button>
  </form>
</template>

<script>
import { login } from "../../services/authService";

export default {
  data() {
    return {
      form: {
        identifier: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await login(this.form);
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("user", JSON.stringify(res.user));
        alert(`Selamat datang, ${res.user.username}`);
        this.$router.push("/admin");
      } catch (err) {
        alert("Login gagal. Periksa email dan password.");
        console.error(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
