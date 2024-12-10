<script>
// Import the hotels data
import hotels from '/src/HotelData/hotels.json'

export default {
  name: "HotelPage",

  // Define the data properties
  data() {
    return {
      hotels: hotels,
      currentPage: 1,
      itemsPerPage: 6,
    };
  },

  // Define the computed properties
  computed: {
    // Calculate the paginated hotels based on the current page
    paginatedHotels() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.hotels.slice(start, end);
    },
    // Calculate the total number of pages by dividing the total number of hotels by the items per page
    totalPages() {
      return Math.ceil(this.hotels.length / this.itemsPerPage);
    },
  },

  // Define the methods
  methods: {
    // Function to navigate to the previous or next page
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    goToHotel(id) {
      this.$router.push({name: 'hotel', params: {id: id}});
    },
  },
};
</script>

<template>
  <h1>Hotels</h1>
  <div class="container">
    <div class="hotel-card" v-for="hotel in paginatedHotels" :key="hotel.id" @click="goToHotel(hotel.id)">
      <img :src="hotel.image || 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'"
           alt="Hotel Image"/>
      <div class="hotel-header">
        <h2>{{ hotel.name }}</h2>
        <span :class="['badge', hotel.availability ? 'badge-available' : 'badge-not-available']">
          {{ hotel.availability ? 'Available' : 'Not Available' }}
        </span>
        <router-link
            :to="{ name: 'hotel', params: { id: hotel.id }}"
            class="button button-primary"
        >
          View for {{ hotel.price }}
        </router-link>
      </div>
      <p>{{ hotel.content }}</p>
    </div>
  </div>

  <!-- Pagination Buttons -->
  <div class="pagination">
    <!-- Previous Button -->
    <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        :class="['button', currentPage === 1 ? 'button-secondary' : 'button-primary']">
      Previous
    </button>

    <!-- Page Number Buttons -->
    <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="['button', currentPage === page ? 'button-primary' : 'button-secondary']"
    >
      {{ page }}
    </button>

    <!-- Next Button -->
    <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        :class="['button', currentPage === totalPages ? 'button-secondary' : 'button-primary']">
      Next
    </button>
  </div>
</template>


<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

/* Page Header */
h1 {
  text-align: center;
  margin: 20px 0;
  font-size: 2rem;
  color: #343a40;
}

/* Hotel Cards */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three cards per row */
  gap: 20px; /* Space between the cards */
  padding: 20px;
  max-width: 1400px; /* Adjusted for wider layout */
  margin: 0 auto;
}

.hotel-card {
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.hotel-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}


/* Hotel Image */
img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

/* Hotel Header */
.hotel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.hotel-header h2 {
  font-size: 1.25rem;
  margin: 0;
  color: #495057;
}


/* Availability Badge */
.badge {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 10px;
}

/* Available and not available badge colors */
.badge-available {
  background-color: #28a745;
}

.badge-not-available {
  background-color: #dc3545;
}


/* Hotel Description */
.hotel-card p {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 10px 0 0;
  line-height: 1.5;
}

/* Pagination Container */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
}

/* General Button Styles */
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

/* Active State (Primary Button) */
.button-primary {
  background-color: #007bff;
  color: white;
}

.button-primary:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button-primary:active {
  background-color: #004085;
}

/* Disabled State (Secondary Button) */
.button-secondary {
  background-color: #e9ecef;
  color: #495057;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* Two cards per row */
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr; /* One card per row */
  }
}

</style>


