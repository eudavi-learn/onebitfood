class ProductSerializer < ActiveModel::Serializer
	include Rails.application.routes.url_helpers
	
	attributes :id, :name, :description, :price, :image_url
	
	def image_url
		rails_blob_url(object.image)
	end
end
