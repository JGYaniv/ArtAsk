require 'test_helper'

class Api::TasksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_tasks_show_url
    assert_response :success
  end

  test "should get index" do
    get api_tasks_index_url
    assert_response :success
  end

end
