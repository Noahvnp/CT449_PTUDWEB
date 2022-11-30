<template>
    <div class="container mt-3">
        <h1 class="text-primary">Chỉnh sửa tin tức</h1>
    <form ref="form" @submit.prevent="updateForm" enctype="multipart/form-data">
        <div class="form-group">
            <label for="formGroupExampleInput">Tiêu đề</label>
            <input type="text" class="form-control" id="formGroupExampleInput" v-model="post.title">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Danh mục</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" v-model="post.category">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput3">Nội dung</label>
            <input type="text" class="form-control" id="formGroupExampleInput3" v-model="post.content">
        </div>
        <div class="form-group">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Chọn ảnh</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" ref="file"
                        @change="selectFile">
                </div>
            </form>
            <img :src="`http://127.0.0.1:5000/${post.image}`" alt="" style="width: 120px;">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Cập nhật </button>
    </form>
    </div>
</template>

<script>
import PostService from "@/services/post.service";
export default {
    data() {
        return {
            post: {
                title: "",
                category: "",
                content: "",
                image: "",
            },
            image: "",
        }
    },
    async created() {
        try {
            const response = await PostService.get(this.$route.params.id);
            this.post = response;
            // console.log(this.post);
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        selectFile(file) {
            console.log(this.$refs.file.files[0]);
            if (this.$refs.file.files[0] != 'undefined') {
                this.image = this.$refs.file.files[0];
            }
        },
        async updateForm() {
            const formData = new FormData();
            formData.append('title', this.post.title);
            formData.append('category', this.post.category);
            formData.append('content', this.post.content);
            console.log(typeof this.image);
            console.log(this.image.name);
            console.log(this.post.image);
            if(this.image !== ''){
                formData.append('image',this.image, this.image.name);
            }
            // formData.append('old_image',this.image, this.post.image);

            try {
                const response = await PostService.update(this.$route.params.id, formData);
                this.post = response;
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>