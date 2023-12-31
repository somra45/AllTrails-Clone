Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json} do
    get 'trails/search', to: "trails#search"
    resources :members, only: [:create, :update, :destroy, :show] do 
      resources :favorites, only: [:create, :destroy, :index]
    end
    resources :reviews, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :trails, only: [:index, :show]
  end

  get '*path', to: "static_pages#frontend_index"
end
