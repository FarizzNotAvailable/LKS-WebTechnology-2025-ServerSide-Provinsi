<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameVersion extends Model
{
    protected $fillable = ['game_id', 'version', 'storage_path'];

    function Game(){
        return $this->belongsTo(Game::class, 'game_id');
    }
}
