<script setup>
defineProps({
    question: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <!-- <h1>{{ question.title }}</h1> -->

    <p>ID: {{ question.id }}</p>
    <p>Title: {{ question.title }}</p>
</template>
