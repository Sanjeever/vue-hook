# @sanjeever/vue-hook

Collection of essential Vue Composition Utilities

## Usage

For Vue3

```shell
npm i @sanjeever/vue-hook
```

```vue
<script setup lang="ts">
import { Foo } from '@/components/foo.vue'
import { useInstance } from '@sanjeever/vue-hook'

const fooInstance = useInstance<typeof Foo>()
</script>

<template>
  <Foo ref="fooInstance" />
</template>
```
