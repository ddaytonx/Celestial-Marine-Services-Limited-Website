'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
Object.defineProperty(exports, '__esModule', { value: true })
var AppNavbar_vue_1 = require('@/components/AppNavbar.vue')
var AppFooter_vue_1 = require('@/components/AppFooter.vue')
var __VLS_ctx = {}
var __VLS_components
var __VLS_intrinsics
var __VLS_directives
__VLS_asFunctionalElement1(
  __VLS_intrinsics.div,
  __VLS_intrinsics.div,
)(__assign({ class: 'app-layout' }))
/** @type {__VLS_StyleScopedClasses['app-layout']} */ var __VLS_0 = AppNavbar_vue_1.default
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}))
var __VLS_2 = __VLS_1.apply(
  void 0,
  __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false),
)
__VLS_asFunctionalElement1(
  __VLS_intrinsics.main,
  __VLS_intrinsics.main,
)(__assign({ class: 'main' }))
/** @type {__VLS_StyleScopedClasses['main']} */ var __VLS_5
/** @ts-ignore @type {typeof __VLS_components.routerView | typeof __VLS_components.RouterView} */
routerView
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}))
var __VLS_7 = __VLS_6.apply(
  void 0,
  __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false),
)
var __VLS_10 = AppFooter_vue_1.default
// @ts-ignore
var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}))
var __VLS_12 = __VLS_11.apply(
  void 0,
  __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_11), false),
)
var __VLS_export = (
  await Promise.resolve().then(function () {
    return require('vue')
  })
).defineComponent({})
exports.default = {}
