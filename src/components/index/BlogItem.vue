<template>
  <v-card>

    <v-layout column mt-3>

      <v-flex d-flex align-end pl-3 pb-3  class="blog-item-header blog-header-bg display-1">
        {{blog.title}}
      </v-flex>
      
      <v-flex mx-3 my-3>
         {{blog.excerpt}}
        <v-btn flat small color="primary" @click="$router.push('/detail/'+blog.id)">查看更多</v-btn>
      </v-flex>
      <v-divider/>
      <v-flex>
        <v-layout align-center mx-2 my-2>
          <v-flex>
            <v-layout align-center>
              <v-avatar :size="50">
                <img :src="blog.user.icon" alt="avatar">
              </v-avatar>
              <v-layout column>
                <p class="info-footer-text">{{blog.user.username}}</p>
                <p class="info-footer-text">{{blog.add_time | timeformat}}  <span class="blog-item-footer-text">{{blog.num}} view</span></p> 
              </v-layout>
            </v-layout>
          </v-flex>
          <p>{{blog.category.name}}</p>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'BlogItem',
  data: () => ({

  }),
  props: {
    blog: Object
  }
}
</script>


<style scoped>
.blog-item {
  margin-top: 20px;
}

.blog-item-header {
  height: 250px;
  color: white;
}

.blog-item-footer {
  border-top-width: 1px;
  border-top-color: rgb(240, 236, 236);
  border-style: solid;
}

.blog-item-footer-text-warpper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-item-footer-text {
  color: gray;
  margin-left: 12px;
  padding: 4px;
}

.blog-item-category-text {
  color: "#607D8B";
}

.blog-item-footer-view {
  margin-left: 16px;
}
</style>
