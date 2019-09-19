<template>
    <div id="sakura">
        <h1>{{msg}}</h1>
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
</style>