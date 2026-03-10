<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = ['title', 'slug', 'description','created_by', 'total_score_submited'];

    function User(){
        return $this->belongsTo(User::class, 'created_by');
    }

    function Tesetis($page = 0, $size = 10, $sortBy = 'title', $sortDir = "asc"){
    }
}
