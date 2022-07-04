<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
            'config_name' => '',
            'key_name' => 'setting_name',
            'key_value'=> 'default',
            'user_id' => 'null'
            ],
            [
            'config_name' => 'default',
            'key_name' => 'word_written',
            'user_id' => 11,
            'key_value'=> 1
            ],
            [
            'config_name' => 'default',
            'key_name' => 'longToSeeWord',
            'user_id' => 11,
            'key_value'=> '2'
            ],

            [
            'config_name' => 'default',
            'key_name' => 'listenTheWord',
            'user_id' => 11,
            'key_value'=> 1
            ],
            [
            'config_name' => 'default',
            'key_name' => 'seeGraphicsPicture',
            'user_id' => 11,
            'key_value'=> 1
            ],
            [
            'config_name' => 'default',
            'key_name' => 'timeOfGraphics',
            'user_id' => 11,
            'key_value'=> '2'
            ],
            [
            'config_name' => 'default',
            'key_name' => 'SeveralDistructionLetter',
            'user_id' => 11,
            'key_value'=> '2'
            ],
            [
            'config_name' => 'default',
            'key_name' => 'flashingLightOnButton',
            'user_id' => 11,
            'key_value'=> '#000000'
            ],
            [
            'config_name' => 'default',
            'key_name' => 'bgColorButtonWithLetter',
            'user_id' => 11,
            'key_value'=> '#000000'
            ],
        ]
    }
}
