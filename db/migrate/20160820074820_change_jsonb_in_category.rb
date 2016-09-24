class ChangeJsonbInCategory < ActiveRecord::Migration
  def change
    remove_column :categories, :name
    add_column :categories, :name_translations, :jsonb, null: false, default: '{}'
    add_index  :categories, :name_translations, using: :gin
  end
end
