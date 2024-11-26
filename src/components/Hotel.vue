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
      selectedRoom: null,
    };
  },

  // Define the methods
  methods: {
    // Function to get the hotel based on the id
    getHotel() {
      this.hotel = this.hotels.find((hotel) => hotel.id === this.id);
      console.log('Hotel:', this.hotel);
    }
  },

  // Call the getHotel method when the component is mounted
  mounted() {
    this.getHotel();
  },
}
</script>

<template>
  <div class="container">
    <div class="top-section">
      <div class="hotel">
        <h1>{{ hotel.name }}</h1>
        <img src="https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
             :alt="hotel.name"/>
        <p>{{ hotel.content }}</p>
        <p>Availability: {{ hotel.availability ? 'Available' : 'Not Available' }}</p>
        <p>Address: {{ hotel.address }}</p>
      </div>
      <div class="order">
        <h2>Order</h2>
        <select v-model="selectedRoom">
          <option value="" disabled selected>Choose here</option>
          <option
              v-for="room in hotel.rooms"
              :key="room.id"
              :value="room"
              :disabled="!room.availability">
            {{ room.type }}
          </option>
        </select>
        <p v-if="selectedRoom">Price: {{ selectedRoom.price }}</p>
        <p v-else>Select a room to see the price</p>
        <button :disabled="!selectedRoom || !selectedRoom.availability">Order</button>
      </div>
    </div>
    <div class="rooms">
      <h2>Rooms</h2>
      <div class="room" v-for="room in hotel.rooms" :key="room.id">
        <h3>{{ room.type }}</h3>
        <p>Price: {{ room.price }}</p>
        <p v-if="!room.availability" class="available">availability: not available</p>
        <p v-if="room.availability" class="not-available">availability: available</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.top-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
}

.hotel {
  flex: 3;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hotel img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 8px;
}

.order {
  flex: 1;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.order button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.order button:hover {
  background-color: #0056b3;
}

.order select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.order select:hover {
  border-color: #007bff;
}

.order select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.order option {
  padding: 10px;
}


.rooms {
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

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

.available {
  color: red;
  font-weight: bold;
}

.not-available {
  color: green;
  font-weight: bold;
}
</style>
