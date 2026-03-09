<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAdmin extends Model
{
    protected $fillable = ['user_id'];

    function User(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
