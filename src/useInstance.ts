import { ref } from 'vue'
import type { Component, Ref } from 'vue'

/**
 * 断言组件实例类型
 * ref : https://juejin.cn/post/7244818419601817637
 *
 * usage:
 * ```vue
 * <script setup lang="ts">
 * import { Foo } from '@/components/foo.vue'
 * import { useInstance } from '@sanjeever/vue-hook'
 *
 * const fooInstance = useInstance<typeof Foo>()
 * </script>
 *
 * <template>
 * <Foo ref="fooInstance" />
 * </template>
 * ```
 */
export function useInstance<
  T extends abstract new (...args: any[]) => Component,
>() {
  return ref() as Ref<InstanceType<T>>
}
