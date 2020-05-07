Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/notes', to: 'notes#index'
  get '/notes/:id', to: 'notes#show'
  post '/notes', to: 'notes#create'
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete 'notes/:id', to: 'notes#destroy'
end
