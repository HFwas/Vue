<template>
	<div>
		<ul>
			<li v-for="item in messageList" :key="item.id">

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
          name:'xiangqing',
          // path:'/home/message/detail',
          query:{
            id:item.id,
            title:item.title
          }
				}">
          {{item.title}}
          <button @click="pushShow(item)">push查看</button>
          <button @click="replaceShow(item)">replace查看</button>
        </router-link>&nbsp;&nbsp;
			</li>
		</ul>
    <router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
    data(){
      return{
        messageList:[
          {id:'001',title:'消息001'},
          {id:'002',title:'消息002'},
          {id:'003',title:'消息003'}
        ]
      }
    },
    methods: {
      pushShow(item){
        this.$router.push({
          name:'xiangqing',
          query:{
            id:item.id,
            title:item.title
          }
        })
      },
      replaceShow(item){
        this.$router.replace({
          name:'xiangqing',
          query:{
            id:item.id,
            title:item.title
          }
        })
      }
    },
	}
</script>
