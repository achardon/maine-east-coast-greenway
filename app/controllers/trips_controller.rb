class TripsController < ApplicationController
before_action :authorize
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        user = User.find(session[:user_id])
        render json: user.trips
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

    def create
        user_id = session[:user_id]
        user = User.find(user_id)
        trip = user.trips.create(trip_params)
        render json: trip, status: :created
    end

    def update
        trip = Trip.find(params[:id])
        trip.update(trip_params)
        render json: trip
    end

    def destroy
        trip = Trip.find(params[:id])
        trip.destroy
        head :no_content
    end

    private

    def trip_params
        params.permit(:name, :user_id, :start_date, :end_date)
    end

    def record_not_found
        render json: {error: "Trip Not Found"}, status: :not_found
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        return render json: {errors: "You must be logged in to create or edit a trip."}, status: :unauthorized unless session[:user_id]
    end

end
