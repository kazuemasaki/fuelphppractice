#
# Cookbook:: fuelphp
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

bash 'install packages by composer' do
	cwd '/var/www/practice/'
	code <<-EOC
		php composer.phar install
	EOC
	creates '/var/www/practice/composer.lock'
end

bash 'update packages by composer' do
	cwd '/var/www/practice/'
	code <<-EOC
		php composer.phar self-update
		php composer.phar update
	EOC
end