class DaysController < ApplicationController
before_action :authorize

    # def index
    #     days = Day.all
    #     sorted_days = days.sort do |day|
    #         day[:id]
    #     end
    #     render json: Day.all
    # end

    def index
        if params[:trip_id]
            trip = Trip.find(params[:trip_id])
            days = trip.days
            sorted_days = days.sort_by do |day|
                day.id
            end
            render json: sorted_days
        else
            render json: Day.all
        end
    end

    # do I need any of these??
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
        day.update!(day_params)
        render json: day
    end

    # def destroy
    #     day = Day.find(params[:id])
    #     day.destroy
    #     head :no_content
    # end

    private

    def day_params
        params.permit(:id, :day, :mileage, :notes, :accommodations, :start_point, :end_point, :trip_id)
    end

end
