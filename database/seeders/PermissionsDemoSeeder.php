<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Support\Facades\Hash;
class PermissionsDemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();


        // create roles and assign existing permissions
        Permission::create(['guard_name' => 'api','name' => 'create activity']);
        Permission::create(['guard_name' => 'api','name' => 'read activity']);
        Permission::create(['guard_name' => 'api','name' => 'update activity']);
        Permission::create(['guard_name' => 'api','name' => 'delete activity']);
        Permission::create(['guard_name' => 'api','name' => 'create word']);
        Permission::create(['guard_name' => 'api','name' => 'read word']);
        Permission::create(['guard_name' => 'api','name' => 'update word']);
        Permission::create(['guard_name' => 'api','name' => 'delete word']);
        
        $role1 = Role::create(['guard_name' => 'api','name' => 'teacher']);
        $role1->givePermissionTo('create activity');
        $role1->givePermissionTo('read activity');
        $role1->givePermissionTo('update activity');
        $role1->givePermissionTo('delete activity');
        $role1->givePermissionTo('create word');
        $role1->givePermissionTo('read word');
        $role1->givePermissionTo('update word');
        $role1->givePermissionTo('delete word');

        $role2 = Role::create(['guard_name' => 'api','name' => 'student']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider
        $role2->givePermissionTo('read activity');
        // create demo users
        $user = \App\Models\User::factory()->create([
            'email' => 'test@teacher.com',
            'password'=> Hash::make("123456")
        ]);
        $user->assignRole($role1);

        $user = \App\Models\User::factory()->create([
            'email' => 'test@student.com',
            'password'=> Hash::make("123456")
            
        ]);
        $user->assignRole($role2);

    }

}
