<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\GameVersion;
use App\Models\Score;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
    function get(string $slug){
        $game = Game::where('slug',$slug)->first();
        $scores = Score::where('game_id', $game->id)->get();

        $scores = $scores->map(function($score){
            return [
                'username'=>$score->User->username,
                'score'=>$score->score,
                'timestamp'=>$score->created_at
            ];
        })->toArray();

        return response()->json([
            'scores'=>$scores
        ]);
    }

    function post(string $slug, Request $request){
        $validatedData = $request->validate(['score'=>'required|integer']);

        $game = Game::where('slug',$slug)->first();
        $version = GameVersion::where('game_id', $game->id)->orderBy('version', 'desc')->first();
        
        $data['user_id'] = $request->user()->id;
        $data['game_id'] = $game->id;
        $data['game_version_id'] = $version->id;
        $data['score'] = $validatedData['score'];

        $score = Score::where('game_id', $game->id)->where('user_id', $request->user()->id)->first();
        if($score){
            if($score->score < $data['score']){
                $score->update($data);
            }
        }else{
            Score::create($data);
        }

        return response()->json([
            'resnponse'=>"success"
        ]);
    }
}
