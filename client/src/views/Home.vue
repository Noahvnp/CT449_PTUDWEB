<template>
    <div class="container mt-3">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner ">
              <div class="carousel-item active">
                <img class="img-carousel d-block w-100" src="../assets/img/1.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="img-carousel d-block w-100" src="../assets/img/CG2A0972-1657100093-5746-1669795190.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="img-carousel d-block w-100" src="../assets/img/Ten-lua-Tomahawk-tomahawk.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
    </div>

    <div class="row m-5 px-4">
        <div class="col-lg-4 col-sm-6 mb-4" v-for="post in posts" :key="post._id">
            <router-link :to="{
                name: 'detail-post',
                params: { id: post._id }
            }">
                <div class="card card--post">
                    <img class="card-img-top card-img" :src="`http://127.0.0.1:5000/${post.image}`" alt="Card image cap">
                    <div class="card-body">
                        <div class="btn btn-primary">{{ post.category }}</div>
                        <h5 class="card-title">{{ post.title }} </h5>
                        <p class="card-text">{{ post.content.substring(0,80) + "..." }}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Thời gian tạo: {{post.created}}</small>
                    </div>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
import PostService from "@/services/post.service";
export default {
    name: "Home",
    data() {
        return { posts: [], }
    },
    async created() {
        try {
            this.posts = await PostService.getAll();
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped>
    .img-carousel {
        height: 400px;
    }
    .card-img{
        width: 100%;
        height: 200px;
        
    }
    .card--post{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
</style>