#
# Cookbook:: learn_chef_httpd
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

directory '/var/www/html'

template '/var/www/html/index.html' do
  source 'index.html.erb'
end

package 'httpd'

service 'httpd' do
  action [:enable, :start]
end

