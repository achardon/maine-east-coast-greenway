class UsersController < ApplicationController
before_action :set_user, only: [:show]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
