<template>
<div class="footer py-5">
  <center>
      <div class="footer-logo">
        <img class="footer-logo" src="../../assets/footer.png" alt="Footer Logo">
      </div>
      <div class="footer-content">
        <p>Tridevi marg, Thamel Kathmandu, Nepal</p>
        <p>info@himalyanjava.com</p>
        <p>+977-[0]1-4422519</p>
       <p> <img class="icons" src="../../assets/SocialMediaIcon.png" alt="icons"></p>
      </div>
    </center>
</div>
    
</template>

<script>
export default {
name: 'Footer',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.footer{
  height: 50vh;
  width: 100%;
  background-color: #161616;
}
.footer-logo{
  height: 100px;
  width: 100px;
}
.footer-content{
  padding-top: 40px;
}
p{
  font-family: 'Roboto', sans-serif;
  color: #fff;
  margin-bottom: 10px;
}
.icons{
  height: 25px;
  width: 60px;
}
</style>