#fichier  pour  exemple
class ModeratedModel < ApplicationRecord
    include Moderable
    attribute :title, :string
    attribute :content, :text
  end
  