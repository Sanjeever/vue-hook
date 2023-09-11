import type { ComputedRef } from 'vue'
import { computed } from 'vue'

export function useComputed<A extends unknown[], R>(
  fn: (...args: A) => R,
): (...args: A) => R {
  const cache = new Map<A, ComputedRef<R>>()

  const compare = (args1: A, args2: A): boolean => {
    return (
      args1.length === args2.length
      && args1.every((arg, index) => Object.is(arg, args2[index]))
    )
  }

  function getCache(args: A): R | undefined {
    const keys = [...cache.keys()]
    const key = keys.find(key => compare(key, args))
    if (key)
      return cache.get(key)?.value
  }

  return function (...args: A) {
    const cacheResult = getCache(args)
    if (cacheResult)
      return cacheResult

    const result = computed(() => fn(...args))
    cache.set(args, result)
    return result.value
  }
}
