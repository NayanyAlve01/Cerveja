<template>
    <header> 
    <nav class="container">
   

        <ul>
            
            <li><a href="/">Login</a></li>
            <li><a href="/produtos">Beers</a></li>
            </ul>
       
    </nav>
    </header>
</template>

<script>
export default{
    nome: 'Header',
    data(){
        return{
        menuActive: false
        }
    },
    methods:{
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = true;
        }


            
        }
}

</script>

<style scoped>
header{
    background-color: var(--color-background-nav);
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
nav {
    display: flex;
    justify-content: space-between;
    height: 10px;
    align-items: center;
}

ul{
    list-style: none;
    text-align: center;
     width: 100%;
    height: 30px;
    justify-items: left;
}

ul li{
    margin:20px 0px;
}
 ul li a{
     color: var(--color-text-light)
 }

@media (min-width:576px){
}

ul{
    display: flex;
    flex-direction: row-reverse;
    height: 60px;
    align-items: center;
}
ul li {
    margin: 0;
    margin-left: 20px;
}


</style>
