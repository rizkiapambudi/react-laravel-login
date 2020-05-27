<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$user = new \App\User;
        $user->name = "Rizki";
        $user->email = "rizki@mail.com";
        $user->password = Hash::make("Ri123456");

        $user->save();
    }
}
