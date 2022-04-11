class DaysController < ApplicationController
before_action :authorize

    #all methods except update occur in the trips_controller and are therefore not needed here

    # used to update each day once the trip has been created
    def update
        day = Day.find(params[:id])
        day.update!(day_params)
        render json: day
    end

    private

    def day_params
        params.permit(:id, :day, :mileage, :notes, :accommodations, :start_point, :end_point, :trip_id)
    end

end
