#
# Cookbook:: learn_chef_httpd
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

directory '/var/www/html' do
	owner 'vagrant'
	group 'vagrant'
	mode '0755'
	action :create
end

template '/var/www/html/index.html' do
  source 'index.html.erb'
	owner 'vagrant'
	group 'vagrant'
	mode '0755'
end

package 'httpd'

service 'httpd' do
  action [:enable, :start]
end

