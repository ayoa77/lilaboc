Rails.application.routes.draw do
  resources :pages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get '/about', to: 'pages#about', as: :about
  get '/gallery', to: 'pages#gallery', as: :gallery
  get '/contact', to: 'pages#contact', as: :contact
  get '/review',  to: 'pages#review', as: :review
end
