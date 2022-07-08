var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const computed = window["Vue"].computed;
const defineComponent = window["Vue"].defineComponent;
const useField = window["Components"].useField;
const VDropdown = window["Components"].VDropdown;
const VDropdownButton = window["Components"].VDropdownButton;
const VDropdownItems = window["Components"].VDropdownItems;
const VDropdownItem = window["Components"].VDropdownItem;
const _sfc_main = defineComponent({
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: false
    }
  },
  components: {
    VDropdown,
    VDropdownButton,
    VDropdownItems,
    VDropdownItem
  },
  setup(props) {
    const { state, onChange } = useField();
    const options = [
      { value: 0, name: "No priority" },
      { value: 1, name: "Low" },
      { value: 2, name: "Medium" },
      { value: 3, name: "High" },
      { value: 4, name: "Urgent!" }
    ];
    const current = computed(() => {
      var _a, _b;
      if (props.readonly) {
        return (_a = options.find((option) => option.value == props.value)) != null ? _a : options[0];
      }
      return (_b = options.find((option) => option.value == state.value)) != null ? _b : options[0];
    });
    function update(option) {
      state.value = `${option.value}`;
      onChange();
    }
    return { current, options, update };
  }
});
const _toDisplayString = window["Vue"].toDisplayString;
const _normalizeClass = window["Vue"].normalizeClass;
const _createElementVNode = window["Vue"].createElementVNode;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const _createTextVNode = window["Vue"].createTextVNode;
const _resolveComponent = window["Vue"].resolveComponent;
const _withCtx = window["Vue"].withCtx;
const _createVNode = window["Vue"].createVNode;
const _renderList = window["Vue"].renderList;
const _Fragment = window["Vue"].Fragment;
const _createBlock = window["Vue"].createBlock;
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VDropdownButton = _resolveComponent("VDropdownButton");
  const _component_VDropdownItem = _resolveComponent("VDropdownItem");
  const _component_VDropdownItems = _resolveComponent("VDropdownItems");
  const _component_VDropdown = _resolveComponent("VDropdown");
  return _openBlock(), _createElementBlock("span", null, [
    _ctx.readonly ? (_openBlock(), _createElementBlock("span", _hoisted_1, [
      _createElementVNode("span", {
        class: _normalizeClass({
          "bg-gray-100 dark:bg-gray-400 text-gray-600 dark:text-gray-400 dark:bg-opacity-20": _ctx.current.value == 0,
          "bg-blue-100 dark:bg-blue-400 text-blue-600 dark:text-blue-400 dark:bg-opacity-20": _ctx.current.value == 1,
          "bg-yellow-100 dark:bg-yellow-400 text-yellow-600 dark:text-yellow-400 dark:bg-opacity-20": _ctx.current.value == 2,
          "bg-orange-100 dark:bg-orange-400 text-orange-600 dark:text-orange-400 dark:bg-opacity-20": _ctx.current.value == 3,
          "bg-red-100 dark:bg-red-400 text-red-600 dark:text-red-400 dark:bg-opacity-20": _ctx.current.value == 4
        })
      }, _toDisplayString(_ctx.current.name), 3)
    ])) : (_openBlock(), _createBlock(_component_VDropdown, { key: 1 }, {
      default: _withCtx(() => [
        _createVNode(_component_VDropdownButton, {
          class: _normalizeClass([{
            "bg-gray-100 dark:bg-gray-400 text-gray-600 dark:text-gray-400 dark:bg-opacity-20": _ctx.current.value == 0,
            "bg-blue-100 dark:bg-blue-400 text-blue-600 dark:text-blue-400 dark:bg-opacity-20": _ctx.current.value == 1,
            "bg-yellow-100 dark:bg-yellow-400 text-yellow-600 dark:text-yellow-400 dark:bg-opacity-20": _ctx.current.value == 2,
            "bg-orange-100 dark:bg-orange-400 text-orange-600 dark:text-orange-400 dark:bg-opacity-20": _ctx.current.value == 3,
            "bg-red-100 dark:bg-red-400 text-red-600 dark:text-red-400 dark:bg-opacity-20": _ctx.current.value == 4
          }, "rounded transition font-medium h-full text-sm whitespace-nowrap px-4 flex items-center justify-center"])
        }, {
          default: _withCtx(() => [
            _createTextVNode(_toDisplayString(_ctx.current.name), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        _createVNode(_component_VDropdownItems, null, {
          default: _withCtx(() => [
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, (option) => {
              return _openBlock(), _createBlock(_component_VDropdownItem, {
                onClick: ($event) => _ctx.update(option),
                key: option.value
              }, {
                default: _withCtx(() => [
                  _createElementVNode("span", null, _toDisplayString(option.value) + " - " + _toDisplayString(option.name), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }))
  ]);
}
var PriorityField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
document.addEventListener("taskday:init", () => {
  taskday.register("priority", {
    field: PriorityField
  });
});
