Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :index, :show, :update, :destroy] do
      member do
        get 'verification'
      end
    end
    resource :session, only: [:create, :destroy]
  end
end
