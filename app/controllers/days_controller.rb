class DaysController < ApplicationController
before_action :authorize
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: Day.all
    end

    def show
        day = Day.find(params[:id])
        render json: day
    end

    def create
        day = Day.create(day_params)
        render json: day, status: :created
    end

    def update
        day = Day.find(params[:id])
        day.update(day_params)
        render json: day
    end

    def destroy
        day = Day.find(params[:id])
        day.destroy
        head :no_content
    end

    private

    def day_params
        params.permit(:day, :mileage, :notes, :start_point, :end_point, :trip_id)
    end

    def record_not_found
        render json: {error: "Not Found"}, status: :not_found
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        return render json: {errors: "You must be logged in to use this feature."}, status: :unauthorized unless session[:user_id]
    end
end