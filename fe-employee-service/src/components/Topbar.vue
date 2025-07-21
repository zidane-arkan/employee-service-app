<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { logout } from "../services/authService";
import { getCurrentUser } from "../services/userService";
import Breadcrumb from "./Breadcrumb.vue";

const router = useRouter();
const user = ref(null);

const loadUserData = async () => {
  user.value = getCurrentUser();
  console.log("TopBar: User data loaded:", user.value);
};

const handleLogout = () => {
  logout();
  router.push("/login");
};

onMounted(loadUserData);
</script>

<template>
  <div id="TopBar" class="flex items-center justify-between gap-[30px]">
    <!-- BREADCRUMPS -->
    <Breadcrumb />
    <!-- RIGHT BAR -->
    <div class="relative flex items-center justify-end gap-[14px] group">
      <div class="text-right">
        <p class="font-semibold capitalize">{{ user?.username || "User" }}</p>
        <p class="text-sm leading-[21px] text-[#838C9D] capitalize">Hello, there!</p>
      </div>
      <button
        type="button"
        id="profileButton"
        class="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden"
      >
        <span
          class="w-full h-full object-cover bg-blue-400"
        ></span>
      </button>
      <div id="ProfileDropdown" class="absolute top-full hidden group-hover:block">
        <ul
          class="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4"
        >
          <RouterLink to="/admin/account" class="font-semibold">
            <span>My Account</span>
          </RouterLink>
          <button
            @click="handleLogout"
            type="button"
            class="cursor-pointer font-semibold text-left"
          >
            <span>Logout</span>
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
