<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">Online Library</a>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-start">
        <li class="navbar-item"><a href="#">Anasayfa</a></li>
        <li class="navbar-item"><a href="#">Kitaplar</a></li>
        <li class="navbar-item"><a href="#">Hakkımızda</a></li>
        <li class="navbar-item"><a href="#">İletişim</a></li>
      </ul>
      <ul class="navbar-end">
        <li class="navbar-item">
          <input
            type="text"
            class="search-input"
            placeholder="Kitap ara..."
            :value="modelValue"
            @input="updateKeyword"
          />
        </li>
        <li class="navbar-item">
          <button class="button">Sepetim</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarApp",
  props: {
    modelValue: {
      // modelValue prop'u ekledik
      type: String,
      default: "",
    },
  },
  methods: {
    updateKeyword(event) {
      const value = event.target.value;
      console.log("Arama kelimesi:", value); // Arama kelimesini konsola yazdır
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  color: black;
}

.navbar-brand .navbar-item {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-start,
.navbar-end {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-item {
  margin: 0 1rem;
}

.navbar-item a {
  color: black !important;
  text-decoration: none;
}

.search-input {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}

.button {
  padding: 0.5rem 1rem;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #e84118;
}
</style>
