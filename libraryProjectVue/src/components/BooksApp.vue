<template>
  <div class="books-app">
    <navbar-app v-model="keyword"></navbar-app>
    <h1>En Çok Satanlar</h1>
    <div class="books-grid">
      <div class="books-card" v-for="book in filteredBooks" :key="book.id">
        <img :src="book.image" alt="Kitap Kapağı" v-if="book.image" />
        <h2>{{ book.title }}</h2>
        <p>{{ book.authors }}</p>
        <p>{{ book.description }}</p>
        <router-link :to="{ name: 'book-detail', params: { id: book.id } }">
          <button class="details-button">Ayrıntıları Gör</button>
        </router-link>
        <button class="add-to-cart-button">Sepete Ekle</button>
        <label class="price-label">100 TL</label>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarApp from "./NavbarApp.vue";

export default {
  name: "BooksApp",
  components: {
    NavbarApp,
  },
  data() {
    return {
      books: [],
      keyword: "",
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBBWCCL6dfG10XXSnRZBfAgLZK-wsfInWM"
        );

        if (!response.ok) {
          throw new Error("Ağ hatası: " + response.status);
        }

        const data = await response.json();

        this.books = data.items
          .filter(
            (item) =>
              item.volumeInfo &&
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.thumbnail &&
              item.volumeInfo.description
          )
          .map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors
              ? item.volumeInfo.authors.join(", ")
              : "Yazar ismi bulunamadı.",
            image: item.volumeInfo.imageLinks.thumbnail,
            description: item.volumeInfo.description,
          }));

        console.log("Yüklenen kitaplar:", this.books); 
      } catch (error) {
        console.error("Kitaplar yüklenirken hata oluştu:", error);
      }
    },

    // logId(id) {
    //   console.log("Tıklanan kitap ID'si:", id);
    // },
  },
  created() {
    this.fetchBooks();
  },
  computed: {
    filteredBooks() {
      console.log("Filtreleme işlemi başlatıldı.");
      console.log("Arama kelimesi:", this.keyword);
      return this.books.filter((book) =>
        book.title.toLowerCase().includes(this.keyword.toLowerCase())
      );
    },
  },
  watch: {
    keyword(newVal) {
      console.log("books-app bileşeninde keyword değişti:", newVal);
    },
  },
};
</script>

<style scoped>
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px; 
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
  box-sizing: border-box; 
}

.books-card img {
  max-width: 100%; 
  height: auto; 
}

.books-card h2,
.books-card p,
.price-label {
  margin: 5px 0; 
  max-width: 90%; 
  word-wrap: break-word; 
}

.details-button,
.add-to-cart-button {
  margin: 5px 0; 
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.price-label {
  font-size: 1.2rem; 
  font-weight: bold; 
  color: #28a745; 
  margin: 5px 0; 
  padding: 5px; 
  border: 1px solid #28a745; 
  border-radius: 4px; 
  background-color: rgba(40, 167, 69, 0.1); 
  max-width: 90%; 
  word-wrap: break-word; 
}

.details-button {
  background-color: #007bff; 
}

.add-to-cart-button {
  background-color: #28a745; 
}
.books-card p:last-of-type {
  display: none; 
}

/* Mobil cihazlar için düzenleme */
@media screen and (max-width: 600px) {
  .books-grid {
    grid-template-columns: 1fr; 
  }
}
</style>
