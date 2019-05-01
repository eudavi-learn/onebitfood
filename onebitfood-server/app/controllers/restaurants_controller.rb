class RestaurantsController < ApplicationController
	before_action :set_restaurant, only: [:show]

	def index
		@restaurants = Restaurant.near(params[:city] || 'São Paulo')
		filter_by_category if params[:category]
		render json: @restaurants
	end

	def show
		render json: @restaurant, product_categories: true
	end

	def search
		@restaurants = Restaurant.search(name_or_description_cont: params[:q]).result
		@restaurants = @restaurants.near(params[:city]) if params[:city]
		
		render json: @restaurants
	end

	private

	def filter_by_category
		@restaurants = @restaurants.select do |r|
			r.category.title == params[:category]
		end
	end

	def set_restaurant
		@restaurant = Restaurant.find(params[:id])
	end
end
