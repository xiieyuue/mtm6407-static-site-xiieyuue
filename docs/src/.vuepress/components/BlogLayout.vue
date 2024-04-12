<template>
  <div class="blog-layout">
    <header>
      <h1></h1>
      <!-- Add any additional header content -->
    </header>
    <main>
      <slot /> <!-- 此处添加了 <slot /> 标记 -->
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
/* Custom styles for the blog layout */
.blog-layout {
  max-width: 800px; /* Limit the width of the blog content */
  margin: 0 auto; /* Center the layout horizontally */
  padding: 20px; /* Add padding around the content */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
}

.blog-layout header {
  background-color: #f5f5f5; /* Light background color for the header */
  padding: 20px; /* Add padding to the header */
}

.blog-layout header h1 {
  color: pink; 
  margin: 0; 
}

.blog-layout main {
  padding: 20px 0; /* Add vertical padding to the main content */
}

.blog-layout footer {
  margin-top: 20px; /* Add space between main content and footer */
  text-align: center; /* Center align the footer content */
}
</style>
