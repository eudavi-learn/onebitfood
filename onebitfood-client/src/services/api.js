import axios from "axios";

const url = axios.create({ baseURL: "http://localhost:3001" })

export default {
  loadRestaurants: (address, category) => {
    let city_params = (address && address.city != undefined) ? `city=${address.city}` : ''
    let category_params = (category != null) ? `&category=${category.title}` : ''

    return url.get(`/restaurants?${city_params}${category_params}`)
  },

  searchRestaurants: (search) => url.get(`/restaurants/search?q=${search}`),

  getRestaurant: (id) => url.get(`restaurants/${id}`),

  loadCategories: () => url.get("/categories")
}