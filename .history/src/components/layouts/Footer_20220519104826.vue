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
        <img class="icons" src="../../assets/SocialMediaIcon.png" alt="icons">
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
  padding: 20px;
}
p{
  color: #fff;
}
.icons{
  height: 30px;
  width: 60px;
}
</style>