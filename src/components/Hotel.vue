<script>
// Import the hotels data
import hotels from '/src/HotelData/hotels.json'

export default {
  name: "Hotel",
  // Define the prop that will be passed from the parent component
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  // Define the data properties
  data() {
    return {
      hotels: hotels,
      hotel: {},
      selectedRoomType: "", // Holds the selected room's type
    };
  },

  computed: {
    // Find the selected room object based on its type
    selectedRoom() {
      return this.hotel.rooms?.find((room) => room.type === this.selectedRoomType);
    },
  },

  // Define the methods
  methods: {
    // Function to get the hotel based on the id
    getHotel() {
      this.hotel = this.hotels.find((hotel) => hotel.id === this.id);
    }
  },

  // Call the getHotel method when the component is mounted
  mounted() {
    this.getHotel();
  },
}
</script>

<template>
  <div class="container" v-if="hotel">
    <!-- Top Section -->
    <div class="top-section flex flex-column flex-responsive">
      <div class="hotel card">
        <h1>{{ hotel.name }}</h1>
        <img :src="hotel.image || 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'" alt="Hotel Image" />
        <p>{{ hotel.content }}</p>
        <p>
          <span class="badge" :class="hotel.availability ? 'badge-available' : 'badge-not-available'">
            Availability: {{ hotel.availability ? 'Available' : 'Not Available' }}
          </span>
        </p>
        <p>Address: {{ hotel.address }}</p>
      </div>

      <!-- Order Section -->
      <div class="order card">
        <h2>Order</h2>
        <select v-model="selectedRoomType" class="input">
          <option value="" disabled selected>Choose here</option>
          <option
              v-for="room in hotel.rooms"
              :key="room.type"
              :value="room.type"
              :disabled="!room.availability">
            {{ room.type }}
          </option>
        </select>
        <p v-if="selectedRoom">Price: {{ selectedRoom.price }}</p>
        <p v-else>Select a room to see the price</p>
        <button :disabled="!selectedRoom || !selectedRoom.availability" class="button button-primary">
          Order
        </button>
      </div>
    </div>

    <!-- Rooms Section -->
    <div class="rooms card">
      <h2>Rooms</h2>
      <div class="room" v-for="room in hotel.rooms" :key="room.id">
        <h3>{{ room.type }}</h3>
        <p>Price: {{ room.price }}</p>
        <p>
          <span class="badge" :class="room.availability ? 'badge-available' : 'badge-not-available'">
            availability: {{ room.availability ? 'available' : 'not available' }}
          </span>
        </p>
      </div>
    </div>
  </div>

  <!-- Not Found Section -->
  <div v-else class="notFound">
    <h1>404</h1>
    <h4>Hotel not found</h4>
  </div>
</template>



<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Utility Flexbox Classes */
.flex {
  display: flex;
  gap: 20px;
}

.flex-column {
  flex-direction: column;
}



@media (min-width: 768px) {
  .flex-responsive {
    flex-direction: row;
    justify-content: space-between;
  }
}

/* Card Component */
.card {
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  object-fit: cover;
}

/* Hotel Content */
.hotel {
  flex: 3;
}

.order {
  flex: 1;
  text-align: center;
}

.rooms {
  margin-top: 20px;
}

/* Room Styling */
.room {
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fafafa;
}

.room h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.room p {
  margin: 5px 0;
}

/* Badge styling */
.badge {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  color: white;
}

/* Available and Not Available Badge Colors */
.badge-available {
  background-color: #28a745;
}

.badge-not-available {
  background-color: #dc3545;
}


/* Button Styling */
.button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.button-primary {
  background-color: #007bff;
  color: white;
}

.button-primary:hover {
  background-color: #0056b3;
}

.button-primary:disabled {
  background-color: #d6d6d6;
  cursor: not-allowed;
}

/* Input Fields */
.input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Not Found Page */
.notFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
