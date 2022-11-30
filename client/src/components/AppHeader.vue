<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">TinTucMoi</a>
        <div class="collapse navbar-collapse">
            <div class="mr-auto navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'post' }" class="nav-link">
                        Trang chủ
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'add-post' }" class="nav-link">
                        Thêm mới
                    </router-link>
                </li>
                
            </div>
             <a href="/" class=" my-2 my-lg-0">
                 <router-link :to="{ name: 'login' }" class="nav-link">
                     <i class="fa-regular fa-user"></i>
                    Đăng Nhập
                </router-link>
            </a>
        </div>
    </nav>
</template>

    