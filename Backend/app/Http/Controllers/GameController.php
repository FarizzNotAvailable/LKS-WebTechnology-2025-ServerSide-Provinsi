<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\GameVersion;
use App\Models\Score;
use Illuminate\Http\Request;

class GameController extends Controller
{
    function get(Request $request){
        $dataClient = $request->validate([
            'page'=>'nullable|integer|min:1',
            'size'=>'nullable|integer|min:1|max:100',
            'sortBy'=>'nullable|string|in:title,uploadDate,popular',
            'sortDir'=>'nullable|string|in:asc,desc'
        ]);

        $sortBy = $dataClient['sortBy'] ?? 'title';
        $sortDir = $dataClient['sortDir'] ?? 'asc';
        $size = $dataClient['size'] ?? 10;
        $page = $dataClient['page'] ?? 0;

        if($sortBy == 'uploadDate'){
            $sortBy = 'updated_at';
            if($sortDir == 'asc'){
                $sortDir = 'desc';
            }else if($sortDir == 'desc'){
                $sortDir = 'asc';
            }
        }else if($sortBy == 'popular'){
            $sortBy = 'total_score_submited';
            if($sortDir == 'asc'){
                $sortDir = 'desc';
            }else if($sortDir == 'desc'){
                $sortDir = 'asc';
            }
        }

        $games = Game::orderBy($sortBy, $sortDir)->paginate($size, ['*'], 'page', $page)->all();

        $content = [];
        foreach ($games as $game) {
            $version = GameVersion::where('game_id', $game->id)->orderBy('updated_at', 'desc')->first();
            $score = Score::where('game_id', $version->game_id)->get();
            $totalScore = $score->count();
            $content[] = [
                'slug'=>$game->slug,
                'title'=>$game->title,
                'description'=>$game->description,
                'thumnail'=>"/games/".$game->slug.'/'.$version->version.'/thumnail.png',
                'uploadTimestamp'=>$game->updated_at,
                'author'=>$game->User->username,
                'scoreCount'=>$totalScore
            ];
        }

        return response()->json([
            'page'=>$page,
            'size'=>$size,
            'content'=>$content
        ]);
    }

    function post(Request $request){
        $dataClient = $request->validate([
            'title' => 'required|min:3|max:60',
            'description' => 'required|min:0|max:200'
        ]);

        $slug = strtolower($dataClient['title']);
        
        $slug = str_replace(' ', '-', $slug);

        $game = Game::where('slug',$slug)->first();

        if($game){
            return response()->json([
                'status'=>'invalid',
                'message'=>'game title already exist'
            ]);
        }

        $dataClient['slug']=$slug;

        $dataClient['created_by'] = $request->User()->id;

        Game::create($dataClient);

        return response()->json([
            'status'=>'success',
            'slug'=>$slug
        ]);
    }

    function show(string $slug){
        $game = Game::where('slug', $slug)->first();

        $version = GameVersion::where('game_id', $game->id)->orderBy('updated_at', 'desc')->first();
        $path = $version->storage_path;
        $version = $version->version;

        return response()->json([
            'slug' =>$game->slug,
            'title' =>$game->title,
            'description' =>$game->description,
            'thumnail' =>"/games/".$slug."/".$version."/thumnail.png",
            'uploadTimestamp' =>$game->updated_at,
            'author' =>$game->User->username,
            'scoreCount' =>$game->total_score_submited,
            'gamePath' =>$path,
        ]);
    }

    function put(string $slug, Request $request){
        // Debug: Uncomment to check incoming data
        // return response()->json(['received' => $request->all()]);

        $validatedData = $request->validate([
            'title' =>'nullable|string|min:3|max:60',
            'description'=>'nullable|string|min:0|max:200'
        ]);

        $game = Game::where('slug', $slug)->first();

        if(!$game){
            return response()->json(['status' => 'error', 'message' => 'Game not found'], 404);
        }


        // Update only provided fields
        $updateData = [];
        if(isset($validatedData['title'])){
            $updateData['title'] = $validatedData['title'];
        }
        if(isset($validatedData['description'])){
            $updateData['description'] = $validatedData['description'];
        }

        // Check if user is the author
        $userId = $request->user()->id;
        if($game->created_by != $userId){
            return response()->json([
                'status'=>'forbidden',
                'message'=>'You are not the game author'
            ], 403);
        }

        $games = $game->update($updateData);

        return response()->json([
            'status' => 'success',
            'message' => 'Game updated successfully',
            'updated'=> $games
        ]);
    }

    function delete(string $slug, Request $request){
        $game = Game::where('slug', $slug)->first();
        $userId = $request->user()->id;
        if($game->created_by != $userId){
            return response()->json([
                'status'=>'forbidden',
                'message'=>'You are not the game author'
            ], 403);
        }
        $version = GameVersion::where('game_id', $game->id)->get();
        $version->map(function($versi){
            $versi->delete();
        });
        $game->delete();
        return response()->json([],204);
    }

    
}
