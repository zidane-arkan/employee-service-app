<template>
  <div v-if="visible">
    <div class="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-2">
            <div class="sm:flex sm:flex-col sm:items-center gap-4">
              <div
                class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-20"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-12 h-12 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>

              <div class="my-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  id="dialog-title"
                  class="text-base text-center font-semibold text-gray-900"
                >
                  Operation Failed!
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-center text-gray-500">
                    {{ message }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 pb-6 sm:flex items-center justify-center sm:px-6">
            <button
              @click="$emit('close')"
              type="button"
              class="cursor-pointer inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "An unexpected error occurred. Please try again.",
    },
  },
  emits: ["close"],
};
</script>

<style lang="scss" scoped></style>
