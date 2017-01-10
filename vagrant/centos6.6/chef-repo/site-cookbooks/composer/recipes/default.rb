#
# Cookbook:: composer
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.


template '/var/www/composer.json' do
  source 'composer.json.erb'
  mode 0755
end

# template '/var/www/composer.phar' do
#   source 'composer.phar.erb'
#   mode 0755
# end

bash 'install composer' do
	cwd '/var/www/'
	code <<-EOC
		curl -s https://getcomposer.org/installer | php
		php composer.phar
	EOC
	creates '/var/www/composer.phar'
end 

bash 'install packages by composer' do
	cwd '/var/www/'
	code <<-EOC
		php composer.phar install
	EOC
	creates '/var/www/composer.lock'
end

bash 'update packages by composer' do
	cwd '/var/www/'
	code <<-EOC
		php composer.phar update
	EOC
end