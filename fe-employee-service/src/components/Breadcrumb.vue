<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const breadcrumbs = computed(() => {
  const pathParts = route.path.split("/").filter(Boolean);

  const crumbs = pathParts.map((part, index) => {
    const to = "/" + pathParts.slice(0, index + 1).join("/");
    return {
      label: part.charAt(0).toUpperCase() + part.slice(1),
      to,
      isLast: index === pathParts.length - 1,
    };
  });

  return crumbs;
});
</script>

<template>
  <nav
    class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <RouterLink
          to="/"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          <svg class="w-3 h-3 me-2.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
            />
          </svg>
          Home
        </RouterLink>
      </li>

      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="inline-flex items-center"
      >
        <svg
          class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span v-if="crumb.isLast" class="text-sm font-medium text-gray-500 capitalize">
          {{ crumb.label }}
        </span>
        <RouterLink
          v-else
          :to="crumb.to"
          class="text-sm font-medium text-gray-700 hover:text-blue-600 capitalize"
        >
          {{ crumb.label }}
        </RouterLink>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped></style>
