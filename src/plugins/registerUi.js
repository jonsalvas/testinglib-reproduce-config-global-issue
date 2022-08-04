import HelloWorld from "@/components/HelloWorld.vue";

export default {
    install(app) {
    app.component("HelloWorld", HelloWorld);
}
}