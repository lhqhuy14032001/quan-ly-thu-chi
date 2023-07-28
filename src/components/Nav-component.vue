<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'HomePage' }"
          >Quản lý thu chi cá nhân</router-link
        >
      </li>
      <li><router-link :to="{ name: 'HomePage' }">Home Page</router-link></li>
      <li>
        <router-link :to="{ name: 'Register' }">Transactions List</router-link>
      </li>
    </ul>
  </nav>
</template>

<script></script>

<style lang="css" scoped>
.navbar {
  background-color: #000;
  padding: 24px 0;
}
.navbar ul li {
  display: inline-block;
  padding: 8px 24px;
  color: #fff;
}
.navbar ul li:hover {
  opacity: 0.7;
}
.navbar ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
</style>
