<template>
    <div class="container mt-3">
        <h1 class="text-primary">Thêm mới tin tức</h1>
        <form ref="form" @submit.prevent="submitForm" enctype="multipart/form-data">
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
            </div>
            <button type="submit" class="btn btn-primary btn-block">Thêm </button>
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
    methods: {
        selectFile() {
            this.image = this.$refs.file.files[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append('title', this.post.title);
            formData.append('category', this.post.category);
            formData.append('content', this.post.content);
            formData.append('image', this.image, this.image.name);
            try {
                const response = await PostService.create(formData);
                this.post = response;
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>