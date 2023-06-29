# @sanjeever/vue-hook

Collection of essential Vue Composition Utilities

<a href="https://www.npmjs.com/package/@sanjeever/vue-hook"><img src="https://img.shields.io/npm/v/@sanjeever/vue-hook.svg?sanitize=true" alt="Version"></a>

View on [npmjs](https://www.npmjs.com/package/@sanjeever/vue-hook)

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
