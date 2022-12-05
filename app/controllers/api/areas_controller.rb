class Api::AreasController < ApplicationController
  # makes sure you are logged in before using the controller
before_action :authenticate_user!
before_action :set_area, only: [:show, :update, :destroy]

  def index
    render json: Area.all
  end

  def show
    render json: @area
  end

  def create
    @area = Area.new(area_params)
    if @area.save
      render json: @area
    else 
      render json: { errors: @area.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @area.update(area_params)
      render json: @area
    else 
      render json: { errors: @area.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @area = Area.find(params[:id])
    @area.destroy
    render json: { message: 'Area has been removed'}
  end

  private
  def area_params
    params.require(:area).permit(:name)
  end

  def set_area
    @area = Area.find(params[:id])
  end
end


# :address, :city, :country, :zip, :mcontact, :pic