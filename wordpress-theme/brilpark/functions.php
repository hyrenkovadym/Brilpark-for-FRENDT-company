<?php

if (!defined('ABSPATH')) {
    exit;
}

function brilpark_enqueue_assets() {
    wp_enqueue_style(
        'brilpark-fonts',
        'https://fonts.googleapis.com/css2?family=Exo+2:wght@500;600;700;800&family=Mulish:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'brilpark-main',
        get_template_directory_uri() . '/assets/style.css',
        array('brilpark-fonts'),
        '1.0.0'
    );

    wp_enqueue_script(
        'brilpark-main',
        get_template_directory_uri() . '/assets/script.js',
        array(),
        '1.0.0',
        true
    );

    wp_localize_script(
        'brilpark-main',
        'BRILPARK',
        array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('brilpark_form_nonce')
        )
    );
}
add_action('wp_enqueue_scripts', 'brilpark_enqueue_assets');

function brilpark_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'brilpark_setup');

function brilpark_submit_request() {
    check_ajax_referer('brilpark_form_nonce', 'nonce');

    $full_name = sanitize_text_field(wp_unslash($_POST['fullName'] ?? ''));
    $phone = sanitize_text_field(wp_unslash($_POST['phone'] ?? ''));
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    $industry = sanitize_text_field(wp_unslash($_POST['industry'] ?? ''));

    if (!$full_name || !$phone || !$email || !$industry) {
        wp_send_json_error(
            array('message' => 'Please fill in all form fields.'),
            400
        );
    }

    if (!is_email($email)) {
        wp_send_json_error(
            array('message' => 'Please enter a valid email address.'),
            400
        );
    }

    $to = 'o.sharchuk@brilpark.com';
    $subject = 'New resident request from BRIL website';
    $message = "New resident request:\n"
        . "Full name: {$full_name}\n"
        . "Phone: {$phone}\n"
        . "Email: {$email}\n"
        . "Company profile: {$industry}\n";

    $headers = array('Content-Type: text/plain; charset=UTF-8');
    $headers[] = 'Reply-To: ' . $email;

    $sent = wp_mail($to, $subject, $message, $headers);

    if (!$sent) {
        wp_send_json_error(
            array('message' => 'Unable to send request right now. Please try again.'),
            500
        );
    }

    wp_send_json_success(
        array('message' => 'Request sent successfully.')
    );
}
add_action('wp_ajax_brilpark_submit_request', 'brilpark_submit_request');
add_action('wp_ajax_nopriv_brilpark_submit_request', 'brilpark_submit_request');
