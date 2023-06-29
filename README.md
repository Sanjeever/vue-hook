# @sanjeever/vue-hook

Collection of essential Vue Composition Utilities

<a href="https://www.npmjs.com/package/@sanjeever/vue-hook"><img src="https://img.shields.io/npm/v/@sanjeever/vue-hook.svg?sanitize=true" alt="Version"></a>

View on [npmjs](https://www.npmjs.com/package/@sanjeever/vue-hook)

## Usage

For Vue3

```shell
npm i @sanjeever/vue-hook
```

---

without

```vue
<script setup lang="ts">
import { ref } from 'vue'

const divInstance = ref<HTMLDivElement>()
const clientHeight = divInstance.value?.clientHeight // <-- 'divInstance.value' is possibly 'undefined'.
</script>

<template>
  <div ref="divInstance" />
</template>
```

with

```vue
<script setup lang="ts">
import { useInstance } from '@sanjeever/vue-hook'

const divInstance = useInstance<typeof HTMLDivElement>()
const clientHeight = divInstance.value.clientHeight
</script>

<template>
  <div ref="divInstance" />
</template>
```
