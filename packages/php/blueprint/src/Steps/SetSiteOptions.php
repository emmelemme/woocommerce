<?php

namespace Automattic\WooCommerce\Blueprint\Steps;

class SetSiteOptions extends Step {
	private array $options;

	public function __construct(array $options = array()) {
		$this->options = $options;
	}

	public static function get_step_name() {
		return 'setSiteOptions';
	}

	public function get_schema($version = 1) {
		return array(
			'$id' => 1,
			"type" => "object",
			"properties" => [
				"step" => [
					"type" => "string",
					'enum' => [static::get_step_name()],
				],
				"options" => [
					"type" => "object",
					"additionalProperties" => [
						"type" => "string"
					]
				]
			],
			"required" => ["step", "options"]
		);
	}

	public function prepare_json_array() {
		return array(
			'step' => static::get_step_name(),
			'options' => $this->options,
		);
	}
}