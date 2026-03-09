<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = ['title', 'slug', 'description','created_by'];

    function User(){
        return $this->belongsTo(User::class, 'created_by');
    }
}
