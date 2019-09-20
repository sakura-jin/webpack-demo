<template>
    <div id="sakura">
        <h1>{{msg}}</h1>
        <i class="iconfont icon-child"></i>
    </div>
</template>

<script>
export default {
    name:"App",
    data(){
        return {
            msg:"楚子航"
        }
    }    
}
</script>
<style lang="less" scoped>
@font-color:red;
h1{color: @font-color};
.iconfont{
    color: purple;
    font-size: 50px;
    font-weight: bold;
}
</style>