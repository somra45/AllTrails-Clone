Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resources :sessions, only: [:create, :destroy, :show]
    resources :trails, only: [:create, :update, :index, :show, :destroy]
  end
end
