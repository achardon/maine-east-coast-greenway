class TripsController < ApplicationController
before_action :authorize
before_action :set_trip, only: [:destroy, :update]
before_action :set_user, only: [:index, :create]

    def index
        # user = User.find(session[:user_id])
        render json: @user.trips
    end

    #do I need this method?
    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

    def create
        # user_id = session[:user_id]
        # user = User.find(user_id)
        trip = @user.trips.create!(trip_params)
        render json: trip, status: :created
    end

    def update
        # trip = Trip.find(params[:id])
        @trip.update!(trip_params)
        render json: trip
    end

    def destroy
        # trip = Trip.find(params[:id])
        @trip.destroy
        head :no_content
    end

    private

    def set_trip
        @trip = Trip.find(params[:id])
    end

    def trip_params
        params.permit(:name, :user_id, :start_date, :end_date, days_attributes: [:day, :start_point, :end_point, :mileage, :accommodations, :notes])
    end

end
