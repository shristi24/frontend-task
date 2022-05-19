<template>
  <section class="subscribe py-5">
    <div class="location-head d-flex flex-column align-items-center" >
    <h1>#javanepal</h1>
    <hr>
    <p>Liked Our Coffee? Share your moments with us. Follow us on Instagram.</p>

    </div>
    <!-- CARD CONTENT  -->
    <div class="subscribe-content container">
    <div class="row">
        <div class="col">
            <div class="card">
                <img src="@/assets/subscribe/1.png" alt="1st picture">
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="@/assets/subscribe/2.png" alt="1st picture">
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="@/assets/subscribe/3.png" alt="1st picture">
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="@/assets/subscribe/asset-1.png" alt="1st picture">
            </div>
        </div>
    </div>
    </div>
</section>

</template>

<script>
export default {
name: "SubscribeSection"
}
</script>

<style scoped>
.subscribe{
    background-color: #FFFCF9;
}
.service-content .col{
    display: flex;
    justify-content: center;
    align-content: center;
}
.card{
    display: flex;
    /* justify-content: space-evenly; */
}
img{
    width: 100%;
}
</style>