<template>
    <div>
        <ul>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
  ul{
    display: flex;
    flex-direction: row;
  }
  li{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    list-style: none;
    border: 1px solid #666;
  }
</style>