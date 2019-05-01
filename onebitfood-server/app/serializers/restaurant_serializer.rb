class RestaurantSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
 
  attributes :id, :name, :description, :review, :status, :delivery_tax, :state,
    :city, :street, :neighborhood, :number, :complement,
    :reference, :cep, :image_url, :category_title
 
  has_many :product_categories, if: -> { @instance_options[:product_categories]}
 
  def image_url
    rails_blob_url(object.image)
  end
 
  def review
    object.reviews&.average(:value)
  end
 
  def category_title
    "cozinha #{object.category&.title}"
  end
end
