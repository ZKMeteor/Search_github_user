<template>
  <section class="junmbotron">
    <h3 class="jumbotron-heading">Search github user</h3>
    <div>
      <input type="text" placeholder="請輸入關鍵字" v-model="keyword">&nbsp;<button @click="search">搜尋</button>
    </div>
  </section>
</template>

<script>

  import axios from 'axios'  
  export default {
    name: 'search',
    data(){
      return{
        keyword:'',
      }
    },
    methods:{
      search(){
        this.$bus.$emit('updatelist',{isload:true,errormsg:'',users:[],isfirst:false})
        axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          response =>{
            console.log('成功取得資料')
            this.$bus.$emit('updatelist',{isload:false,errormsg:'',users:response.data.items,isfirst:false})
          },
          error =>{
            console.log('資料取的錯誤',error.message);
            this.$bus.$emit('updatelist',{isload:false,errormsg:error.message,users:[],isfirst:false})
          }
        )
      }
    }

  }

</script>


<style>

.junmbotron{
  padding: 20px 50px;
}


</style>