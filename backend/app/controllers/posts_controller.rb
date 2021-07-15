class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :find_user
  before_action :authorized

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts

    # @posts = @user.posts
    # render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post

    
    # @post = @user.posts.find_by(id: params[:id])
    # render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: {errors: "Post could not be created"}
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post = current_user.posts.find_by_id(params[:id])
      @post.update(post_params)
      render json: @post
    else
      render json: {errors: "Post could not be updated"}
    end
  end

  # DELETE /posts/1
  def destroy
    if @post = current_user.posts.find_by_id(params[:id])
      @post.destroy
    else
      render json: {errors: "Post could not be deleted"}
    end

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :body, :image, :user_id)
    end

    def find_user
      @user = User.find_by(id: params[:user_id])
    end

end
