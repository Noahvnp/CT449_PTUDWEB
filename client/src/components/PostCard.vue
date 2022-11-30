<template>
    <div class="container card mt-4 mb-4">
        <img class="card-img-top" :src="`http://localhost:5000/${post.image}`" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
            <p class="card-text"><small class="text-muted">Thời gian tạo: {{ post.created }}</small></p>
            <router-link :to="{
                name: 'edit-post',
                params: { id: post._id }
            }">
                <a href="/" class="card-link btn btn-primary mr-4">Chỉnh sửa</a>
            </router-link>
            <a href="/" class="card-link btn btn-danger" @click="deletePost(post._id)">Xoá</a>
        </div>
    </div>
</template>

<script>
import PostService from "@/services/post.service";
export default {
    name: "Edit Post",
    // components: {
    //     PostGrid,
    // },
    data() {
        return { post: {}, };
    },
    async created() {
        try {
            const response = await PostService.get(this.$route.params.id);
            this.post = response;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async deletePost(id) {
            try {
                await PostService.delete(id);
                this.$router.push({ name: "post" });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.card-title {
    height: 80px;
    margin-bottom: 0.75rem;
}
</style>