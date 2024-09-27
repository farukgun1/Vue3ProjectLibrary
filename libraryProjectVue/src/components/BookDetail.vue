<template>
  <div class="book-detail">
    <div class="books-card">
      <h2>{{ book.title }}</h2>
      <img :src="book.image" alt="Kitap Kapağı" v-if="book.image" />
      <p><strong>Yazarlar:</strong> {{ book.authors }}</p>
      <p><strong>Açıklama:</strong> {{ book.description }}</p>
      <div class="details-button">
        <button @click="addToCart">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  data() {
    return {
      book: {
        title: "",
        authors: "",
        description: "",
        image: "",
      },
    };
  },
  created() {
    this.fetchBookDetail();
  },
  methods: {
    async fetchBookDetail() {
      const id = this.$route.params.id; // ID'yi route parametrelerinden al
      console.log("Tıklanan kitap ID'si:", id); // 
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await response.json();
      this.book = {
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors
          ? data.volumeInfo.authors.join(", ")
          : "Bilinmiyor",
        description: data.volumeInfo.description || "Açıklama bulunamadı",
        image: data.volumeInfo.imageLinks?.thumbnail || "", // Resim varsa al
      };
    },
    addToCart() {
      console.log(`${this.book.title} sepete eklendi.`);
    },
  },
};
</script>

<style scoped>
.book-detail {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.books-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  max-width: 300px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

.books-card img {
  max-width: 100%; 
  height: auto; 
}

.books-card h2,
.books-card p {
  margin: 5px 0; 
  max-width: 90%; 
  word-wrap: break-word; 
}

.details-button {
  margin-top: 10px; 
}

.details-button button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  background-color: #007bff; 
}
</style>
