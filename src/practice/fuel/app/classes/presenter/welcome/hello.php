<?php

/**
 * The welcome hello presenter.
 *
 * @package  app
 * @extends  Presenter
 */
class Presenter_Welcome_Hello extends Presenter
{


	public $_view = 'welcome/hello';

	/**
	 * Prepare the view data, keeping this in here helps clean up
	 * the controller.
	 *
	 * @return void
	 */
	public function view()
	{
		// var_dump($this->_view);die;
		// $this->_view = 'app/views/welcome/hello.php';
		// $this->_view = 'welcome/hello';
		$this->name = $this->request()->param('name', 'World');
	}
}
