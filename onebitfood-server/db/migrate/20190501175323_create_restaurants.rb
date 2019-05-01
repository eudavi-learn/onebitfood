class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :description
      t.integer :status
      t.float :delivery_tax
      t.string :state
      t.string :city
      t.string :street
      t.string :neighborhood
      t.string :number
      t.string :complement
      t.string :reference
      t.string :cep
      t.float :latitude
      t.float :longitude
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
