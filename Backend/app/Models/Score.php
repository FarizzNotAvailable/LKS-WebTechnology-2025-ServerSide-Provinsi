<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    protected $fillable = ['user_id', 'game_version_id', 'score', 'game_id'];

    function User(){
        return $this->belongsTo(User::class, 'user_id');
    }

    function GameVersion(){
        return $this->belongsTo(GameVersion::class, 'game_version_id');
    }
    function Game(){
        return $this->belongsTo(Game::class, 'game_id');
    }
}
