class Category < ApplicationRecord
	has_many :restaurants
	
	has_one_attached :image

	validates :title, presence: true
end
