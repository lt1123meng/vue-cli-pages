<template>
    <div>
        {{ll}}
    </div>
</template>

<script>
    export default {
        name: "hello",
        data() {
            return {
                ll: 111111111111
            }
        },
        created() {
            alert(1)
        }
    }
</script>