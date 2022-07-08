<template>
  <div>
    <VDropdown>
        <VDropdownButton
          :class="{
            'bg-gray-100 dark:bg-gray-400 text-gray-600 dark:text-gray-400 dark:bg-opacity-20': current.value == 0,
            'bg-blue-100 dark:bg-blue-400 text-blue-600 dark:text-blue-400 dark:bg-opacity-20': current.value == 1,
            'bg-yellow-100 dark:bg-yellow-400 text-yellow-600 dark:text-yellow-400 dark:bg-opacity-20': current.value == 2,
            'bg-orange-100 dark:bg-orange-400 text-orange-600 dark:text-orange-400 dark:bg-opacity-20': current.value == 3,
            'bg-red-100 dark:bg-red-400 text-red-600 dark:text-red-400 dark:bg-opacity-20': current.value == 4,
          }"
          class="rounded transition font-medium h-full text-sm whitespace-nowrap px-4 flex items-center justify-center"
        >{{ current.name }}</VDropdownButton>
      <VDropdownItems>
        <VDropdownItem
          @click="update(option)"
          v-for="option in options"
          :key="option.value"
        >
          <span>{{ option.value }} - {{ option.name }}</span>
        </VDropdownItem>
      </VDropdownItems>
    </VDropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

//@ts-ignore
import { useField, VDropdown, VDropdownButton, VDropdownItems, VDropdownItem } from 'taskday';

interface Option {
  name: string
  value: number,
}

export default defineComponent({
  components: {
    VDropdown,
    VDropdownButton,
    VDropdownItems,
    VDropdownItem,
  },
  setup() {
    const { state, onChange } = useField();

    const options = [
      { value: 0, name: 'No priority' },
      { value: 1, name: 'Low'         },
      { value: 2, name: 'Medium'      },
      { value: 3, name: 'High'        },
      { value: 4, name: 'Urgent!'      },
    ]

    const current = computed(() => {
      return options.find((option: Option) => option.value == state.value) ?? options[0];
    });

    function update(option: Option) {
      state.value = `${option.value}`;
      onChange();
    }

    return { current, options, update };
  },
});
</script>
