<template>
  <div class="blog-layout">
    <header>
      <h1></h1>
      <!-- Add any additional header content -->
    </header>
    <main>
      <slot /> 
    </main>
    <footer>
      <p>&copy; 2024 My Blog. All rights reserved.</p>
      <!-- Add any additional footer content -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BlogLayout'
}
</script>

<style scoped>
.blog-layout {
  max-width: 800px; 
  margin: 0 auto; 
  padding: 20px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
}

.blog-layout header {
  background-color: #f5f5f5; 
  padding: 20px; 
}

.blog-layout header h1 {
  color: pink; 
  margin: 0; 
}

.blog-layout main {
  padding: 20px 0; 
}

.blog-layout footer {
  margin-top: 20px; 
  text-align: center; 
}
</style>
