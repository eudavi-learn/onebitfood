class Order < ApplicationRecord
	belongs_to :restaurant
	has_many :order_products

	validates :name, presence: true
	validates :phone_number, presence: true
	validates :total_value, presence: true

	enum status: { waiting: 0, delivered: 1 }

	accepts_nested_attributes_for :order_products, allow_destroy: true

	before_validation :set_price

	private

	def set_price
		@final_price = 0

		order_products.each do |order_product|
			product = Product.find order_product.product_id
			@final_price += order_product.quantity * product.price
		end

		self.total_value = @final_price
	end
end
