#Tests unitaires
require 'rails_helper'

RSpec.describe ModeratedModel, type: :model do
  it 'moderates content and updates is_accepted column' do
    moderated_model = ModeratedModel.new(title: 'Inoffensive Title', content: 'Positive content')
    moderated_model.save

    expect(moderated_model.is_title_accepted).to be_truthy
    expect(moderated_model.is_content_accepted).to be_truthy
  end
end
