<?php
/**
 * Plugin Name:       Gutenberg Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenbergblocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenbergblocks_block_init() {
	register_block_type( __DIR__ . '/build/gutenbergblocks' );
	register_block_type( __DIR__ . '/build/gutenbergsecondblock' );
	register_block_type( __DIR__ . '/build/index.css' );
	register_block_type( __DIR__ . '/build/style-index.css' );
	register_block_type( __DIR__ . '/build/testblock' );
	register_block_type( __DIR__ . '/build/testblock2' );
	register_block_type( __DIR__ . '/build/gutenbergrichtext' );
    register_block_type( __DIR__ . '/build/gutenbergtoolbar' );
    register_block_type( __DIR__ . '/build/blocksupports' );
    register_block_type( __DIR__ . '/build/dynamicpost' );
}
add_action( 'init', 'create_block_gutenbergblocks_block_init' );

function create_custom_categories($cat) {
	return array_merge($cat, array(
		array(
			'slug' => 'custom_cat',
			'title' => 'Custom Categories',
		),
	));
}

add_filter( 'block_categories', 'create_custom_categories' );