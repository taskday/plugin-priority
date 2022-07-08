import PriorityField from './components/PriorityField.vue';

document.addEventListener('taskday:init', () => {
  taskday.register('priority', {
    field: PriorityField
  });
})

